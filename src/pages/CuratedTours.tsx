import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { tours } from "@/data/tours";
import { Clock, Users, CheckCircle, AlertTriangle, Car, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import curatedHero from "@/assets/curated-tours-hero.jpg";
import eddieWithCar from "@/assets/eddie-with-car.webp";
import vclassVehicle from "@/assets/vclass-vehicle.webp";

const CuratedTours = () => {
  const dayTours = tours.filter((t) => t.type === "day");
  const multiTours = tours.filter((t) => t.type === "multi");

  return (
    <Layout>
      <SEO
        title="Curated Scotland Tours | Day Trips & Multi-Day Highland Adventures"
        description="Browse our hand-picked small-group Scotland tours. Day trips from Edinburgh to Glencoe, Loch Ness and Stirling, plus multi-day adventures to Skye, Orkney, Islay and the Outer Hebrides."
        canonical="https://eddiestravel.lovable.app/curated-tours"
      />
      {/* Header */}
      <section className="relative bg-section-alt overflow-hidden min-h-[280px] sm:min-h-[340px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={curatedHero}
            alt="Scottish Highlands panoramic landscape"
            className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container-narrow mx-auto text-center py-20 sm:py-28 px-4">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-white">
            <span className="text-primary">Curated</span> Scotland Tours
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Hand-picked small-group itineraries that reveal Scotland's greatest treasures — from ancient battlefields to otherworldly islands.
          </p>
        </div>
      </section>

      {/* Day Tours */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-10">
            Scotland Day Tours <span className="text-muted-foreground font-body text-lg font-normal">from Edinburgh</span>
          </h2>
          <div className="space-y-16">
            {dayTours.map((tour) =>
            <article key={tour.slug} id={tour.slug} className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <img
                src={tour.image}
                alt={`${tour.title} — small-group Scotland tour`}
                className="w-full rounded-lg object-cover aspect-[4/3]"
                loading="lazy" />

                <div>
                  <h3 className="font-heading text-2xl font-bold mb-3">{tour.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Clock size={15} /> {tour.duration}</span>
                    <span className="flex items-center gap-1"><Users size={15} /> {tour.vehicle}</span>
                    <span className="font-heading text-lg font-bold text-primary">{tour.price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">Guests' accommodation is not included in the tour price.</p>
                  <p className="text-muted-foreground mb-5 leading-relaxed">{tour.shortDescription}</p>
                  <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3">Highlights</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {tour.highlights.map((h) =>
                  <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                        {h}
                      </li>
                  )}
                  </ul>
                  {tour.slug === "loch-lomond-stirling-kelpies" ? (
                    <button
                      className="bokunButton inline-flex items-center px-6 py-2.5 rounded-md bg-accent text-accent-foreground font-medium text-sm hover:bg-gold-hover transition-colors border-none cursor-pointer"
                      id="bokun_b7f4e164_9c5b_4fc5_9a42_4112edd5a48b"
                      data-src="https://widgets.bokun.io/online-sales/8b956080-fe7f-4205-be74-066b84ab2ed2/experience/825987?partialView=1"
                      data-testid="widget-book-button"
                    >
                      Book This Tour
                    </button>
                  ) : tour.slug === "private-loch-ness-highlands" ? (
                    <button
                      className="bokunButton inline-flex items-center px-6 py-2.5 rounded-md bg-accent text-accent-foreground font-medium text-sm hover:bg-gold-hover transition-colors border-none cursor-pointer"
                      id="bokun_b46417ef_f7bf_4c06_b270_cccb5912e6bf"
                      data-src="https://widgets.bokun.io/online-sales/8b956080-fe7f-4205-be74-066b84ab2ed2/experience/752742?partialView=1"
                      data-testid="widget-book-button"
                    >
                      Book This Tour
                    </button>
                  ) : (
                    <Link
                      to={`/contact?tour=${encodeURIComponent(tour.title)}`}
                      className="inline-flex items-center px-6 py-2.5 rounded-md bg-accent text-accent-foreground font-medium text-sm hover:bg-gold-hover transition-colors"
                    >
                      Book This Tour
                    </Link>
                  )}
                </div>
              </article>
            )}
          </div>
        </div>
      </section>

      {/* Multi-Day Tours */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-10">
            Multi-Day Scottish Adventures
          </h2>
          <div className="space-y-16">
            {multiTours.map((tour) =>
            <article key={tour.slug} id={tour.slug} className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <img
                src={tour.image}
                alt={`${tour.title} — multi-day Scotland tour`}
                className="w-full rounded-lg object-cover aspect-[4/3]"
                loading="lazy" />

                <div>
                  <h3 className="font-heading text-2xl font-bold mb-3">{tour.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Clock size={15} /> {tour.duration}</span>
                    <span className="flex items-center gap-1"><Users size={15} /> {tour.vehicle}</span>
                    <span className="font-heading text-lg font-bold text-primary">{tour.price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">Guests' accommodation is not included in the tour price.</p>
                  {tour.requiresFerry && (
                    <div className="flex items-start gap-2 bg-accent/10 border border-accent/30 rounded-md p-3 mb-4">
                      <AlertTriangle size={16} className="text-accent mt-0.5 shrink-0" />
                      <p className="text-sm text-foreground">Ferry tickets are not included and will be charged in addition to the tour price.</p>
                    </div>
                  )}
                  {tour.slug === "isle-of-skye" && (
                    <div className="flex items-start gap-2 bg-primary/5 border border-primary/20 rounded-md p-3 mb-4">
                      <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                      <div className="text-sm text-muted-foreground">
                        <p className="font-medium text-foreground mb-1">Accommodation on Skye can be very limited. We recommend staying in:</p>
                        <p className="mb-1">Portree · Broadford · Kyleakin</p>
                        <p>Alternatively: Kyle of Lochalsh · Dornie · Plockton</p>
                      </div>
                    </div>
                  )}
                  <p className="text-muted-foreground mb-5 leading-relaxed">{tour.shortDescription}</p>
                  <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3">Highlights</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {tour.highlights.map((h) =>
                  <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                        {h}
                      </li>
                  )}
                  </ul>
                  <Link
                  to={`/contact?tour=${encodeURIComponent(tour.title)}`}
                  className="inline-flex items-center px-6 py-2.5 rounded-md bg-accent text-accent-foreground font-medium text-sm hover:bg-gold-hover transition-colors">

                    Book This Tour
                  </Link>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>

      {/* Our Vehicle */}
      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-center mb-8">Our Vehicle</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <img
              src={vclassVehicle}
              alt="Mercedes V-Class touring vehicle"
              className="rounded-lg w-full object-cover aspect-[16/9]"
              loading="lazy"
            />
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                All tours operate in a <strong className="text-foreground">Mercedes V-Class</strong> or equivalent premium people carrier, ensuring a comfortable and stylish journey throughout Scotland.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                  Maximum of 6 passengers per vehicle
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                  Spacious, air-conditioned and immaculately maintained
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                If a larger vehicle is required, a 16-seat minibus can be provided. Minibus pricing will be quoted separately — please <a href="/contact" className="text-primary hover:underline">get in touch</a> for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-center mb-8">What's Included</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <img
              src={eddieWithCar}
              alt="Eddie standing beside his Mercedes V-Class fleet"
              className="rounded-lg w-full object-cover aspect-[16/9]"
              loading="lazy"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
              "Door-to-door pick-up & drop-off",
              "Premium Mercedes minivan transport",
              "Professional driver-guide",
              "Complimentary bottled Scottish water",
              "Flexible photo stops",
              "Personalised small-group attention"].
              map((item) =>
              <div key={item} className="flex items-center gap-3 bg-section-alt rounded-md p-4">
                  <CheckCircle size={18} className="text-primary shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              )}
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-6">
            Accommodation, entrance fees, ferries, trains, flights and meals are not included unless otherwise stated.
          </p>
        </div>
      </section>
    </Layout>);

};

export default CuratedTours;