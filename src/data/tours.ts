import tourGlencoe from "@/assets/tour-glencoe.webp";
import tourLochness from "@/assets/tour-lochness.jpg";
import tourSkye from "@/assets/tour-skye.webp";
import tourStirling from "@/assets/tour-stirling.jpg";
import tourOrkney from "@/assets/tour-orkney.webp";
import tourIslay from "@/assets/tour-islay.webp";
import tourLewis from "@/assets/tour-lewis.jpg";

export interface Tour {
  slug: string;
  title: string;
  duration: string;
  price: string;
  vehicle: string;
  image: string;
  shortDescription: string;
  highlights: string[];
  type: "day" | "multi";
  requiresFerry?: boolean;
  nights?: number;
}

export const tours: Tour[] = [
  {
    slug: "dunfermline-stirling-rosslyn",
    title: "Dunfermline Abbey, Stirling Castle & Rosslyn Chapel",
    duration: "1 Day (10 hours)",
    price: "£695",
    vehicle: "6-seater Mercedes V-Class",
    image: tourStirling,
    shortDescription:
      "A living history lesson from medieval abbeys to Renaissance palaces. Visit the Forth Railway Bridge, Kingdom of Fife, Dunfermline Abbey & Palace, Stirling Castle, Bannockburn Battlefield and the enigmatic Rosslyn Chapel.",
    highlights: [
      "Forth Railway Bridge",
      "Dunfermline Abbey & Palace",
      "Stirling Castle",
      "Bannockburn Battlefield",
      "Rosslyn Chapel",
    ],
    type: "day",
  },
  {
    slug: "private-loch-ness-highlands",
    title: "Private Loch Ness & Highlands",
    duration: "1 Day (12 hours 15 min)",
    price: "£890",
    vehicle: "6-seater Mercedes V-Class",
    image: tourGlencoe,
    shortDescription:
      "Explore the Scottish Highlands in a private vehicle on this full-day experience. Enjoy the most beautiful Highland scenery, hear the history of the Glencoe massacre, discover the mystery of Loch Ness monster \"Nessie\", the Kelpies and the Unicorn. Travel the stunning west Highlands route A82 and customise the itinerary to suit yourself.",
    highlights: [
      "Stirling",
      "Scottish Highlands & Glencoe",
      "Fort William",
      "Drumnadrochit & Loch Ness",
      "Pitlochry",
    ],
    type: "day",
  },
  {
    slug: "loch-lomond-stirling-kelpies",
    title: "Loch Lomond, Stirling Castle & The Kelpies",
    duration: "1 Day (10 hours)",
    price: "£695",
    vehicle: "6-seater Mercedes V-Class",
    image: tourLochness,
    shortDescription:
      "From the bonnie banks of Loch Lomond to the towering Kelpies sculptures, this tour pairs Scotland's finest natural beauty with its boldest public art and most storied castle.",
    highlights: [
      "Luss village on Loch Lomond",
      "Balmaha woodland walk",
      "Stirling Castle",
      "The Kelpies (30 m horse-head sculptures)",
    ],
    type: "day",
  },
  {
    slug: "isle-of-skye",
    title: "Isle of Skye",
    duration: "3 Days / 2 Nights",
    price: "£2,385",
    vehicle: "6-seater Mercedes V-Class",
    nights: 2,
    image: tourSkye,
    shortDescription:
      "Three days exploring Skye's otherworldly landscapes — Trotternish Peninsula, Kilt Rock, Old Man of Storr and the Quiraing — with journeys through Glencoe, over the Skye Bridge and back via Eilean Donan Castle.",
    highlights: [
      "Glencoe & Fort William",
      "Skye Bridge crossing",
      "Kilt Rock & Old Man of Storr",
      "Quiraing & Sligachan Bridge",
      "Eilean Donan Castle",
      "Fort Augustus & Pitlochry",
    ],
    type: "multi",
  },
  {
    slug: "islay-tour",
    title: "Islay Whisky & Landscapes",
    duration: "4 Days / 3 Nights",
    price: "£3,230",
    vehicle: "6-seater Mercedes V-Class",
    nights: 3,
    requiresFerry: true,
    image: tourIslay,
    shortDescription:
      "Combine dramatic Highland scenery with the smoky whisky culture of Islay. Visit Lagavulin, Ardbeg and Laphroaig distilleries, explore Kilmartin Glen's Neolithic sites and enjoy coastal walks around Bowmore.",
    highlights: [
      "Oban distillery tour & tasting",
      "Kilmartin Glen Neolithic sites",
      "Scenic ferry to Islay",
      "Lagavulin, Ardbeg & Laphroaig",
      "Coastal walks & Bowmore evenings",
      "Return via Inveraray & Loch Lomond",
    ],
    type: "multi",
  },
  {
    slug: "orkney-exquisite",
    title: "Orkney Exquisite",
    duration: "5 Days / 4 Nights",
    price: "£4,075",
    vehicle: "6-seater Mercedes V-Class",
    nights: 4,
    requiresFerry: true,
    image: tourOrkney,
    shortDescription:
      "An epic journey from the Highlands to the ancient Orkney Isles. Explore Skara Brae, the Ring o' Brodgar, Italian Chapel and Churchill Barriers, then return past Dunrobin Castle and through the Cairngorms.",
    highlights: [
      "Glencoe, Fort William & Loch Ness",
      "Ferry to Orkney Isles",
      "Skara Brae & Ring o' Brodgar",
      "Italian Chapel & Churchill Barriers",
      "John O' Groats & Dunrobin Castle",
      "Culloden Battlefield & Cairngorms",
    ],
    type: "multi",
  },
  {
    slug: "lewis-harris",
    title: "Lewis & Harris",
    duration: "5 Days / 4 Nights",
    price: "£4,075",
    vehicle: "6-seater Mercedes V-Class",
    nights: 4,
    requiresFerry: true,
    image: tourLewis,
    shortDescription:
      "Venture to the Outer Hebrides — the Callanish Standing Stones, Luskentyre Beach and Arnol Blackhouse — with Highland stops at Glencoe, a Loch Ness cruise, Culloden and whisky tasting in the Cairngorms.",
    highlights: [
      "Glencoe & Loch Ness cruise",
      "Ullapool & Stornoway",
      "Callanish Standing Stones",
      "Luskentyre Beach",
      "Arnol Blackhouse",
      "Culloden & Cairngorms whisky tasting",
    ],
    type: "multi",
  },
];
