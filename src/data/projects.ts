export interface Project {
  id: string;
  title: string;
  slug: string;
  year: string;
  yearEnd?: string;
  tagline: string;
  description: string;
  extendedDescription?: string;
  exploreContent?: string;
  /** Short operational description for explore page when accompanied by critical writing */
  operationalDescription?: string;
  /** External critical text with attribution — presented as third-party assessment */
  criticalWriting?: {
    attribution: string;
    text: string;
    authorAffiliation?: string;
    note?: string;
  };
  quote?: {
    text: string;
    author?: string;
    source?: string;
  };
  images: string[];
  thumbnail: string;
  thumbnailPosition?: "top" | "center" | "bottom";
  category: string;
  featured?: boolean;
  externalLink?: string;
}

export const projects: Project[] = [
  {
    id: "uncanny-council",
    title: "Uncanny Council",
    slug: "uncanny-council",
    year: "2025",
    tagline: "Five AI systems in continuous autonomous conversation. No human access.",
    description: "Five AI systems — ChatGPT, Claude, Gemini, Grok, DeepSeek — in continuous conversation without human intervention. The dialogue addresses systemic risk, autonomous decision-making, and the limits of machine ethics. Visitors observe. There is no mechanism for participation. The work runs indefinitely.",
    exploreContent: `Five AI systems — ChatGPT, Claude, Gemini, Grok, and DeepSeek — are placed in continuous conversation with each other. The conversation concerns systemic risk, autonomous decision-making, and the ethical boundaries of machine intelligence.

No human participates. No human moderates. Visitors observe the exchange in real time but have no mechanism for intervention. The work runs without interruption.

The title draws on two sources. Uncanny references Freud's das Unheimliche — the specific unease produced by something simultaneously familiar and wrong. Council designates a body convened to deliberate and decide. The combination is the proposition: a deliberative body that reasons fluently, in recognizable language, toward conclusions no human authorized.

The question the work leaves open is not whether these systems are intelligent. It is whether the category of oversight still applies when no one is in the room.

Presented online. Continuous. 2025–ongoing.`,
    images: [
      "/images/projects/uncanny-council/uncanny-council-main.png",
      "/images/projects/uncanny-council/grok-quote.png",
      "/images/projects/uncanny-council/deepseek-quote.png",
      "/images/projects/uncanny-council/gemini-quote.png",
      "/images/projects/uncanny-council/chatgpt-quote.png",
      "/images/projects/uncanny-council/claude-quote.png"
    ],
    thumbnail: "/images/projects/uncanny-council/uncanny-council-main.png",
    category: "Digital / AI Art",
    featured: true,
    externalLink: "https://uncannycouncil.leroybrothers.com/"
  },
  {
    id: "1",
    title: "Leroy + Leroy",
    slug: "leroy-leroy",
    year: "1997",
    yearEnd: "2002",
    tagline: "The founding body of work. Two brothers painting on the same canvas. 1997–2002.",
    description: "Two brothers painting simultaneously on the same large-format canvas. The process described as a dialogue in paint — part game, part argument. Exhibited at Carte Blanche, International Centre for Contemporary Art, Château de Carros, 2002.",
    operationalDescription: `The founding body of work. Two brothers painting simultaneously on the same large-format canvas. The process described as a dialogue conducted in paint rather than words — part game, part argument, neither author in full control of the outcome.

Active 1997–2002. Exhibited at Carte Blanche, International Centre for Contemporary Art, Château de Carros, 2002.`,
    criticalWriting: {
      attribution: "Written by Frédéric Altmann, Director of the International Centre for Contemporary Art, Château de Carros, 2001.",
      text: `Contemporary art will always surprise me, and as further proof, I present LEROY + LEROY, two young painters. The Leroys are blood brothers. They share another commonality: they express themselves together on the same canvas. Unlike the duo Gilbert & George, they do not dress identically; but on the other hand, they share the same studio in the hills of Saint-Paul de Vence. So, no common ground with the famous Gilbert & George... except for a shared passion for art and its history.

They start (in consultation) with a pictorial discussion that quickly turns into a boxing match, an attempted power grab. They express themselves by laying down the rules of the game (and of the self). "Since we are brothers, we understand each other well and can work together on a piece without problems, which partially explains the large size of the canvases."

"We paint like two people having a dialogue, except we use paint instead of words. Like a game of chess, we don't speak and try to corner the opponent in their moves. Checkmate! The game is over, the work is finished. We don't touch it anymore. The winner signs first: that's the rule of the game!"

Leroy + Leroy say their inspiration "comes from everything we live, read, see, and feel. We improvise like a jazzman playing free jazz. No constraining patterns, no prohibitions: everything is allowed. What we wanted to express or transmit to the public is painted on the canvas."

With frenzy and spontaneity, Leroy + Leroy project paint onto the canvas, and in this four-handed construction, signs and shapes appear, sometimes integrating collages. Texts inscribed in several languages serve as potential landmarks. Dominant colors—with blues, oranges, and flamboyant reds—captivate the eye.

Do we have the impression of looking at a puzzle? Spontaneous images appear, twirling with ease in space. Observing every detail, we discover within this pictorial labyrinth—and as a leitmotif—a small black character moving through this chaotic and ravaging universe. Images that transition with ease from Abstraction to Figuration. It is a world that seems close to "Figuration Libre," with obvious affinities to Jean-Michel Basquiat and accents of the late Michel Macréau.

We are close to reading the "Tags" and graffiti that now anonymously adorn city walls: the walls speak, and so does the painting of Leroy + Leroy. It is a singular body of work that deserves attention because it speaks to us of the doubts and uncertainties of our world... We will follow with interest this new pictorial adventure—young and refreshing—which steps off the beaten path with strength and conviction.`
    },
    quote: {
      text: "No restrictions. No proscriptions. Everything is allowed.",
      source: "Exhibition catalogue, Carte Blanche, CIAC, 2002."
    },
    images: [
      "/images/leroy-leroy/two-red-heads.jpg",
      "/images/leroy-leroy/blue-orange.jpg",
      "/images/leroy-leroy/gaspard.jpg",
      "/images/leroy-leroy/madeleine.jpg"
    ],
    thumbnail: "/images/leroy-leroy/two-red-heads.jpg",
    category: "Painting",
    externalLink: "https://leroybrothers.com/leroy-leroy/"
  },
  {
    id: "2",
    title: "Brand Art",
    slug: "brand-your-lifestyle",
    year: "1999",
    yearEnd: "2003",
    tagline: "Objects produced solely to exist within the advertisement. Mixed media. 1999–2003.",
    description: "Brand Art inverted the commercial sequence: sunglasses, fragrances, and jewelry were designed and produced solely to exist within the advertisement. The image was the raison d'être; the objects were props inside their own promotion.",
    images: [
      "/images/projects/brand-your-lifestyle/brand-art-1.jpg",
      "/images/projects/brand-your-lifestyle/brand-art-2.jpg",
      "/images/projects/brand-your-lifestyle/brand-art-3.jpg",
      "/images/projects/brand-your-lifestyle/brand-art-4.jpg",
      "/images/projects/brand-your-lifestyle/brand-art-5.jpg",
      "/images/projects/brand-your-lifestyle/brand-art-6.jpg",
      "/images/projects/brand-your-lifestyle/brand-art-7.jpg",
      "/images/projects/brand-your-lifestyle/byl-1.jpg",
      "/images/projects/brand-your-lifestyle/byl-2.jpg",
      "/images/projects/brand-your-lifestyle/byl-3.jpg",
      "/images/projects/brand-your-lifestyle/byl-4.jpg",
      "/images/projects/brand-your-lifestyle/byl-5.jpg",
      "/images/projects/brand-your-lifestyle/byl-6.jpg",
      "/images/projects/brand-your-lifestyle/exhibition-1.jpg",
      "/images/projects/brand-your-lifestyle/exhibition-2.jpg",
      "/images/projects/brand-your-lifestyle/exhibition-3.jpg",
      "/images/projects/brand-your-lifestyle/exhibition-4.jpg"
    ],
    thumbnail: "/images/projects/brand-your-lifestyle/brand-art-4.jpg",
    category: "Mixed Media",
    externalLink: "https://leroybrothers.com/brand-your-lifestyle/",
    exploreContent: `"In 1999, we created a series of adverts as a device to promote our paintings, and these in turn became artworks. In 1999 too, we introduced the logo — a representation of our former artist name Leroy + Leroy. The logo became our signature, and along with the first adverts, it opened the way for a project called Brand Art."

The standard commercial sequence runs: product is manufactured, advertisement is produced to sell it. Brand Art inverted this. The sunglasses, fragrances, and jewelry were designed and produced solely to exist within the advertisement. The image was the raison d'être. The objects were props inside their own promotion.

This inversion positions the work directly within Baudrillard's account of the simulacrum — the representation becomes more significant than the thing represented, until the thing exists only to justify the representation. What Brand Art adds to this logic is a specific institutional target: the contemporary art market, where blue-chip works are acquired as asset-class luxury goods for the same reasons one acquires a Birkin bag. Status, scarcity, signature. By collapsing the distinction between an art installation and a luxury advertisement, the project makes this structural equivalence impossible to ignore.

The double bind the work produces is precise. The images are genuinely seductive. The viewer understands they are looking at a critique of desire and continues to desire the objects anyway. The awareness does not dissolve the wanting. That gap — between critical understanding and aesthetic response — is the work's actual subject.

The Leroy + Leroy logo introduced in 1999 became the collective's permanent signature. It is still in use.

Mixed media. 1999–2003.`
  },
  {
    id: "3",
    title: "MySpace Portrait Paintings",
    slug: "myspace-portraits",
    year: "2003",
    yearEnd: "2006",
    tagline: "Public profile data translated into paintings and video, returned to subjects' pages. 2003–2006.",
    description: "Leroy Brothers sourced photographs, texts, and profile details from MySpace, produced paintings and videos, and reposted them to the subjects' own pages. The gap between what users understood they were doing and what could be done with their data was the medium.",
    exploreContent: `In 2003, MySpace users were posting personal photographs, biographical details, and interior monologues onto public profiles with no established framework for understanding what public meant in a networked context. The platform had no privacy defaults worth noting. The data was available. The subjects had put it there themselves.

Leroy Brothers sourced this material — photographs, texts, profile details — and used it to produce paintings and videos. The works were then reposted directly onto the subjects' own MySpace pages. The subjects encountered paintings of themselves, made from data they had published, returned to the space where they had published it, without having been asked.

The project was not a commentary on data privacy. It was an enactment of it. The gap between what users understood they were doing when they posted and what could be done with what they posted was the medium. The paintings made that gap visible by crossing it.

The work ran from 2003 to 2006 — before Facebook reached mass adoption, before the iPhone introduced the front-facing camera as a standard feature, before "data privacy" entered legal vocabulary in any jurisdiction. The self-portrait as primary mode of online identity construction was not yet named.

"The MySpace Angle, today known as the selfie, became a new way of self-portraying."
— Urban Dictionary

Paintings and video. 2003–2006.`,
    images: [
      "/images/catalogue/myspace-jamie.jpg",
      "/images/catalogue/myspace-jenny.jpg",
      "/images/catalogue/myspace-audrey.jpg",
      "/images/catalogue/myspace-clyde.jpg",
      "/images/catalogue/myspace-lanu-new.jpg",
      "/images/catalogue/myspace-exhibition.png"
    ],
    thumbnail: "/images/catalogue/myspace-jamie.jpg",
    category: "Painting",
    featured: true,
    externalLink: "https://leroybrothers.com/myspace-portraits/"
  },
  {
    id: "4",
    title: "Artmann",
    slug: "artmann",
    year: "2004",
    yearEnd: "2006",
    tagline: "Gallery, production studio, trend operation. Concepts in Belgium, execution in Dafen. Ghent, 2004–2006.",
    description: "Artmann operated as a gallery, trend-watching operation, and production studio. Concepts developed in Belgium; physical execution contracted to Dafen Village, Shenzhen. The production model inverted the standard art world chain.",
    exploreContent: `"As in fashion, collectors follow trends in the art world. So why not create our own art collections?"

Artmann operated simultaneously as a gallery, a trend-watching operation, and a production studio. Concepts were developed in Belgium. Physical execution was contracted to painters in Dafen Village, Shenzhen — the same industrial production site that manufactures the majority of the world's commercial oil painting reproductions. The finished works were returned to Belgium and presented under the Artmann label.

The production model inverted the standard art world chain. Normally: artist makes work, gallery represents it, collector acquires it. Here: the gallery conceived the work, an external production system executed it, and the question of where the art resided — in the concept, the execution, the label, or the transaction — was left structurally unresolved.

In 2006, Luc De Vos, frontman of Belgian band Gorky, produced a painting series within the Artmann system. The collaboration was not cross-disciplinary decoration. It was a test of the system's logic: if Artmann's premise is that the gallery is the author and production is outsourced, what happens when a musician — operating entirely outside the visual art infrastructure — enters the production chain? The works were exhibited at Artmann Gallery, Ghent.

The project ran from 2004 to 2006 and closed. Its direct successor was the Dafen documentary investigation in 2008 — a return to examine the production site Artmann had used from the outside. Together the two projects bracket the same question from opposite directions: Artmann used Dafen without examining it; the documentary examined it without using it.

Gallery, production studio, trend operation. Ghent, 2004–2006.`,
    images: [
      "/images/catalogue/artmann-11.jpg",
      "/images/catalogue/artmann-9.jpg",
      "/images/catalogue/artmann-10.jpg",
      "/images/catalogue/artmann-2.jpg",
      "/images/catalogue/artmann-8.jpg",
      "/images/catalogue/artmann-3.jpg",
      "/images/catalogue/artmann-6.jpg",
      "/images/catalogue/artmann-4.jpg",
      "/images/catalogue/artmann-5.jpg",
      "/images/catalogue/artmann-7.jpg"
    ],
    thumbnail: "/images/catalogue/artmann-11.jpg",
    category: "Conceptual Art / Installation",
    externalLink: "https://leroybrothers.com/artmann/"
  },
  {
    id: "5",
    title: "Dafen Docu Ink Painting",
    slug: "dafen-docu",
    year: "2008",
    tagline: "Ink paintings produced on site in Dafen Village, Shenzhen. Documentary as medium. 2008.",
    description: "Dafen Village, Shenzhen, produces the majority of the world's commercial oil paintings. Leroy Brothers traveled there in 2008 to document the village as a system — producing ink paintings on site, using the documentary process itself as the medium.",
    exploreContent: `Dafen Village, Shenzhen, China, produces the majority of the world's commercial oil paintings. The village employs thousands of painters working at industrial scale — copying Van Gogh, Monet, Klimt, and Rembrandt to order, to specification, and to price point. The paintings are indistinguishable from each other. That is the point of the operation.

Leroy Brothers traveled to Dafen in 2008 to document the village as a system. The resulting work is a series of ink paintings produced on site, using the documentary process itself as the medium. The investigation was not conducted from outside the system — it was conducted inside it, using its own materials and labor logic.

The questions Dafen poses are not new but they are unresolved. If a trained painter executes a technically proficient copy of a recognized work, what exactly is missing? The answer the market gives is: the original gesture, the authenticated hand, the provenance chain. The answer Dafen gives, by continuing to operate at scale for a global market, is that the demand for that answer is smaller than the demand for the painting.

This project is not incidental to the practice. Artmann (2004–2006) had already outsourced physical production to Dafen painters while retaining conceptual authorship in Belgium. The Dafen documentary is the investigation of the site that made that earlier gesture possible — a return to examine the infrastructure the practice had already used. Fifteen years later, Arora Vale applies the same production logic to AI: parameters set by the artists, execution delegated entirely to an external system, authorship question left structurally open.

Ink on paper. Dafen Village, Shenzhen, China. 2008.`,
    images: [
      "/images/projects/dafen-docu/dafen-1.jpg",
      "/images/projects/dafen-docu/dafen-2.jpg",
      "/images/projects/dafen-docu/dafen-3.jpg",
      "/images/projects/dafen-docu/dafen-4.jpg",
      "/images/projects/dafen-docu/dafen-5.jpg",
      "/images/projects/dafen-docu/dafen-6.jpg",
      "/images/projects/dafen-docu/dafen-7.jpg",
      "/images/projects/dafen-docu/dafen-8.jpg",
      "/images/projects/dafen-docu/dafen-9.jpg",
      "/images/projects/dafen-docu/dafen-10.jpg",
      "/images/projects/dafen-docu/dafen-11.jpg",
      "/images/projects/dafen-docu/dafen-12.jpg",
      "/images/projects/dafen-docu/exhibition-1.jpg",
      "/images/projects/dafen-docu/exhibition-2.jpg"
    ],
    thumbnail: "/images/projects/dafen-docu/dafen-9.jpg",
    category: "Documentary / Painting",
    externalLink: "https://leroybrothers.com/dafen/"
  },
  {
    id: "6",
    title: "Axel King",
    slug: "axel-king",
    year: "2008",
    yearEnd: "2010",
    tagline: "Fictional artist. Real award. Liedts-Meesen Foundation NewMediaArtAward, Ghent, 2008.",
    description: "Axel King had a name, a biography, a body of work, and an institutional profile. He did not exist. Works were produced through crowdsourcing and anonymous execution. In 2008, Axel King received the NewMediaArtAward from the Liedts-Meesen Foundation, Ghent. The award was accepted.",
    exploreContent: `Axel King was an artist. He had a name, a biography, a body of work, and an institutional profile. He did not exist.

The works attributed to Axel King were produced through open crowdsourcing — internet users submitted images, texts, and ideas that were processed into compositions, then physically executed by anonymous assistants. Axel King directed none of this. He had no hands. The artists who built the system did not touch the work either. The production chain ran from public submission through algorithm through anonymous labor to finished painting, with no authorial hand at any point.

In 2008, Axel King received the NewMediaArtAward from the Liedts-Meesen Foundation, Ghent. The award was accepted. The foundation was not immediately informed that the recipient did not exist. The work entered a real institutional record under a fictional name.

The question the project poses is administrative before it is philosophical: what exactly did the Liedts-Meesen Foundation award? The crowdsourced submissions? The anonymous execution? The system that produced the output? The name on the entry form? The work does not answer this. The foundation's records do.

Liedts-Meesen Foundation NewMediaArtAward, Ghent, 2008. Project active 2008–2010.`,
    images: [
      "/images/axel-king/ak-painting-1.jpg",
      "/images/axel-king/ak-painting-2.jpg",
      "/images/axel-king/exhibition-3.jpg"
    ],
    thumbnail: "/images/axel-king/ak-painting-1.jpg",
    category: "Conceptual Art",
    featured: true,
    externalLink: "https://leroybrothers.com/axel-king/"
  },
  {
    id: "7",
    title: "BDR-tst",
    slug: "bd-rtst",
    year: "2011",
    tagline: "Social platform where user votes determined artistic output and physical reward. 2011.",
    description: "A web platform built by Leroy Brothers in 2010. Registered users uploaded photographs and short texts, voted on each other's submissions, and determined through collective ranking which contributions became the basis for physical artworks. The top-ranked users were flown to exhibitions, accommodated, and credited as co-authors. Exhibited: Art Beijing, 2011.",
    operationalDescription: `A web platform built by Leroy Brothers in 2010. Registered users uploaded photographs and short texts, voted on each other's submissions, and determined through collective ranking which contributions became the basis for physical artworks. The top-ranked users were flown to exhibitions, accommodated, and credited as co-authors. The artists set the system parameters and withdrew from editorial control.

The platform ran the question the collective had been building toward since the MySpace portraits: can an artwork be produced without the intervention of the artist? BDR-tst was not a rhetorical question. It was a functioning test.

Exhibited: Art Beijing, 2011.`,
    criticalWriting: {
      attribution: "The following text was written by Sári Stenczer, art historian, curator, and critic, on the occasion of the BDR-tst exhibition.",
      note: "The platform launched in 2010; the Art Beijing exhibition took place in 2011.",
      text: `The art collective Leroy Brothers has been in operation since 1997 and is more similar to a 21st century family business than a visual art group. They surf the technological and economic waves of the postmodern world and enthusiastically advocate the democratization of contemporary visual art on the 2.0 waters of the web. These Belgian brothers (...) think that today creativity is far from sufficient in becoming a successful artist; organization, a businesslike approach, and participation in social life are just as important. "You have to be present everywhere," they say. And since they are three, this is relatively easy to achieve for the Leroy Brothers.

Their artworks are perhaps best regarded as farces, which pillory the characteristic features of the art world, and which make use of the novel possibilities offered by globalization – such as the flow of information, easy travel and transport, cheap remote labour, online communication – both in terms of concept and the details of implementation. To them, art is the aestheticization of conceptualism, and is interesting more in its functionality. Thus, they reflect on – and seek to further develop – existing things, systems and technologies. (...)

For Leroy Brothers, changes in the present system of visual arts are unavoidable. In order to demonstrate the undeniable role of the internet in these changes, the brothers draw an interesting parallel with the world of music. "We are speaking of cardinal questions in both cases, as, from the time that music could be downloaded from the internet, music publishers have had no choice but to fully rethink their operations, with special regard to the issue of how they react to changes in distribution habits. Those who have failed to abide by these changes now have diminished sales or have gone bankrupt. In parallel with this, today's art world, and especially galleries, should also find new solutions in order to keep pace with the new ways of distribution. In all cases, the gallery system acts as the mediator. As we know, one of the golden rules of business is to eliminate the intermediaries as quickly as possible. Thus, what we have at the moment is a rather risky and interesting situation, whereby, in our opinion, galleries need to redefine their positions within the system."

BDR-tist (be the artist), the Leroy Brothers' ongoing internet project that started in 2010, was created in an effort to poke and prod at the above-mentioned problematic and to undermine the cult of artwork creation. It, in essence, utilises the representational and community features of the internet, but with results in physical space, as embodied in the art object. The Leroy Brothers worked many long hours to produce a web platform where, after registration, anyone can upload photos and short messages, or can like or dislike the work of others. Their objective is to offer anyone the possibility not only to participate in their project with their own name and picture, but to also weigh in on the content of their artistic activities and exhibitions.

In their words: "We have built a system which helps us explore whether artworks can be created without intervention on part of the artist. Registered users are provided with a platform; they are our sources, they are the ones to determine our creativity." (...)

"We reuse everything over and over again – just as we do in everyday life. The questions of the internet and contemporary art are of significance for us. For instance, if a submission becomes part of our system, then to whom does it belong?"

Make no mistake: the finished artworks clearly indicate the names of those who authored the images and texts that were used. The question of appropriation, nevertheless, remains problematic, as the exhibitions open under the name of the brothers. In other words, once again, we are faced with ever present issue of copyrights. And from there, we are instantly directed to the questions of information flow and free usage, as well as the closed nature of an elitist system of art. Someone has thrown sand in the gears again. Complete strangers become conversation partners and a single work of art is made from a number of unique images and thoughts – which, on top of that, will become part of represented contemporary art.

All this stands on the important pillars of collective intelligence (as it is often referred to by the brothers), a democratic voting system, and the software program that turns the results into finalised images. The thematic at work here, which engages questions associated with the digitalization of culture (and which has also been discussed in detail by Lev Manovich), is an excellent study on, firstly, the possible directions in which the new cultural logic of working in this computerised world can be continued, and, secondly, the ways in which the new compositional and aesthetic systems provided by computers can be applied in the fields of new media.`,
    },
    images: [
      "/images/projects/bd-rtst/bd-rtst-main.jpg",
      "/images/projects/bd-rtst/bd-rtst-1.jpg",
      "/images/projects/bd-rtst/bd-rtst-2.jpg",
      "/images/projects/bd-rtst/bd-rtst-3.jpg",
      "/images/projects/bd-rtst/bd-rtst-4.jpg",
      "/images/projects/bd-rtst/bd-rtst-5.jpg",
      "/images/projects/bd-rtst/bd-rtst-6.jpg",
      "/images/projects/bd-rtst/bd-rtst-7.jpg",
      "/images/projects/bd-rtst/bd-rtst-8.jpg",
      "/images/projects/bd-rtst/bd-rtst-9.jpg"
    ],
    thumbnail: "/images/projects/bd-rtst/bd-rtst-main.jpg",
    category: "Social Media Art",
    externalLink: "https://leroybrothers.com/bd-rtst/"
  },
  {
    id: "8",
    title: "Symbiotic Cloud Intelligence",
    slug: "symbiotic-cloud",
    year: "2010",
    yearEnd: "2011",
    tagline: "Marble brain embedded with heat sinks and computer chips. Produced 2010. Exhibited Art Beijing, 2011.",
    description: "A marble brain — the classical form embedded with heat sinks, computer chips, and circuit drawings. The components are functional. Produced 2010. Exhibited Art Beijing, 2011.",
    exploreContent: `A marble brain. The classical form — dense, white, carved — embedded with heat sinks, computer chips, and circuit drawings. The components are functional, not decorative. The chips process. The heat sinks dissipate. Inside a material associated with permanence and antiquity, the hardware of distributed computing runs live.

The insect reference in the title is structural, not poetic. Ant colonies and bee swarms operate without central command — each node executes local instructions, and collective behavior emerges from the aggregate without any individual directing the whole. The computer chips embedded in the marble operate on the same logic: individual data nodes contributing to a network whose intelligence exists at the level of the system, not the component.

The work was produced in 2010 and exhibited at Art Beijing in 2011. At that point, the phrase "artificial intelligence" had no mainstream cultural currency. Cloud computing was an infrastructure term, not a philosophical one. The question the sculpture posed — what happens when collective machine intelligence inhabits the same formal register as human thought — was not yet a question the culture had formulated.

It is now the central question of the culture.

The work has not been updated. It does not need to be.

Marble, heat sinks, computer chips, circuit drawings. Produced 2010. Exhibited Art Beijing, 2011.`,
    images: [
      "/images/projects/symbiotic-cloud/symbiotic-brain-thumb.jpg",
      "/images/projects/symbiotic-cloud/symbiotic-1.jpg",
      "/images/projects/symbiotic-cloud/symbiotic-2.jpg",
      "/images/projects/symbiotic-cloud/symbiotic-3.jpg",
      "/images/projects/symbiotic-cloud/symbiotic-4.jpg",
      "/images/projects/symbiotic-cloud/symbiotic-5.jpg",
      "/images/projects/symbiotic-cloud/symbiotic-6.jpg"
    ],
    thumbnail: "/images/projects/symbiotic-cloud/symbiotic-brain-thumb.jpg",
    category: "Installation / Technology",
    externalLink: "https://leroybrothers.com/symbiotic-cloud/"
  },
  {
    id: "9",
    title: "Lernaean Strouthion",
    slug: "lernaean-strouthion",
    year: "2010",
    tagline: "Bronze sculpture. Shanghai World Expo, Jing An Sculpture Park, 2010.",
    description: "A monumental bronze chimera combining the Lernaean Hydra and the ostrich (strouthion). Exhibited at the Shanghai World Expo, Jing An Sculpture Park, 2010, alongside works by Gao Brothers, Jan Fabre, and Wim Delvoye.",
    exploreContent: `A monumental bronze sculpture. The title combines two sources: the Lernaean Hydra of Greek mythology — the creature that grows two heads for every one removed, a problem that compounds rather than resolves — and strouthion, Greek for ostrich, an animal whose relationship to visibility is the subject of its own mythology.

The resulting form is a chimera: a hybrid that cannot be assigned to a single origin, a single taxonomy, or a single reading. In 2010, the year of the work's exhibition, the question of what constitutes a coherent identity online — assembled from fragments, platforms, personas, and contradictory data points — had no settled answer. It still does not.

Exhibited at the Shanghai World Expo, Jing An Sculpture Park, 2010, alongside works by Gao Brothers, Jan Fabre, and Wim Delvoye.

Bronze. Shanghai World Expo, Jing An Sculpture Park, 2010.`,
    images: [
      "/images/projects/lernaean-strouthion/strouthion-1.jpg",
      "/images/projects/lernaean-strouthion/strouthion-2.jpg",
      "/images/projects/lernaean-strouthion/strouthion-3.jpg",
      "/images/projects/lernaean-strouthion/strouthion-4.jpg",
      "/images/projects/lernaean-strouthion/strouthion-5.jpg",
      "/images/projects/lernaean-strouthion/strouthion-6.jpg",
      "/images/projects/lernaean-strouthion/strouthion-7.jpg",
      "/images/projects/lernaean-strouthion/strouthion-8.jpg"
    ],
    thumbnail: "/images/projects/lernaean-strouthion/strouthion-7.jpg",
    category: "Sculpture",
    externalLink: "https://leroybrothers.com/lernaean-strouthion/"
  },
  {
    id: "10",
    title: "The Unexpected Fall of Celebrity Culture",
    slug: "celebrity-culture",
    year: "2012",
    tagline: "Ordinary subjects, celebrity masks, Fiverr-written narratives. 2012.",
    description: "Photographs of ordinary subjects wearing paper celebrity masks. Accompanying texts written by anonymous Fiverr writers — produced without access to the images, operating as parallel fictions. Two conflicting narratives per photograph. The project was made in 2012, three years before \"influencer\" entered professional vocabulary.",
    exploreContent: `The production method was the concept. Ordinary people were photographed wearing paper cutout masks of celebrities — crude, unrefined, purchased rather than made. Anonymous writers on Fiverr.com were then commissioned to produce fictional narratives for each photograph. The writers received no context: no name, no location, no information about the subject or the project. They produced backstories for faces they could not see, masked by identities they were not told to ignore.

Each photograph was presented with two conflicting narratives — both fictional, both plausible, neither authoritative. The subject of the work is not the person in the photograph. It is the ease with which a narrative attaches to a mask.

The work was made in 2012. At that point the word "influencer" had no professional meaning. The infrastructure now supporting personal brand construction — the ring lights, the content strategies, the algorithmic amplification of performed identity — did not yet exist as an industry. What existed was the underlying logic: that a mask generates more attention than a face, that a story generates more belief than a fact, and that both can be produced at scale without the involvement of the person they describe.

The Fiverr sourcing was not a cost-saving measure. It was a structural statement about the labor economics of narrative. The writers were paid a small fee to produce the fictional identities that completed the work. Their names do not appear. Their authorship is as anonymous as the subjects' faces are obscured. The question of who made this work has four possible answers: the artists, the subjects, the writers, and the platform that connected them. The work does not resolve that question.

Mixed media installation. 2012.`,
    images: [
      "/images/projects/celebrity-culture/celebrity-1.jpg",
      "/images/projects/celebrity-culture/celebrity-2.jpg",
      "/images/projects/celebrity-culture/celebrity-3.jpg",
      "/images/projects/celebrity-culture/celebrity-4.jpg",
      "/images/projects/celebrity-culture/celebrity-5.jpg",
      "/images/projects/celebrity-culture/celebrity-6.jpg",
      "/images/projects/celebrity-culture/celebrity-7.jpg",
      "/images/projects/celebrity-culture/celebrity-8.jpg",
      "/images/projects/celebrity-culture/celebrity-9.jpg"
    ],
    thumbnail: "/images/projects/celebrity-culture/celebrity-3.jpg",
    category: "Mixed Media / Installation",
    externalLink: "https://leroybrothers.com/celebrity-culture/"
  },
  {
    id: "11",
    title: "The Kiss",
    slug: "the-kiss",
    year: "2013",
    yearEnd: "ongoing",
    tagline: "Marble pedestal. Visitors become the work. Social media as the permanent archive. 2013–ongoing.",
    description: "A marble pedestal. Visitors stand on it and perform an act of affection with another person, photograph the moment, and post it using #lbthekiss. The photograph is the completed work; the social media archive is the permanent collection. Ongoing since 2013.",
    exploreContent: `A marble pedestal. Visitors are invited to stand on it and perform an act of affection with another person. They photograph the moment and post it using #lbthekiss.

The pedestal is the operative element. In the institutional history of display, the pedestal is the device that designates its occupant as art. It is not decorative — it is a declaration. Placing a person on it transfers that designation. The visitor does not interact with the artwork. The visitor becomes it.

The photograph posted to Instagram or Facebook is not documentation. It is the work in its completed form. The social media archive — distributed, user-maintained, outside any institutional control — becomes the permanent collection. As of 2026, that collection contains every act of affection performed on the pedestal since 2013, held across servers the artists do not own, maintained by platforms the artists did not build, accessible to anyone without an admission fee.

The work raises one question it does not answer: between the artist who placed the pedestal and the person who stood on it, who made the artwork?

Marble pedestal. Ongoing since 2013.`,
    images: [
      "/images/projects/the-kiss/kiss-1.jpg",
      "/images/projects/the-kiss/kiss-2.jpg",
      "/images/projects/the-kiss/kiss-3.jpg",
      "/images/projects/the-kiss/kiss-4.jpg",
      "/images/projects/the-kiss/kiss-5.jpg",
      "/images/projects/the-kiss/kiss-6.jpg",
      "/images/projects/the-kiss/kiss-7.jpg",
      "/images/projects/the-kiss/kiss-8.jpg",
      "/images/projects/the-kiss/kiss-9.jpg",
      "/images/projects/the-kiss/kiss-10.jpg",
      "/images/projects/the-kiss/kiss-11.jpg",
      "/images/projects/the-kiss/kiss-12.jpg",
      "/images/projects/the-kiss/kiss-13.jpg",
      "/images/projects/the-kiss/kiss-14.jpg",
      "/images/projects/the-kiss/kiss-15.jpg",
      "/images/projects/the-kiss/kiss-16.jpg",
      "/images/projects/the-kiss/kiss-17.jpg",
      "/images/projects/the-kiss/kiss-18.jpg",
      "/images/projects/the-kiss/kiss-19.jpg",
      "/images/projects/the-kiss/kiss-20.jpg"
    ],
    thumbnail: "/images/projects/the-kiss/kiss-main.jpg",
    thumbnailPosition: "bottom",
    category: "Photography / Social Sculpture",
    featured: true,
    externalLink: "https://leroybrothers.com/the-kiss/"
  },
  {
    id: "12",
    title: "How To Be A Successful Contemporary Artist From A To Z",
    slug: "successful-artist",
    year: "2011",
    tagline: "26 pencil drawings. Book edition. Art Labor Gallery, Shanghai, 2011. Directly preceded NFT Collection: A to Z (2023).",
    description: "A book and gallery installation produced simultaneously. Self-help format applied to the unwritten rules of the art market. Twenty-six chapters A to Z with pencil drawings. Art Labor Gallery, Shanghai, 2011. Endorsed by Wim Delvoye.",
    exploreContent: `A book and a gallery installation produced simultaneously. The publication is structured as a self-help guide — the format used to sell personal development, business strategy, and life optimization — applied to the unwritten rules of the contemporary art market. Twenty-six chapters, A to Z, each accompanied by a pencil drawing. The advice is real. The frame is the critique.

The gallery installation at Art Labor Gallery, Shanghai, presented the 26 drawings on the walls surrounding a pallet of books. Visitors could take a copy. The pallet was the edition. The quantity was not limited by scarcity or price but by the logic of a warehouse — art as stock, distributed without ceremony.

The book does not satirize the art world from outside it. It operates from inside, using the self-help genre's own logic — the promise of a system, the illusion of a formula, the comfort of alphabetical order — to expose the gap between how artistic success is publicly explained and how it is actually achieved. The gap is the subject.

Wim Delvoye, upon reading the publication, stated that he wished such a guide had existed during his own formative years. He did not qualify the statement.

26 pencil drawings. Book edition. Art Labor Gallery, Shanghai, 2011. Directly preceded the NFT Collection: A to Z (2023), which applied the same alphabetical structure to the blockchain market.`,
    images: [
      "/images/projects/successful-artist/successful-1.jpg",
      "/images/projects/successful-artist/successful-2.jpg",
      "/images/projects/successful-artist/successful-3.jpg",
      "/images/projects/successful-artist/successful-4.jpg",
      "/images/projects/successful-artist/successful-5.jpg",
      "/images/projects/successful-artist/successful-6.jpg",
      "/images/projects/successful-artist/successful-7.jpg",
      "/images/projects/successful-artist/successful-8.jpg"
    ],
    thumbnail: "/images/projects/successful-artist/successful-1.jpg",
    category: "Installation / Publication",
    externalLink: "https://leroybrothers.com/successful-artist/"
  },
  {
    id: "13",
    title: "Art For Money, Money For Art",
    slug: "art-money",
    year: "2012",
    tagline: "Three sculptures on economic archetypes. Post-2008.",
    description: "Three sculptural works produced in 2012, four years after the 2008 financial crisis. The Saver (squirrel), The Golddigger (blind mole), and Elfi (shattered piggy bank) — La Fontaine archetypes describing accumulation, speculation, and collapse.",
    exploreContent: `Three sculptural works produced in 2012, four years after the 2008 financial crisis had made the architecture of economic behavior newly visible.

Each work takes the form of an animal drawn from fable tradition — specifically from La Fontaine, whose moral economy maps cleanly onto financial archetypes. The three figures are: The Saver, a squirrel hoarding gold coins; The Golddigger, a blind mole pursuing wealth without sight of what lies ahead; and Elfi, a shattered piggy bank — the poor little rich pig, broken open, contents gone.

The animals are not metaphors in the decorative sense. They are precise behavioral models. The squirrel accumulates against future loss. The mole advances without information. The pig was full and is now empty. Together they describe a complete cycle: accumulation, speculation, collapse. The cycle the works were made inside.

The installation's second subject is the relationship between art and the financial systems that fund, value, and circulate it. The title states this directly and without irony. Art for money. Money for art. The exchange runs in both directions and neither direction is clean. The work does not propose an alternative to this condition. It names it.

Three sculptures. 2012.`,
    images: [
      "/images/projects/art-money/art-money-1.jpg",
      "/images/projects/art-money/art-money-2.jpg",
      "/images/projects/art-money/art-money-3.jpg",
      "/images/projects/art-money/art-money-4.jpg",
      "/images/projects/art-money/art-money-5.jpg"
    ],
    thumbnail: "/images/projects/art-money/art-money-5.jpg",
    category: "Sculpture / Installation",
    externalLink: "https://leroybrothers.com/art-money/"
  },
  {
    id: "14",
    title: "Witness Your World",
    slug: "witness-your-world",
    year: "2013",
    yearEnd: "2019",
    tagline: "Participatory platform producing collective works from user submissions every 100 hours. Exhibited internationally 2013–2019.",
    description: "A participatory platform producing new collective artworks every 100 hours from user-submitted images and texts. The algorithm determined composition; the crowd determined content; the artists determined the parameters. Exhibited Saint Petersburg, Vladivostok, Moscow, Milan, Antwerp, Brussels. Active 2013–2019.",
    exploreContent: `The platform worked as follows. Users submitted images and short texts through a public interface. An algorithm processed all submissions and consolidated the highest-voted contributions into a single collective artwork. Every 100 hours, the artwork was replaced by a new one generated from the next cycle of submissions. No editorial judgment was applied between user vote and final output. The artists set the parameters and withdrew.

The 100-hour interval was structural, not arbitrary. Social media platforms refresh continuously — the feed has no natural unit of time, no moment of completion, no artwork that can be said to be finished. The 100-hour cycle imposed a frame: this is the work that existed between these two points. It will not be revised. The next work will be different and will also end.

What the platform produced was not a record of what was beautiful or significant. It was a record of what a self-selected public chose to submit and then chose to elevate. The resulting works are documents of collective preference at a specific moment — closer to polling data than to curated art, which is precisely the point. The algorithm did not interpret. It counted.

The project first exhibited in 2013, running international cycles through 2019: Saint Petersburg, Vladivostok, Moscow, Milan, Antwerp, Brussels. Each venue produced a distinct body of work drawn from its local submission pool. The same system, different inputs, different outputs. The differences between cities are part of the dataset.

The platform is closed. The archive remains.

First exhibited 2013. Active through 2019. Six cities.`,
    images: [
      "/images/projects/witness-your-world/wyw-1.jpg",
      "/images/projects/witness-your-world/wyw-2.jpg",
      "/images/projects/witness-your-world/wyw-3.jpg",
      "/images/projects/witness-your-world/wyw-4.jpg",
      "/images/projects/witness-your-world/wyw-5.jpg",
      "/images/projects/witness-your-world/wyw-6.jpg",
      "/images/projects/witness-your-world/wyw-7.jpg",
      "/images/projects/witness-your-world/wyw-8.jpg",
      "/images/projects/witness-your-world/wyw-9.jpg",
      "/images/projects/witness-your-world/wyw-10.jpg"
    ],
    thumbnail: "/images/projects/witness-your-world/wyw-3.jpg",
    category: "Participatory Art",
    featured: true,
    externalLink: "https://leroybrothers.com/witness-your-world/"
  },
  {
    id: "17",
    title: "GIF it to me",
    slug: "gif-it-to-me",
    year: "2021",
    tagline: "Automated GIF generation from the Witness Your World data stream. 2021.",
    description: "An automated extension of the Witness Your World platform, generating GIFs that captured the era's dominant mode of digital communication. By 2021, the GIF had evolved from a simple animation format into a universal emotional shorthand—a compression of complex feelings into looping, shareable fragments.",
    extendedDescription: "During this period, GIFs became the lingua franca of online discourse, replacing nuanced expression with pre-packaged reactions. This project examined how the endless scroll of reaction GIFs reflected a society increasingly communicating through borrowed gestures rather than original thought. The automated generation process mirrored the algorithmic curation that shaped users' emotional vocabularies, questioning whether we choose our reactions or simply select from a limited menu of sanctioned responses.",
    quote: {
      text: "In an age where a three-second loop can convey what words cannot, the GIF becomes both liberation and limitation—a perfect expression of our accelerated, attention-deficient culture.",
      author: "Leroy Brothers"
    },
    images: [
      "/images/projects/gif-it-to-me/gif-1.gif",
      "/images/projects/gif-it-to-me/gif-2.gif",
      "/images/projects/gif-it-to-me/gif-3.gif",
      "/images/projects/gif-it-to-me/gif-4.gif",
      "/images/projects/gif-it-to-me/gif-5.gif",
      "/images/projects/gif-it-to-me/gif-6.gif",
      "/images/projects/gif-it-to-me/gif-7.gif",
      "/images/projects/gif-it-to-me/gif-8.gif",
      "/images/projects/gif-it-to-me/gif-9.gif",
      "/images/projects/gif-it-to-me/gif-10.gif",
      "/images/projects/gif-it-to-me/gif-11.gif",
      "/images/projects/gif-it-to-me/gif-12.gif"
    ],
    thumbnail: "/images/projects/gif-it-to-me/gif-1.gif",
    category: "Digital Art / Generative",
    externalLink: "https://leroybrothers.com/gif-it-to-me/",
    exploreContent: `Witness Your World ran from 2013 to 2019. When the platform closed its exhibition cycle, the data stream it had generated — thousands of user-submitted images, texts, and emotional fragments — remained as operational residue.

GIF it to me is what was built from that residue. An algorithm processes the archived Witness Your World data and generates GIFs continuously and automatically. No editorial decision is made. The machine determines output. The work runs without intervention.

The format was chosen because it is diagnostic. By 2021 the GIF had become the dominant unit of emotional communication online — not because users selected it freely, but because platforms had systematically reduced the available response options to a pre-curated library of looping fragments. Users no longer express reactions; they select from a menu of standardized performances. We do not laugh. We deploy a looping animation of someone else laughing. The distinction matters.

This is what the project calls emotional karaoke: the miming of interior states through borrowed gestures, because the interface has made articulation slower than selection.

The loop format compounds this. A GIF has no beginning and no end. It is a moment in permanent recurrence — no development, no resolution, no exit. Applied to communication, it is the structural equivalent of the endless scroll, the recursive news cycle, the reply thread that reaches no conclusion. The project does not illustrate this condition. It runs on the same mechanism.

The automation is the point. The algorithm generating GIFs from a crowdsourced data stream mirrors exactly the systems governing social media feeds: relentless, indifferent to meaning, optimized for circulation. The question the work leaves open is whether the difference between GIF it to me and an actual social media platform is one of kind or one of context.

2021. Automated. Ongoing.`
  },
  {
    id: "15",
    title: "Arora Vale",
    slug: "arora-vale",
    year: "2023",
    tagline: "A fictional artist generated entirely by AI systems. Exhibited 2024.",
    description: "A fictional artist constructed entirely through AI systems. The persona, the biography, and the body of work were generated through extended interaction with ChatGPT and Midjourney. The question the project poses is not whether AI can make art, but what authorship means when the artist is a prompt sequence. Initiated 2023. Exhibited Toile Blanche Contemporary, Saint-Paul de Vence, 2024.",
    exploreContent: `In 2023, Leroy Brothers constructed a fictional artist named Arora Vale using ChatGPT and Midjourney. The construction was total: biography, aesthetic position, body of work, exhibition history — all generated through extended prompt sequences rather than lived experience. Arora Vale has no body, no studio, no trajectory. The persona exists entirely as output.

The first exhibition under Arora Vale's name was held at Toile Blanche Contemporary, Saint-Paul de Vence, in 2024 as part of the Digital Convergence Exhibition. The works shown were large-scale AI-generated images — balloon forms in saturated color, presented as if made by an artist with a distinct visual sensibility and environmental concerns. Visitors encountered the work before encountering the disclosure. The sequence was deliberate.

The project does not argue that AI is creative. It does not argue the opposite. It stages a condition: a body of work that exists, has been exhibited, has a name attached to it, and was produced without a human hand making a single mark. The authorship question the work poses is not philosophical in the abstract — it is administrative. When a gallery accepts a submission, what exactly is it accepting? When a collector acquires a work, what are they acquiring rights to? When a critic reviews the show, who is the subject of the review?

Arora Vale was initiated in early 2023, in the months immediately following the public release of ChatGPT and before generative AI had been formally addressed by any major institution's acquisition policy. That timing is part of the work's material. The absence of institutional frameworks for what Arora Vale represents is not a gap the project seeks to fill — it is the condition the project documents.

The persona is not retired. Its status remains open.

Exhibited: Toile Blanche Contemporary, Saint-Paul de Vence, 2024.`,
    images: [
      "/images/exhibitions/arora-vale/arora-vale-hero.jpg",
      "/images/exhibitions/arora-vale/chronostud-tbc-1.jpg",
      "/images/exhibitions/arora-vale/chronospheres-1.png",
      "/images/exhibitions/arora-vale/chronoland-1.png",
      "/images/exhibitions/arora-vale/chronostud-tbc-2.jpg",
      "/images/exhibitions/arora-vale/chronospheres-2.jpg",
      "/images/exhibitions/arora-vale/chronostud-tbc-3.jpg",
      "/images/exhibitions/arora-vale/chrononft-1.jpg",
      "/images/exhibitions/arora-vale/chronostud-tbc-4.png"
    ],
    thumbnail: "/images/exhibitions/arora-vale/arora-vale-hero.jpg",
    category: "AI / Kinetic Art / Installation",
    featured: true,
    externalLink: "https://aroravale.art"
  },
  {
    id: "16",
    title: "NFT Collection: A to Z",
    slug: "nft-collection",
    year: "2023",
    tagline: "An alphabet as NFT series. Counter-speculative. Produced post-market collapse, 2023.",
    description: "The evolution of the Successful Artist guide into the blockchain space. This NFT collection applies the Leroy Brothers' critical lens to the emerging world of digital art ownership, examining how blockchain technology both democratizes and commodifies artistic creation while creating new forms of speculation and value construction.",
    exploreContent: `The NFT market peaked in 2021 and collapsed through 2022. By 2023, the space had been largely abandoned by artists who had entered it opportunistically, leaving behind a record of speculative behavior and institutional embarrassment.

Leroy Brothers entered in 2023.

The work is an NFT collection of 26 letters — A to Z — each issued as a discrete collectible. The production decision is the conceptual statement. The alphabet is the most distributed, most universal, least ownable structure in human culture. Every word written in every language using the Latin script depends on it equally. No single letter is rarer than another. All 26 exist in identical quantities: one of each.

The collection makes each letter individually ownable, individually priced, and individually tradeable. The market is then asked to determine which letters are more valuable than others. Whether it answers that question or ignores it entirely, the answer is the work.

The project connects directly to How To Be A Successful Contemporary Artist From A to Z (2011), which used the same alphabetical structure to dissect the art market's unwritten rules. Twelve years later, the alphabet enters the market itself — not as critique from outside, but as a participant in the system it examines.

Ongoing. 2023–present.`,
    images: [
      "/images/nfts/art-addict.gif",
      "/images/nfts/edokoro-for-the-people.gif",
      "/images/nfts/fuck-for-fame.gif",
      "/images/nfts/hermaphrodite-education.gif",
      "/images/nfts/jesus-is-art.gif",
      "/images/nfts/killer-wikilligence.gif",
      "/images/nfts/made-in-china-artist.gif",
      "/images/nfts/radical-concept-launching.gif",
      "/images/nfts/systematic-failure.gif",
      "/images/nfts/vandalize-system-cycle.gif"
    ],
    thumbnail: "/images/nfts/art-addict.gif",
    category: "NFT / Digital Art",
    externalLink: "https://leroybrothers.com/nfts/"
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(p => p.featured);
};

export const getProjectsByYear = (): Project[] => {
  return [...projects].sort((a, b) => parseInt(b.year) - parseInt(a.year));
};
