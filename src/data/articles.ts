// Local images from public/images directory
const authorAvatar = "/images/pexels-kadeem-stewart-170429769-15786936.jpg";
const aboutSofiaHero = "/images/pexels-kadeem-stewart-170429769-15786936.jpg";
const editorialEleganceHero = "/images/amina-atar-tPM3nd4J8xs-unsplash.jpg";
const desertDreamsHero = "/images/igor-rand-dlR-BNDWz3g-unsplash.jpg";
const vintageHighwayHero = "/images/dwayne-joe-9wubaeSG13U-unsplash (1).jpg";
const lavenderFieldsHero = "/images/ozge-karzan-fdZjAjPUQbk-unsplash.jpg";
const coastalClassicHero = "/images/pexels-adrienne-andersen-1174503-2661255.jpg";
const storiesUnboundHero = "/images/pexels-ayomide-isaac-66354580-16273825.jpg";
const circularHorizonsHero = "/images/pexels-brianasarejr-12417686.jpg";
const retroRevivalHero = "/images/pexels-brianasarejr-17553641.jpg";
const goldenSpheresHero = "/images/pexels-jameshausley-3328337.jpg";

export interface ArticleData {
  slug: string;
  title: string;
  subtitle: string;
  publishDate: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  heroImage: string;
  readTime: string;
  viewCount: string;
  shareCount: number;
  content: {
    type: "paragraph" | "heading" | "image" | "blockquote-big";
    content?: string;
    src?: string;
    alt?: string;
    caption?: string;
    author?: string;
    level?: number;
  }[];
  relatedArticles: {
    title: string;
    description: string;
    image: string;
    tag: string;
    slug: string;
  }[];
}

