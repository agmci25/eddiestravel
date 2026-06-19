export interface GolfTour {
  slug: string;
  title: string;
  tagline?: string;
  duration: string;
  image: string;
  description: string;
  highlights: string[];
}

export const golfTours: GolfTour[] = [
  {
    slug: "st-andrews-golf-pilgrimage",
    title: "St Andrews Golf Pilgrimage",
    duration: "1 Day",
    image: "/placeholder.svg",
    description:
      "Experience the Home of Golf by spending a full day exploring St Andrews. Walk in the footsteps of golfing greats, take in the famous Old Course, visit iconic golfing landmarks and enjoy the charm of this historic medieval town.",
    highlights: [
      "Visit the legendary Old Course",
      "Walk across the Swilcan Bridge",
      "Explore St Andrews town and university",
      "Visit the British Golf Museum (optional)",
      "Luxury executive transport",
      "Flexible itinerary tailored to your interests",
    ],
  },
  {
    slug: "st-andrews-east-neuk",
    title: "St Andrews & East Neuk Luxury Tour",
    tagline: "Golf Heritage Meets Coastal Scotland",
    duration: "1 Day",
    image: "/placeholder.svg",
    description:
      "Discover the history of St Andrews while exploring the beautiful fishing villages of the East Neuk of Fife. Take in the stunning coastline, explore charming harbours, enjoy exquisite local food and experience the area's famous golfing heritage all in one memorable day.",
    highlights: [
      "Guided visit to St Andrews",
      "Explore picturesque villages including Anstruther, Crail, and Pittenweem",
      "Scenic coastal drives",
      "Luxury executive vehicle",
      "Time for shopping, dining, and photography",
      "Customisable itinerary",
    ],
  },
  {
    slug: "golf-coast-of-scotland",
    title: "Golf Coast of Scotland Tour",
    tagline: "Play and Discover Scotland's Legendary Golf Coast",
    duration: "2–3 Days",
    image: "/placeholder.svg",
    description:
      "Explore some of Scotland's finest links courses spanning the east coast — from renowned championship venues to obscure hidden gems. Enjoy great golf, beautiful coastal landscapes, quality accommodation and a taste of authentic Scottish charm.",
    highlights: [
      "St Andrews and surrounding championship courses",
      "Scenic coastal touring",
      "Luxury accommodation options",
      "Private chauffeur service",
      "Flexible golf and sightseeing schedule",
      "Ideal for golfing groups and visiting enthusiasts",
    ],
  },
  {
    slug: "whisky-and-golf-experience",
    title: "Scottish Whisky & Golf Experience",
    tagline: "The Perfect Scottish Combination",
    duration: "3 Days",
    image: "/placeholder.svg",
    description:
      "Combine Scotland's legendary golf courses with its world-famous whisky heritage by enjoying memorable rounds of golf, exploring renowned distilleries, enjoying private tastings and uncovering the rich story behind Scotland's national drink.",
    highlights: [
      "Golf at selected championship and links courses",
      "Distillery tours and whisky tastings",
      "Luxury hotel accommodation",
      "Scenic Highland and coastal routes",
      "Private executive transport throughout",
      "Tailored for individuals, couples, and groups",
    ],
  },
  {
    slug: "highlands-castles-and-golf",
    title: "Highlands, Castles & Golf Tour",
    tagline: "A Journey Through Scotland's Greatest Landscapes",
    duration: "5 Days",
    image: "/placeholder.svg",
    description:
      "Discover the best of Scotland through a mix of exceptional golf, historic castles, breathtaking Highland scenery and unique cultural experiences in a multi-day adventure that takes you to some of the country's most memorable destinations.",
    highlights: [
      "Championship golf courses",
      "Historic castles and landmarks",
      "Highland landscapes and lochs",
      "Luxury accommodation throughout",
      "Private chauffeur-guided touring",
      "Bespoke itinerary options available",
    ],
  },
];

export interface GolfTransferService {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
}

export const golfTransferServices: GolfTransferService[] = [
  {
    slug: "vip-airport-golf-transfer",
    title: "VIP Airport & Golf Transfer Service",
    tagline: "Luxury Transport for Golfers",
    description:
      "Travel in comfort between airports, hotels and golf courses across Scotland with our dedicated transfer service. Designed with golfers in mind, our spacious vehicles provide secure transport for clubs and luggage throughout your journey.",
    features: [
      "Airport arrivals and departures",
      "Hotel-to-course transfers",
      "Multi-course golf itineraries",
      "Executive Mercedes vehicles",
      "Professional local drivers",
      "Meet-and-greet service available",
    ],
    image: "/placeholder.svg",
  },
  {
    slug: "open-championship-transport",
    title: "The Open Championship Transport Package",
    tagline: "Stress-Free Travel During Golf's Greatest Championship",
    description:
      "Leave the parking, traffic, and travel arrangements to us with our dedicated Open Championship transport service. Whether you're attending for a day or the entire tournament, we'll make sure your journey is comfortable and hassle-free.",
    features: [
      "Hotel-to-course transport",
      "Airport transfers",
      "Flexible collection times",
      "Executive vehicles",
      "Group transport options",
      "Professional local drivers familiar with championship venues",
    ],
    image: "/placeholder.svg",
  },
];