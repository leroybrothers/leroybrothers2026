type VercelResponse = {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => VercelResponse;
  json: (body: unknown) => void;
};
type VercelRequest = {
  method?: string;
  body?: string | Record<string, unknown>;
};

const FLODESK_API_URL = "https://api.flodesk.com/v1";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.FLODESK_API_KEY;
  const segmentId = process.env.FLODESK_SEGMENT_ID;

  if (!apiKey || !segmentId) {
    console.error("Missing FLODESK_API_KEY or FLODESK_SEGMENT_ID");
    res.status(500).json({ error: "Newsletter signup is not configured." });
    return;
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  const email = body?.email?.trim();
  const firstName = body?.first_name?.trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ error: "Valid email is required." });
    return;
  }

  const auth = Buffer.from(`${apiKey}:`).toString("base64");
  const payload: { email: string; segment_ids: string[]; first_name?: string } = {
    email,
    segment_ids: [segmentId],
  };
  if (firstName) payload.first_name = firstName;

  try {
    const response = await fetch(`${FLODESK_API_URL}/subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
        "User-Agent": "Leroy Brothers (www.leroybrothers.com)",
      },
      body: JSON.stringify(payload),
    });

    const raw = await response.text();
    let data: Record<string, unknown> = {};
    try {
      if (raw) data = JSON.parse(raw) as Record<string, unknown>;
    } catch {
      // non-JSON response
    }

    if (!response.ok) {
      const message =
        (data?.message as string) ||
        (data?.error as string) ||
        (response.status === 422 ? "This email is already subscribed." : "Could not subscribe. Please try again later.");
      res.status(response.status).json({ error: message });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Flodesk subscribe error:", err);
    const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
    res.status(500).json({ error: message });
  }
}
