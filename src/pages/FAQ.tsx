import Layout from "@/components/Layout";
import faqHero from "@/assets/faq-hero.jpg";
import { Link } from "react-router-dom";
import { MessageCircle, MapPin, Users, Clock } from "lucide-react";
import { useState } from "react";

const categories = [
  { icon: MapPin, label: "Planning Your Trip", id: "planning" },
  { icon: Users, label: "Tour Details", id: "tour-details" },
  { icon: Clock, label: "Booking & Policies", id: "booking" },
];

const faqsByCategory: Record<string, { q: string; a: React.ReactNode }[]> = {
  planning: [
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
      a: <>It depends on your interests. A single day can cover a fantastic amount — Glencoe and Loch Ness, for example. For the islands (Skye, Orkney, Lewis &amp; Harris), three to five days is ideal. Eddie can also design longer itineraries for a deeper exploration. Browse our <Link to="/curated-tours" className="text-primary hover:underline font-medium">curated tours</Link> for inspiration.</>,
    },
  ],
  "tour-details": [
    {
      q: "How many people are in each tour group?",
      a: "Eddie's tours are genuinely small-group: a maximum of 6 guests on day tours (Mercedes V-Class) and 8 guests on multi-day tours (Mercedes Vito Tourer). This means personal attention, flexible stops and a relaxed pace.",
    },
    {
      q: "Do you provide pick-up and drop-off?",
      a: <>Yes! Complimentary door-to-door pick-up and drop-off is included for most central Edinburgh hotels and other convenient meeting points. Just let Eddie know where you're staying when you <Link to="/contact" className="text-primary hover:underline font-medium">book</Link>.</>,
    },
    {
      q: "What's included in the tour price?",
      a: "All tours include transport in a premium Mercedes minivan, a professional driver-guide (Eddie), complimentary bottled Scottish water and flexible photo stops. Accommodation, entrance fees, ferries, trains, flights and meals are generally not included unless stated.",
    },
  ],
  booking: [
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
      a: <>Day tours are fully refundable if cancelled more than 24 hours before departure. Multi-day tours require 7 days' notice (for 3-day tours) or 14 days' notice (for 4–5 day tours) for a full refund. <Link to="/contact" className="text-primary hover:underline font-medium">Contact Eddie</Link> directly for special circumstances.</>,
    },
    {
      q: "Can I create a custom itinerary?",
      a: <>Absolutely — that's one of Eddie's specialities. Visit the <Link to="/bespoke-tours" className="text-primary hover:underline font-medium">Bespoke Tours</Link> page to share your interests (castles, whisky, hiking, history, wildlife) and preferred dates, and Eddie's team will design a bespoke itinerary just for you.</>,
    },
  ],
};

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <Layout>
      {/* Hero */}
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

      {/* Timeline FAQ */}
      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          {categories.map((cat, catIdx) => {
            const faqs = faqsByCategory[cat.id];
            const CatIcon = cat.icon;

            return (
              <div key={cat.id} id={cat.id} className="scroll-mt-24 mb-16 last:mb-0">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center shadow-md">
                    <CatIcon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold">{cat.label}</h2>
                </div>

                {/* Timeline items */}
                <div className="relative pl-8 sm:pl-10">
                  {/* Vertical line */}
                  <div className="absolute left-[1.09rem] sm:left-[1.34rem] top-0 bottom-0 w-px bg-border" />

                  {faqs.map((faq, idx) => {
                    const itemId = `${cat.id}-${idx}`;
                    const isOpen = openItem === itemId;

                    return (
                      <div key={idx} className="relative mb-6 last:mb-0">
                        {/* Timeline dot */}
                        <div
                          className={`absolute -left-8 sm:-left-10 top-5 w-5 h-5 rounded-full border-[3px] transition-colors duration-300 ${
                            isOpen
                              ? "border-primary bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.15)]"
                              : "border-border bg-background"
                          }`}
                        />

                        {/* Card */}
                        <button
                          onClick={() => toggle(itemId)}
                          className={`w-full text-left rounded-xl border transition-all duration-300 ${
                            isOpen
                              ? "border-primary/30 bg-card shadow-lg"
                              : "border-border bg-card hover:border-primary/20 hover:shadow-md"
                          }`}
                        >
                          <div className="flex items-center justify-between p-5 sm:p-6 gap-4">
                            <span className="font-heading font-semibold text-[0.95rem] sm:text-base leading-snug">
                              {faq.q}
                            </span>
                            <span
                              className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                                isOpen
                                  ? "bg-primary text-primary-foreground rotate-45"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              +
                            </span>
                          </div>
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-muted-foreground leading-relaxed text-[0.9rem] border-t border-border/50">
                              <div className="pt-4">{faq.a}</div>
                            </div>
                          </div>
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Category divider */}
                {catIdx < categories.length - 1 && (
                  <div className="mt-12 border-b border-border/40" />
                )}
              </div>
            );
          })}

          {/* CTA */}
          <div className="text-center mt-20 p-10 rounded-2xl bg-section-alt border border-border">
            <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Eddie is always happy to chat — drop him a message and he'll get back to you personally.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors shadow-md"
            >
              Contact Eddie
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