export const articlesData: Record<string, ArticleData> = {
  "about-james": {
    slug: "about-james",
    title: "Who's James?",
    subtitle: "A Personal Introduction",
    publishDate: "March 20, 2024",
    author: {
      name: "James Carter",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: aboutSofiaHero,
    readTime: "8 min",
    viewCount: "4.8k",
    shareCount: 142,
    content: [
      {
        type: "paragraph",
        content: "I grew up in Brooklyn, not far from where I work now.",
      },
      {
        type: "paragraph",
        content: "Fashion photography wasn't the plan. I studied photojournalism at NYU, spent a year shooting street life and community stories across the five boroughs. But I kept noticing how people dressed—not just what they wore, but how clothing became a language, a statement, a way of claiming space in the world.",
      },
      {
        type: "paragraph",
        content: "So I pivoted.",
      },
      {
        type: "paragraph",
        content: "Started assisting fashion photographers around the city. Learned lighting, composition, how to work with models and art directors. Spent long days in studios and on location shoots, carrying equipment and absorbing everything I could about how fashion images get made. It was unglamorous work, but it taught me the craft.",
      },
      {
        type: "paragraph",
        content: "Five years ago, I started shooting my own editorials. Built a portfolio that mixed street culture with high fashion—the aesthetic I'd grown up around in Brooklyn. Reached out to magazines and brands. The work came slowly, then all at once. These days I shoot for streetwear labels, beauty campaigns, and publications that care about storytelling as much as style.",
      },
      {
        type: "paragraph",
        content: "My studio in Williamsburg is small but filled with good light. I shoot on a Canon EOS R5 mostly, though I love my Hasselblad for special projects. Film has a quality digital can't quite replicate—something about the grain, the patience it requires, the way it forces you to slow down and get the shot right.",
      },
      {
        type: "paragraph",
        content: "This blog, Voyager, started as a portfolio site in 2021. It became something more—a place to document the process, share what I've learned, connect with other photographers and creatives who care about craft. I write about technique, inspiration, the business side of photography, and occasionally just share work I'm proud of.",
      },
      {
        type: "paragraph",
        content: "New York taught me that fashion is more than clothes. It's identity, culture, aspiration. Every shoot is a chance to capture not just how something looks, but what it means. That's the work that interests me—images that tell stories about who we are and who we want to be.",
      },
      {
        type: "paragraph",
        content: "If you want to collaborate, reach out. Tell me about your project. I'm usually booked a few months out, but I make room for work that excites me.",
      },
      {
        type: "paragraph",
        content: "Until then, I'll be here in Brooklyn—shooting, learning, and trying to capture something true.",
      },
    ],
    relatedArticles: [
      {
        title: "Editorial Elegance",
        description: "Shot for Vogue Italia during Milan Fashion Week. Capturing the intersection of haute couture and architectural minimalism.",
        image: editorialEleganceHero,
        tag: "Editorial",
        slug: "editorial-elegance",
      },
    ],
  },
  "editorial-elegance": {
    slug: "editorial-elegance",
    title: "Statement Jewelry",
    subtitle: "The Power of Accessories",
    publishDate: "March 15, 2024",
    author: {
      name: "James Carter",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: editorialEleganceHero,
    readTime: "8 min",
    viewCount: "2.4k",
    shareCount: 89,
    content: [
      {
        type: "paragraph",
        content: "Jewelry is where fashion gets personal.",
      },
      {
        type: "paragraph",
        content: "You can wear the same jeans and white tee every day, but swap the earrings and suddenly the whole look shifts. Statement jewelry does that—it's the punctuation mark that changes the sentence. A pair of bold earrings can make casual feel intentional, simple feel sophisticated, understated feel powerful.",
      },
      {
        type: "paragraph",
        content: "This shoot was for a Brooklyn-based jewelry designer who works with recycled gold and vintage findings. Safety pins reimagined as earrings. Paperclips transformed into necklaces. Everyday objects elevated into wearable art. The kind of pieces that make people ask: \"Where did you get those?\"",
      },
      {
        type: "paragraph",
        content: "Photographing jewelry is its own skill.",
      },
      {
        type: "paragraph",
        content: "You're working at a tiny scale—millimeters matter. The angle of light determines whether gold looks warm or cold, whether crystals sparkle or disappear. I shot these pieces macro-style, tight compositions that let you see every detail. The texture of the metal, the facets of the stones, the precise engineering of the clasps.",
      },
      {
        type: "paragraph",
        content: "We styled them on colored backgrounds—coral pink, dusty blue, soft sage. The colors had to complement the gold without competing. Each setup took twenty minutes to perfect. Move the earring two millimeters left. Adjust the light angle. Check the reflection. Shoot. Repeat.",
      },
      {
        type: "paragraph",
        content: "The best images are the simplest ones. A pair of earrings on a pink surface. Clean, direct, no tricks. When the product is beautiful, your job is to not mess it up. Get the lighting right, nail the focus, step back.",
      },
      {
        type: "paragraph",
        content: "Fashion is often about the big statement—the dress, the coat, the shoes. But accessories are where personal style lives. They're the details people remember, the pieces you keep for years, the items that survive trend cycles because they were never trendy to begin with.",
      },
      {
        type: "paragraph",
        content: "The designer told me she makes each piece by hand in her studio in Greenpoint. Small batches, careful work, nothing mass-produced. That care shows in the final product. And hopefully, in the photographs too.",
      },
      {
        type: "paragraph",
        content: "Good jewelry doesn't need much. Just light, attention, and respect for the craft that made it.",
      },
    ],
    relatedArticles: [
      {
        title: "Stories Unbound",
        description: "Narrative fashion photography that tells compelling visual stories.",
        image: storiesUnboundHero,
        tag: "Editorial",
        slug: "stories-unbound",
      },
    ],
  },
  "desert-dreams": {
    slug: "desert-dreams",
    title: "Bold Lip",
    subtitle: "The Power of Color",
    publishDate: "March 15, 2024",
    author: {
      name: "James Carter",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: desertDreamsHero,
    readTime: "6 min",
    viewCount: "1.8k",
    shareCount: 64,
    content: [
      {
        type: "paragraph",
        content: "A bold lip changes everything.",
      },
      {
        type: "paragraph",
        content: "I shot this campaign for an indie beauty brand launching their spring collection—twelve new lip colors ranging from subtle nudes to statement brights. The creative director wanted something different from the usual beauty photography. No lips on models, no before-and-after comparisons, no aspirational lifestyle shots.",
      },
      {
        type: "paragraph",
        content: "Just the product as art.",
      },
      {
        type: "paragraph",
        content: "We shot each lipstick as a pure color study. Apply the product to white paper, photograph the swatches macro-style, let the pigment speak for itself. Orange-red became the hero shade—vibrant, confident, impossible to ignore. The kind of color that demands attention.",
      },
      {
        type: "paragraph",
        content: "Photographing makeup is technical work. The lighting has to be perfect or the color shifts. Too warm and orange looks red. Too cool and it looks brown. I used daylight-balanced strobes and shot tethered, checking each frame on a calibrated monitor to ensure color accuracy.",
      },
      {
        type: "paragraph",
        content: "The texture matters too.",
      },
      {
        type: "paragraph",
        content: "Some lipsticks are creamy, some matte, some have shimmer. You can see all of that in macro photography—the way pigment sits on paper, how light interacts with different finishes, whether the coverage is opaque or buildable. These details matter to people who care about makeup. They wanted to see exactly what they're buying.",
      },
      {
        type: "paragraph",
        content: "We shot all twelve shades in one day. Each color got the same treatment—clean white background, direct overhead lighting, tight composition. The repetition created a visual system, a language. When the brand posted the images on Instagram, people started guessing shades based on the swatches alone.",
      },
      {
        type: "paragraph",
        content: "That orange-red became their bestseller. Not because of clever marketing or influencer partnerships, but because the photograph showed exactly what it was—bold, beautiful, unapologetic color in a tube. Sometimes the best campaign is just honest product photography.",
      },
      {
        type: "paragraph",
        content: "Beauty doesn't need to be complicated. Sometimes it's just showing people exactly what they're getting.",
      },
    ],
    relatedArticles: [
      {
        title: "Editorial Elegance",
        description: "Shot for Vogue Italia during Milan Fashion Week. Capturing the intersection of haute couture and architectural minimalism.",
        image: editorialEleganceHero,
        tag: "Editorial",
        slug: "editorial-elegance",
      },
    ],
  },
  "vintage-highway": {
    slug: "vintage-highway",
    title: "Luxury Streetwear",
    subtitle: "From Streets to Status",
    publishDate: "March 12, 2024",
    author: {
      name: "James Carter",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: vintageHighwayHero,
    readTime: "7 min",
    viewCount: "3.1k",
    shareCount: 95,
    content: [
      {
        type: "paragraph",
        content: "Streetwear became luxury, and nobody noticed the shift happening.",
      },
      {
        type: "paragraph",
        content: "One day Supreme was a small skate shop on Lafayette Street. The next, it was selling teddy fleece jackets for $500 and people were lining up around the block every Thursday morning. Not because the quality suddenly changed, but because the story did. Streetwear stopped being about utility and started being about status.",
      },
      {
        type: "paragraph",
        content: "I shot this editorial exploring that transformation.",
      },
      {
        type: "paragraph",
        content: "The brief from the magazine was simple: document luxury streetwear as if it were haute couture. Photograph Supreme and Palace and Stüssy the way you'd shoot Dior or Prada. Treat hoodies and box logos with the same reverence traditionally reserved for evening gowns.",
      },
      {
        type: "paragraph",
        content: "We worked with natural light against solid color backgrounds—warm golds, deep blacks, vibrant primaries. No elaborate sets, no urban backdrops, no obvious street style signifiers. Just the pieces themselves, isolated and elevated. A black fleece jacket becomes sculptural when you light it right.",
      },
      {
        type: "paragraph",
        content: "The model wore Supreme, Carhartt WIP, vintage Nike. Classic pieces from the streetwear canon. But we shot them with fashion photography techniques—dramatic lighting, carefully considered composition, attention to fabric texture and garment construction. The baseball cap got the same photographic treatment as a Philip Treacy fascinator.",
      },
      {
        type: "paragraph",
        content: "Some people thought we were mocking streetwear. We weren't.",
      },
      {
        type: "paragraph",
        content: "The point was showing that these clothes deserve serious photographic attention. Streetwear has its own design language, its own cultural significance, its own relationship to identity and community. It's not fashion's scrappy younger sibling anymore. It's fashion, period.",
      },
      {
        type: "paragraph",
        content: "When the editorial ran, the responses split exactly as expected. Traditional fashion people appreciated the aesthetic approach. Streetwear heads felt we'd sanitized something that should stay raw. Both reactions made sense. The tension between those worlds is the whole story.",
      },
      {
        type: "paragraph",
        content: "Luxury streetwear exists in that uncomfortable space between two cultures. Maybe that's what makes it interesting to photograph.",
      },
    ],
    relatedArticles: [
      {
        title: "Desert Dreams",
        description: "A journey through minimalist landscapes where fashion meets nature in perfect harmony.",
        image: desertDreamsHero,
        tag: "Travel",
        slug: "desert-dreams",
      },
    ],
  },
  "lavender-fields": {
    slug: "lavender-fields",
    title: "The Hat Edit",
    subtitle: "Elevated Menswear Accessories",
    publishDate: "March 8, 2024",
    author: {
      name: "James Carter",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: lavenderFieldsHero,
    readTime: "5 min",
    viewCount: "2.2k",
    shareCount: 71,
    content: [
      {
        type: "paragraph",
        content: "Most men don't wear hats anymore.",
      },
      {
        type: "paragraph",
        content: "Somewhere between the 1960s and now, hats went from essential menswear to occasional accessory. You see them at the beach, on the golf course, maybe during winter. But that everyday hat—the one men used to wear to work, to dinner, to everywhere—disappeared from American life.",
      },
      {
        type: "paragraph",
        content: "This shoot was about bringing it back.",
      },
      {
        type: "paragraph",
        content: "We photographed a collection from a NYC hatmaker who crafts wide-brim felt hats by hand. Classic silhouettes, modern proportions. The kind of pieces that work with contemporary clothes but carry echoes of when everyone wore hats. Our model paired them with turtlenecks, blazers, casual knitwear—showing how a good hat elevates whatever you're already wearing.",
      },
      {
        type: "paragraph",
        content: "I shot against warm, simple backgrounds—golden yellows, burnt orange, amber tones that complemented the brown felt without competing. We kept everything clean. Profile shots that showed the hat's shape. Upward angles that created drama. Close-ups that revealed the texture of the felt and the precision of the stitching.",
      },
      {
        type: "paragraph",
        content: "The lighting was critical. Too harsh and the hat's brim creates ugly shadows across the face. Too soft and you lose the material's texture. We used golden hour light filtered through diffusion, creating warmth without harshness. The model's profile caught the light perfectly—strong jawline, contemplative upward gaze, hat brim creating clean geometry.",
      },
      {
        type: "paragraph",
        content: "That upward-looking shot became the campaign's hero image.",
      },
      {
        type: "paragraph",
        content: "There's something aspirational about a well-made hat. It suggests intention, care about presentation, respect for the ritual of getting dressed. In an era of athleisure and casual everything, a hat is a statement that says you're making an effort. Not for others necessarily, but for yourself.",
      },
      {
        type: "paragraph",
        content: "The hatmaker told me each piece takes two days to complete. Steaming, shaping, finishing. All done by hand in a small workshop in the Garment District. When you photograph something made with that much care, you owe it similar attention.",
      },
      {
        type: "paragraph",
        content: "Maybe men will wear hats again. Maybe they won't. Either way, documenting well-made things feels like worthwhile work.",
      },
    ],
    relatedArticles: [
      {
        title: "Coastal Classic",
        description: "Seaside elegance meets timeless style.",
        image: coastalClassicHero,
        tag: "Editorial",
        slug: "coastal-classic",
      },
    ],
  },
  "coastal-classic": {
    slug: "coastal-classic",
    title: "Natural Glow",
    subtitle: "Beauty Without Filters",
    publishDate: "March 5, 2024",
    author: {
      name: "James Carter",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: coastalClassicHero,
    readTime: "6 min",
    viewCount: "1.9k",
    shareCount: 58,
    content: [
      {
        type: "paragraph",
        content: "Beauty photography lies more than any other kind.",
      },
      {
        type: "paragraph",
        content: "The retouching, the filters, the lighting tricks that erase texture and pores and anything that makes a face look human. I've done it all. Smoothed skin until it looks like plastic, brightened eyes until they glow unnaturally, perfected features until the person disappears. It pays well. It also feels increasingly wrong.",
      },
      {
        type: "paragraph",
        content: "This campaign was different.",
      },
      {
        type: "paragraph",
        content: "A skincare brand approached me wanting something honest—beauty photography that showed real skin, natural light, minimal retouching. Just clean beauty photography that celebrated how people actually look, not some impossible airbrushed fantasy. It sounded simple. It wasn't.",
      },
      {
        type: "paragraph",
        content: "When you strip away all the usual tricks, you're left with pure technique. The lighting has to be perfect—soft enough to be flattering but true enough to show texture. I used large diffused natural light from a north-facing window. No fill, no reflectors, just beautiful soft directional light that wrapped around the model's face.",
      },
      {
        type: "paragraph",
        content: "We shot tight close-ups. Direct eye contact with camera. Minimal makeup—just skincare and a touch of neutral tone. The model's skin looked like skin. Pores visible, natural texture preserved, real human beauty instead of digital perfection.",
      },
      {
        type: "paragraph",
        content: "In post-production, I did almost nothing. Color correction, minor blemish cleanup, that's it. No liquifying, no frequency separation, no skin smoothing. The brief was clear: show what good skincare looks like on real skin. That means keeping the reality.",
      },
      {
        type: "paragraph",
        content: "When the campaign launched, the response surprised everyone. People were starved for honest beauty imagery. They'd been fed so much artifice for so long that seeing actual human skin felt revolutionary. The brand's Instagram comments were full of people saying: \"Finally, beauty that looks achievable.\"",
      },
      {
        type: "paragraph",
        content: "That's the power of showing truth. In a world of filters and Face Tune, natural beauty becomes radical.",
      },
      {
        type: "paragraph",
        content: "I've shot beauty campaigns both ways now. The heavily retouched fantasy and the honest reality. Only one feels like it might age well.",
      },
    ],
    relatedArticles: [
      {
        title: "Lavender Fields",
        description: "Romance and elegance captured in the purple hues of Provence.",
        image: lavenderFieldsHero,
        tag: "Editorial",
        slug: "lavender-fields",
      },
    ],
  },
  "stories-unbound": {
    slug: "stories-unbound",
    title: "Effortless Style",
    subtitle: "The Art of Looking Casual",
    publishDate: "March 1, 2024",
    author: {
      name: "James Carter",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: storiesUnboundHero,
    readTime: "9 min",
    viewCount: "3.5k",
    shareCount: 102,
    content: [
      {
        type: "paragraph",
        content: "The best style looks like no effort at all.",
      },
      {
        type: "paragraph",
        content: "An oversized tee, good sneakers, well-fitted pants. Nothing complicated, nothing trying too hard, just clean simple pieces worn with confidence. That's the foundation of street style—fashion that doesn't announce itself but still says something about who you are.",
      },
      {
        type: "paragraph",
        content: "I shot this series around Bushwick on a Saturday afternoon.",
      },
      {
        type: "paragraph",
        content: "No studio, no elaborate lighting setups, just natural daylight and interesting walls. The model wore basics—oversized sage green tee, black pants, white sneakers. The kind of outfit you'd see on any Brooklyn street corner. But paired with good proportions and shot well, basics become something more.",
      },
      {
        type: "paragraph",
        content: "We walked maybe ten blocks, shooting against weathered walls, aged paint, urban texture. The locations weren't Instagram-perfect. They were real—peeling paint, faded colors, the authentic decay of a city constantly remaking itself. That realness matters. Street style photography shouldn't look too polished.",
      },
      {
        type: "paragraph",
        content: "The key to photographing casual clothes is respecting the casualness.",
      },
      {
        type: "paragraph",
        content: "Don't over-style, don't over-light, don't force drama where none exists. The model walked, I followed, we stopped when something felt right. Sometimes the best street style shots come from just paying attention to how people naturally move through space.",
      },
      {
        type: "paragraph",
        content: "White sneakers are having their tenth comeback in as many years. They never really leave—they just cycle between mainstream and cool and back again. Right now they're everywhere, which somehow makes them more invisible, which somehow makes them more essential. The uniform of people who know style isn't about standing out.",
      },
      {
        type: "paragraph",
        content: "We wrapped after two hours and maybe 150 frames. No costume changes, no hair and makeup team, no assistants hauling equipment. Just a camera, good light, and someone who knew how to wear simple clothes well.",
      },
      {
        type: "paragraph",
        content: "That's the whole game. Make the everyday look intentional. Make the simple look considered. Make the effortless reveal the effort it actually took.",
      },
    ],
    relatedArticles: [
      {
        title: "Editorial Elegance",
        description: "Shot for Vogue Italia during Milan Fashion Week. Capturing the intersection of haute couture and architectural minimalism.",
        image: editorialEleganceHero,
        tag: "Editorial",
        slug: "editorial-elegance",
      },
    ],
  },
  "circular-horizons": {
    slug: "circular-horizons",
    title: "Fashion as Art",
    subtitle: "When Style Becomes Expression",
    publishDate: "February 28, 2024",
    author: {
      name: "James Carter",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: circularHorizonsHero,
    readTime: "7 min",
    viewCount: "2.7k",
    shareCount: 83,
    content: [
      {
        type: "paragraph",
        content: "Fashion stops being fashion when it becomes art.",
      },
      {
        type: "paragraph",
        content: "Or maybe it becomes more fashion. The line between the two has always been blurry—designers calling their work wearable sculpture, photographers shooting clothes like they're documenting performance art, models moving like dancers instead of mannequins. Fashion wants to be art. Art wants to be seen.",
      },
      {
        type: "paragraph",
        content: "This editorial explored that intersection.",
      },
      {
        type: "paragraph",
        content: "The brief was deliberately vague: create images where you can't tell if you're looking at fashion photography or fine art. We shot in black and white to strip away commercial associations. No color, no obvious styling, just form, shadow, movement. The model wore minimal pieces—enough to suggest fashion without making it the subject.",
      },
      {
        type: "paragraph",
        content: "We worked in a dance studio in SoHo. White walls, hardwood floors, huge windows flooding the space with natural light. The model had a dance background, which meant she understood how to use her body expressively. Arms raised, back arched, movements that felt improvised but looked intentional.",
      },
      {
        type: "paragraph",
        content: "I shot without direction, just followed the movement.",
      },
      {
        type: "paragraph",
        content: "Sometimes she'd hold a pose for three seconds and I'd fire a burst. Sometimes I'd catch her mid-motion, arms reaching upward, body creating shapes I couldn't have choreographed if I tried. The best images came from those unplanned moments—the spaces between poses where intention met instinct.",
      },
      {
        type: "paragraph",
        content: "Black and white changes how people see fashion. Without color to distract, you notice composition, form, the quality of light on skin. The images felt sculptural, almost like documentation of a performance piece. Which was exactly the point.",
      },
      {
        type: "paragraph",
        content: "When we showed the images to the magazine, the photo editor asked: \"Is this fashion or fine art?\" I didn't have an answer. Maybe that's okay. Maybe the best work exists in that uncertain space where categories break down and all that remains is an image that makes you stop and look.",
      },
      {
        type: "paragraph",
        content: "Fashion as art. Art as fashion. At a certain point, the distinction stops mattering.",
      },
    ],
    relatedArticles: [
      {
        title: "Editorial Elegance",
        description: "Shot for Vogue Italia during Milan Fashion Week. Capturing the intersection of haute couture and architectural minimalism.",
        image: editorialEleganceHero,
        tag: "Editorial",
        slug: "editorial-elegance",
      },
    ],
  },
  "retro-revival": {
    slug: "retro-revival",
    title: "The Leather Jacket",
    subtitle: "Timeless Rebellion",
    publishDate: "February 24, 2024",
    author: {
      name: "James Carter",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: retroRevivalHero,
    readTime: "8 min",
    viewCount: "4.1k",
    shareCount: 118,
    content: [
      {
        type: "paragraph",
        content: "Every wardrobe needs one perfect leather jacket.",
      },
      {
        type: "paragraph",
        content: "Not the trendy one, not the cheap one from a fast fashion chain, but the real thing—quality leather that gets better with age, classic moto styling that works with everything, the kind of jacket you'll still be wearing in twenty years. It's an investment piece, sure, but also a statement about how you want to move through the world. A little bit tough, a little bit refined, entirely timeless.",
      },
      {
        type: "paragraph",
        content: "I shot this editorial for a heritage leather goods brand out of New Jersey. They've been making motorcycle jackets since the 1950s—the same factory, the same patterns, the same commitment to doing one thing exceptionally well. The pieces look identical to what they made seventy years ago because they haven't needed to change the design.",
      },
      {
        type: "paragraph",
        content: "We photographed two people in matching black leather jackets.",
      },
      {
        type: "paragraph",
        content: "The concept was simple: show how the same piece looks on different people. One model with loc'd hair pulled up, hoop earrings catching the light. The other with a voluminous natural afro, wrists stacked with bracelets and a vintage watch. Both in identical jackets, both making them entirely their own.",
      },
      {
        type: "paragraph",
        content: "We shot against a weathered wall in Williamsburg—terracotta red paint fading to cream. No elaborate styling, no busy locations, just two people and two jackets. The intimacy between the subjects created the story. They stood close, facing each other, the jackets almost touching. Fashion photography, but also a portrait of connection.",
      },
      {
        type: "paragraph",
        content: "Leather photographs beautifully in natural light. The material has texture, weight, character. It catches light differently than fabric—harder edges, sharper shadows, a kind of sculptural quality. I shot close, focusing on details. The stitching along shoulders. The hardware. The way leather wrinkles and creases from being worn.",
      },
      {
        type: "paragraph",
        content: "The brand wanted to show that their jackets work for everyone. Not in a vague inclusive marketing way, but literally—the same design, worn by different people, creating different stories. Same jacket, different style, both completely valid. That's what good design does. It adapts to whoever's wearing it.",
      },
      {
        type: "paragraph",
        content: "When people ask me about essential wardrobe pieces, leather jacket is always in my top three. Not because it's trendy—it cycles in and out of fashion constantly—but because a good one transcends trends entirely. It's the rare piece that makes everything else you own look better.",
      },
      {
        type: "paragraph",
        content: "Timeless, versatile, cool without trying. That's the leather jacket promise. And after shooting maybe a hundred of them over the years, I still believe it.",
      },
    ],
    relatedArticles: [
      {
        title: "Vintage Highway",
        description: "A nostalgic journey through classic American style and the open road.",
        image: vintageHighwayHero,
        tag: "Travel",
        slug: "vintage-highway",
      },
    ],
  },
  "golden-spheres": {
    slug: "golden-spheres",
    title: "Neon Dreams",
    subtitle: "Fashion in Digital Spaces",
    publishDate: "February 20, 2024",
    author: {
      name: "James Carter",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: goldenSpheresHero,
    readTime: "6 min",
    viewCount: "2.9k",
    shareCount: 91,
    content: [
      {
        type: "paragraph",
        content: "Fashion is increasingly digital, and physical space is becoming optional.",
      },
      {
        type: "paragraph",
        content: "Virtual runways, AI-generated models, NFT clothing that exists only on screens. The industry is experimenting with what fashion means when it's untethered from fabric and bodies. I'm interested in the opposite question: what happens when you bring digital aesthetics into physical space? When neon and pixels and screen-glow become tangible environments you can shoot in?",
      },
      {
        type: "paragraph",
        content: "We found an immersive art installation in Chelsea—vertical bars of neon light in pink, coral, red gradients. The kind of installation people visit to take selfies. I wanted to shoot fashion there before it closed, to capture that intersection of digital aesthetic and human presence.",
      },
      {
        type: "paragraph",
        content: "The lighting was already perfect.",
      },
      {
        type: "paragraph",
        content: "Vibrant pink neon backlighting the model, creating pure silhouette. No additional lights needed, no strobes, no reflectors. Just the installation itself providing all the atmosphere. The model stood centered in the neon field, sometimes still, sometimes moving slowly. Each frame felt futuristic, almost sci-fi.",
      },
      {
        type: "paragraph",
        content: "Silhouette photography is deceptive. You're hiding details, reducing the subject to pure shape. But that reduction can be powerful. Without facial features or clothing details to distract, you see posture, gesture, the outline of a human form against pure color. It becomes about presence rather than specifics.",
      },
      {
        type: "paragraph",
        content: "We shot for maybe an hour, working quickly before the installation closed for the evening. The model wore simple black clothes—not because they mattered visually (they'd photograph as silhouette anyway) but because black absorbs light best. Against all that neon pink, the silhouette stayed crisp and defined.",
      },
      {
        type: "paragraph",
        content: "When I showed the images to the magazine, they weren't sure how to categorize them. Fashion? Art photography? Documentation of an installation? Maybe all three. Maybe none. The digital generation doesn't care much about those old boundaries anyway.",
      },
      {
        type: "paragraph",
        content: "Fashion photography is evolving. The tools change, the aesthetics shift, the venues expand beyond studios and streets. But the core remains—documenting how people present themselves, how they use clothing and environment and light to create meaning. Whether that happens in physical space or digital doesn't change the fundamental work.",
      },
      {
        type: "paragraph",
        content: "Neon, pixels, screens, glow. This is what fashion spaces look like now. I'm just trying to document it honestly.",
      },
    ],
    relatedArticles: [
      {
        title: "Circular Horizons",
        description: "Geometric patterns and modern design.",
        image: circularHorizonsHero,
        tag: "Editorial",
        slug: "circular-horizons",
      },
    ],
  },
};

export const getArticleBySlug = (slug: string): ArticleData | undefined => {
  return articlesData[slug];
};

export const getAllArticleSlugs = (): string[] => {
  return Object.keys(articlesData);
};
