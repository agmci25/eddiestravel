import Layout from "@/components/Layout";
import { tours } from "@/data/tours";
import { Clock, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import curatedHero from "@/assets/curated-tours-hero.jpg";

const CuratedTours = () => {
  const dayTours = tours.filter((t) => t.type === "day");
  const multiTours = tours.filter((t) => t.type === "multi");

  return (
    <Layout>
      {/* Header */}
      <section className="relative bg-section-alt overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={curatedHero}
            alt="Scottish Highlands panoramic landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container-narrow mx-auto text-center section-padding py-20 sm:py-28">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-white">
            <span className="text-accent">Curated</span> Tours
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Hand-picked itineraries that reveal Scotland's greatest treasures — from ancient battlefields to otherworldly islands.
          </p>
        </div>
      </section>

      {/* Day Tours */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-10">
            Day Tours <span className="text-muted-foreground font-body text-lg font-normal">from Edinburgh</span>
          </h2>
          <div className="space-y-16">
            {dayTours.map((tour) => (
              <article key={tour.slug} id={tour.slug} className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <img
                  src={tour.image}
                  alt={`${tour.title} — small-group Scotland tour`}
                  className="w-full rounded-lg object-cover aspect-[4/3]"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-3">{tour.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Clock size={15} /> {tour.duration}</span>
                    <span className="flex items-center gap-1"><Users size={15} /> {tour.vehicle}</span>
                    <span className="font-heading text-lg font-bold text-primary">{tour.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-5 leading-relaxed">{tour.shortDescription}</p>
                  <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3">Highlights</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {tour.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-2.5 rounded-md bg-accent text-accent-foreground font-medium text-sm hover:bg-gold-hover transition-colors"
                  >
                    Book This Tour
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Day Tours */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-10">
            Multi-Day Adventures
          </h2>
          <div className="space-y-16">
            {multiTours.map((tour) => (
              <article key={tour.slug} id={tour.slug} className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <img
                  src={tour.image}
                  alt={`${tour.title} — multi-day Scotland tour`}
                  className="w-full rounded-lg object-cover aspect-[4/3]"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-3">{tour.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Clock size={15} /> {tour.duration}</span>
                    <span className="flex items-center gap-1"><Users size={15} /> {tour.vehicle}</span>
                    <span className="font-heading text-lg font-bold text-primary">{tour.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-5 leading-relaxed">{tour.shortDescription}</p>
                  <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3">Highlights</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {tour.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-2.5 rounded-md bg-accent text-accent-foreground font-medium text-sm hover:bg-gold-hover transition-colors"
                  >
                    Book This Tour
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-center mb-8">What's Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Door-to-door pick-up & drop-off",
              "Premium Mercedes minivan transport",
              "Expert driver-guide (Eddie!)",
              "Complimentary bottled Scottish water",
              "Flexible photo stops",
              "Personalised small-group attention",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-section-alt rounded-md p-4">
                <CheckCircle size={18} className="text-primary shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-6">
            Accommodation, entrance fees, ferries, trains, flights and meals are not included unless otherwise stated.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default CuratedTours;
