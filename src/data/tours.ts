import tourGlencoe from "@/assets/tour-glencoe.webp";
import tourLochness from "@/assets/tour-lochness.jpg";
import tourSkye from "@/assets/tour-skye.webp";
import tourStirling from "@/assets/tour-stirling.jpg";
import tourOrkney from "@/assets/tour-orkney.jpg";
import tourIslay from "@/assets/tour-islay.jpg";
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
}

export const tours: Tour[] = [
  {
    slug: "dunfermline-stirling-rosslyn",
    title: "Dunfermline Abbey, Stirling Castle & Rosslyn Chapel",
    duration: "1 Day (10 hours)",
    price: "£580",
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
    slug: "glencoe-loch-ness",
    title: "Glencoe & Loch Ness",
    duration: "1 Day (12.5 hours)",
    price: "£820",
    vehicle: "6-seater Mercedes V-Class",
    image: tourGlencoe,
    shortDescription:
      "Journey through Scotland's most dramatic landscape — the Pass of Glencoe — then on to mysterious Loch Ness. Stop at Kilmahog to meet Highland Coos, pause in Fort William and cruise the dark waters of the loch.",
    highlights: [
      "Highland Coos at Kilmahog",
      "Pass of Glencoe",
      "Fort William",
      "Fort Augustus",
      "Loch Ness boat cruise (optional)",
    ],
    type: "day",
  },
  {
    slug: "loch-lomond-stirling-kelpies",
    title: "Loch Lomond, Stirling Castle & The Kelpies",
    duration: "1 Day (10 hours)",
    price: "£595",
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
    duration: "3 Days",
    price: "From £695 pp",
    vehicle: "8-seater Mercedes Vito Tourer",
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
    duration: "4 Days",
    price: "From £695 pp",
    vehicle: "8-seater Mercedes Vito",
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
    duration: "5 Days",
    price: "From £625 pp",
    vehicle: "8-seater Mercedes Vito",
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
    duration: "5 Days",
    price: "From £695 pp",
    vehicle: "8-seater Mercedes Vito",
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
