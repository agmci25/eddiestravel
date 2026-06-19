import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Clock, CheckCircle, Flag, Car } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { golfTours, golfTransferServices } from "@/data/golfTours";
const golfHero = "/images/golf-hero-st-andrews.webp";

const GolfTours = () => {
  return (
    <Layout>
      <SEO
        title="Scotland Golf Tours | St Andrews, Championship Links & Luxury Transfers"
        description="Private golf tours of Scotland — St Andrews pilgrimages, multi-day championship links experiences, whisky & golf packages, and VIP airport-to-course transfers in luxury Mercedes vehicles."
        canonical="https://eddiestravel.lovable.app/golf-tours"
      />

      {/* Hero */}
      <section className="relative bg-section-alt overflow-hidden min-h-[280px] sm:min-h-[340px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={golfHero}
            alt="The Old Course at St Andrews at sunset"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={1500}
            height={844}
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container-narrow mx-auto text-center py-20 sm:py-28 px-4">
          <p className="text-white/80 font-body text-sm uppercase tracking-[0.3em] mb-4">
            The Home of Golf
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-white">
            Scotland <span className="text-primary">Golf</span> Tours
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Private golf experiences across Scotland's legendary courses — paired with whisky, castles and luxury Mercedes transport.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <Tabs defaultValue="tours" className="w-full">
            <TabsList className="flex justify-center items-center p-1 bg-white border border-stone-200/80 rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] h-auto mb-10 w-auto self-center">
              <TabsTrigger value="tours" className="flex items-center gap-3 pl-1.5 pr-6 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase transition-all duration-300 cursor-pointer text-stone-500 hover:bg-stone-50 hover:text-stone-800 data-[state=active]:bg-[#477a9e] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#477a9e]/15 data-[state=active]:hover:bg-[#477a9e] group">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-100 text-stone-400 group-data-[state=active]:bg-white/10 group-data-[state=active]:text-white group-data-[state=active]:ring-1 group-data-[state=active]:ring-white/20 group-hover:text-stone-600 transition-colors">
                  <Flag size={18} strokeWidth={2.5} />
                </div>
                Golf Tours
              </TabsTrigger>
              <TabsTrigger value="transport" className="flex items-center gap-3 pl-1.5 pr-6 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase transition-all duration-300 cursor-pointer text-stone-500 hover:bg-stone-50 hover:text-stone-800 data-[state=active]:bg-[#477a9e] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#477a9e]/15 data-[state=active]:hover:bg-[#477a9e] group">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-100 text-stone-400 group-data-[state=active]:bg-white/10 group-data-[state=active]:text-white group-data-[state=active]:ring-1 group-data-[state=active]:ring-white/20 group-hover:text-stone-600 transition-colors">
                  <Car size={18} strokeWidth={2} />
                </div>
                VIP Transport
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tours" className="space-y-16">
              {golfTours.map((tour) => (
                <article
                  key={tour.slug}
                  id={tour.slug}
                  className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
                >
                  <img
                    src={tour.image}
                    alt={`${tour.title} — Scotland golf tour`}
                    className="w-full rounded-lg object-cover aspect-[4/3] bg-section-alt"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-2">{tour.title}</h3>
                    {tour.tagline && (
                      <p className="font-heading text-primary text-base mb-3">{tour.tagline}</p>
                    )}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Clock size={15} /> {tour.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-5 leading-relaxed">
                      {tour.description}
                    </p>
                    <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3">
                      Highlights
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {tour.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/contact?tour=${encodeURIComponent(tour.title)}`}
                      className="inline-flex items-center px-6 py-2.5 rounded-md bg-accent text-accent-foreground font-medium text-sm hover:bg-gold-hover transition-colors"
                    >
                      Enquire About This Tour
                    </Link>
                  </div>
                </article>
              ))}
              <p className="text-xs text-muted-foreground text-center pt-4">
                Green fees, accommodation and meals are not included unless otherwise stated. Itineraries are fully customisable.
              </p>
            </TabsContent>

            <TabsContent value="transport" className="space-y-16">
              <div className="max-w-2xl mx-auto text-center mb-4">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
                  VIP <span className="text-primary">Golf Transport</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Dedicated chauffeur services for golfers — from airport meet-and-greet to multi-course tournament logistics.
                </p>
              </div>

              {golfTransferServices.map((service) => (
                <article
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
                >
                  <img
                    src={service.image}
                    alt={`${service.title} — Scotland`}
                    className="w-full rounded-lg object-cover aspect-[4/3] bg-section-alt"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="font-heading text-primary text-base mb-4">{service.tagline}</p>
                    <p className="text-muted-foreground mb-5 leading-relaxed">
                      {service.description}
                    </p>
                    <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3">
                      Service Includes
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/contact?tour=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center px-6 py-2.5 rounded-md bg-accent text-accent-foreground font-medium text-sm hover:bg-gold-hover transition-colors"
                    >
                      Request a Quote
                    </Link>
                  </div>
                </article>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Plan Your <span className="text-primary">Golf Trip</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Every golf itinerary is built around your preferred courses, group size and schedule. Get in touch and we'll put together a tailored plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-accent text-accent-foreground font-semibold text-sm hover:bg-gold-hover transition-colors"
          >
            Contact Us for Pricing
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default GolfTours;