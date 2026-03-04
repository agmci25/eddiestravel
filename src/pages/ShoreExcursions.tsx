import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Anchor, MapPin, Car, Droplets, UserCheck, Users } from "lucide-react";
import shoreHero from "@/assets/shore-excursions-hero.jpg";
import minibus1 from "@/assets/minibus-1.jpg";
import minibus2 from "@/assets/minibus-2.jpg";
import minibus3 from "@/assets/minibus-3.jpg";
import minibus4 from "@/assets/minibus-4.jpg";
import minibus5 from "@/assets/minibus-5.jpg";

const minibusImages = [
  { src: minibus1, alt: "16-seat Mercedes minibus at a Scottish loch" },
  { src: minibus2, alt: "16-seat Mercedes minibus in Glencoe" },
  { src: minibus3, alt: "16-seat Mercedes minibus in the Scottish Highlands" },
  { src: minibus4, alt: "16-seat Mercedes minibus side view" },
  { src: minibus5, alt: "Mercedes minibus and V-Class parked together" },
];

const ports = [
  {
    name: "Edinburgh",
    desc: "Explore the historic Royal Mile, Edinburgh Castle, Arthur's Seat, or venture out to the Scottish Highlands and beyond.",
  },
  {
    name: "Glasgow",
    desc: "Discover Loch Lomond, the Trossachs, Stirling Castle, or head north into the spectacular Highlands.",
  },
  {
    name: "Dundee",
    desc: "Visit the stunning East Coast, St Andrews, Glamis Castle, or journey into the heart of Perthshire.",
  },
];

const inclusions = [
  { icon: MapPin, label: "Port Pick-up & Drop-off" },
  { icon: Car, label: "Premium Mercedes Minivan" },
  { icon: Droplets, label: "Bottled Scottish Water" },
  { icon: UserCheck, label: "Professional Driver-Guide" },
];

const ShoreExcursions = () => {
  return (
    <Layout>
      <SEO
        title="Shore Excursions Scotland | Cruise Port Tours from Edinburgh, Glasgow & Dundee"
        description="Shore excursions from Edinburgh, Glasgow and Dundee cruise ports. Private small-group tours with professional driver-guide and luxury Mercedes transport. Contact us for pricing."
        canonical="https://eddiestravel.lovable.app/shore-excursions"
      />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 min-h-[280px] sm:min-h-[340px] flex items-center">
        <img
          src={shoreHero}
          alt="Colourful Scottish waterfront harbour town"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="container-narrow mx-auto text-center relative z-10">
          <p className="text-white/80 font-body text-sm uppercase tracking-[0.3em] mb-4">
            Private Tours from Your Cruise Port
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="text-primary">Shore</span> Excursions
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Step off the ship and into the real Scotland — private tours from Edinburgh, Glasgow and Dundee.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Make the Most of Your <span className="text-primary">Port Day</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If your cruise ship is docking in Edinburgh, Glasgow or Dundee, let us show you the best of Scotland. We'll collect you right at the port and have you back in plenty of time for departure — no stress, no rushing, just an unforgettable day exploring.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every shore excursion is tailored to your interests and schedule. Whether you want to explore castles, taste whisky, or take in breathtaking Highland scenery, we'll craft the perfect itinerary for your time ashore.
          </p>
        </div>
      </section>

      {/* Ports */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Our <span className="text-primary">Port</span> Locations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer shore excursions from three of Scotland's most popular cruise ports.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {ports.map((port) => (
              <div
                key={port.name}
                className="text-center p-8 bg-card rounded-lg border border-border"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <Anchor size={26} />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {port.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {port.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="section-padding bg-primary">
        <div className="container-narrow mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground text-center mb-10">
            Every Shore Excursion Includes
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {inclusions.map((item) => (
              <div key={item.label} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-foreground/10 text-primary-foreground mb-3">
                  <item.icon size={26} />
                </div>
                <p className="text-primary-foreground font-medium text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Larger Groups */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
              <Users size={26} />
            </div>
            <h2 className="font-heading text-3xl font-bold mb-4">
              Need a <span className="text-primary">Larger Vehicle</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              For groups of 7–16 passengers, we also have access to a premium 16-seat Mercedes minibus — perfect for larger families, corporate groups or friends travelling together. Please contact us for a tailored quote.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {minibusImages.map((img, idx) => (
              <div
                key={idx}
                className={`overflow-hidden rounded-lg ${idx === 4 ? "col-span-2 sm:col-span-1" : ""}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-accent text-accent-foreground font-semibold text-sm hover:bg-gold-hover transition-colors"
            >
              Get a Quote for Larger Groups
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Interested? <span className="text-primary">Get in Touch</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Shore excursion pricing depends on your port, group size and chosen itinerary. Please contact us for a personalised quote — we'd love to help you plan an unforgettable day in Scotland.
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

export default ShoreExcursions;
