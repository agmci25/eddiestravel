import Layout from "@/components/Layout";
import faqHero from "@/assets/faq-hero.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "When is the best time to visit Scotland?",
    a: "Scotland is beautiful year-round. May to September offers the longest daylight hours and mildest weather, making it ideal for outdoor exploration. Autumn brings dramatic colours, and winter has a magical, moody atmosphere with fewer tourists. Eddie runs tours in every season.",
  },
  {
    q: "What about midges?",
    a: "Midges are small biting insects found in the Highlands, mainly from late May to September. They're most active at dawn and dusk in still, damp conditions. Eddie carries insect repellent on all tours, and keeping moving (which you will be!) helps avoid them.",
  },
  {
    q: "How many days should I allow for a Scotland tour?",
    a: "It depends on your interests. A single day can cover a fantastic amount — Glencoe and Loch Ness, for example. For the islands (Skye, Orkney, Lewis & Harris), three to five days is ideal. Eddie can also design longer itineraries for a deeper exploration.",
  },
  {
    q: "How many people are in each tour group?",
    a: "Eddie's tours are genuinely small-group: a maximum of 6 guests on day tours (Mercedes V-Class) and 8 guests on multi-day tours (Mercedes Vito Tourer). This means personal attention, flexible stops and a relaxed pace.",
  },
  {
    q: "Do you provide pick-up and drop-off?",
    a: "Yes! Complimentary door-to-door pick-up and drop-off is included for most central Edinburgh hotels and other convenient meeting points. Just let Eddie know where you're staying when you book.",
  },
  {
    q: "What's included in the tour price?",
    a: "All tours include transport in a premium Mercedes minivan, a professional driver-guide (Eddie), complimentary bottled Scottish water and flexible photo stops. Accommodation, entrance fees, ferries, trains, flights and meals are generally not included unless stated.",
  },
  {
    q: "Are children welcome?",
    a: "Absolutely! Families are welcome on all tours. Please provide ages when booking, and let Eddie know if you need a car seat — he'll arrange one for you.",
  },
  {
    q: "How far in advance should I book?",
    a: "For day tours, at least 24 hours in advance is recommended. Multi-day tours should be booked 7–14 days ahead. During peak season (June–August), early booking is strongly recommended to secure your preferred dates.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Day tours are fully refundable if cancelled more than 24 hours before departure. Multi-day tours require 7 days' notice (for 3-day tours) or 14 days' notice (for 4–5 day tours) for a full refund. Contact Eddie directly for special circumstances.",
  },
  {
    q: "Can I create a custom itinerary?",
    a: "Absolutely — that's one of Eddie's specialities. Visit the Bespoke Tours page to share your interests (castles, whisky, hiking, history, wildlife) and preferred dates, and Eddie's team will design a bespoke itinerary just for you.",
  },
];

const FAQ = () => (
  <Layout>
    <section className="relative py-20 sm:py-28">
      <img
        src={faqHero}
        alt="Scottish loch surrounded by mountains"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="container-narrow mx-auto text-center relative z-10">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-white">
          Frequently Asked <span className="text-primary">Questions</span>
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto text-lg">
          Everything you need to know before booking your small-group Scotland tour with Eddie.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-heading font-semibold text-base py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            Contact Eddie
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default FAQ;
