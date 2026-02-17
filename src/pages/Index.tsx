import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";
import heroImage from "@/assets/hero-scotland.webp";
import parallaxImage from "@/assets/parallax-scotland.jpg";
import vclassVehicle from "@/assets/vclass-vehicle.webp";
import { MapPin, Shield, Heart, Star } from "lucide-react";

const testimonials = [
  {
    name: "Alexander R.",
    text: "Eddie brought Scotland to life with his incredible stories and knowledge. A truly unforgettable experience — we felt like family, not tourists.",
    rating: 5,
  },
  {
    name: "Elisa F.",
    text: "From the moment Eddie picked us up, we knew this would be special. The hidden gems he showed us were breathtaking. Five stars is not enough!",
    rating: 5,
  },
  {
    name: "James & Sarah T.",
    text: "We've done guided tours all over Europe, but Eddie's was the best. Small group, flexible timing, and that Mercedes van is incredibly comfortable.",
    rating: 5,
  },
];

const Index = () => {
  const featuredTours = tours.slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Dramatic Scottish Highland landscape with misty mountains and serene loch"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.55)]" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
          <p className="text-primary-foreground/80 font-body text-sm uppercase tracking-[0.3em] mb-4">
            Curated Tours & Bespoke Travelling Experiences
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Discover Scotland <br />
            <span className="text-primary">Your Way</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg sm:text-xl mb-8 max-w-xl mx-auto font-light">
            Small-group tours led by a local expert. From the Highlands to the Hebrides, every journey is personal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/curated-tours"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-accent text-accent-foreground font-semibold text-sm hover:bg-gold-hover transition-colors"
            >
              Explore Tours
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md border border-primary-foreground/30 text-primary-foreground font-medium text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Eddie's */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Why Travel with <span className="text-primary">Eddie</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every tour is a personal journey — not a production line. Here's what sets Eddie's Travel apart from the rest.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: "Local Expertise", desc: "Born and raised in Scotland, Eddie shares stories and secrets you won't find in any guidebook." },
              { icon: Shield, title: "Small Groups", desc: "Maximum 6–8 guests per tour means personal attention, flexible stops and a relaxed pace." },
              { icon: Heart, title: "Bespoke Itineraries", desc: "From a single day to a fortnight, every itinerary is crafted around your interests and pace.", link: "/bespoke-tours" },
              { icon: Star, title: "Premium Comfort", desc: "Travel in a luxury Mercedes minivan with complimentary water and door-to-door pick-up." },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <item.icon size={26} />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  {item.link ? <Link to={item.link} className="hover:text-primary transition-colors">{item.title}</Link> : item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-primary">Curated</span> Tours
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hand-picked itineraries that showcase the very best of Scotland — from ancient castles to untamed coastlines.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/curated-tours"
              className="inline-flex items-center px-8 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Travel in Style */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img
            src={vclassVehicle}
            alt="Premium Mercedes V-Class used on Eddie's Travel tours"
            className="rounded-lg w-full object-cover aspect-[16/9]"
          />
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Travel in <span className="text-primary">Style</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every journey is made in a premium Mercedes V-Class or Vito Tourer — spacious, comfortable and immaculately maintained. With room for up to 8 guests, complimentary bottled water and door-to-door pick-up, you'll travel Scotland the way it deserves to be explored.
            </p>
            <Link
              to="/curated-tours"
              className="inline-flex items-center px-6 py-2.5 rounded-md bg-accent text-accent-foreground font-medium text-sm hover:bg-gold-hover transition-colors"
            >
              Explore Our Tours →
            </Link>
          </div>
        </div>
      </section>

      {/* Parallax Banner */}
      <section
        className="parallax-section py-28 sm:py-36"
        style={{ backgroundImage: `url(${parallaxImage})` }}
      >
        <div className="parallax-overlay" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="font-heading text-2xl sm:text-3xl lg:text-4xl italic text-primary-foreground font-medium leading-relaxed">
            "Small groups, stunning landscapes, and stories that will stay with you forever"
          </p>
          <div className="mt-8">
            <Link
              to="/bespoke-tours"
              className="inline-flex items-center px-8 py-3 rounded-md bg-accent text-accent-foreground font-semibold text-sm hover:bg-gold-hover transition-colors"
            >
              Design Your Own Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              What Our <span className="text-primary">Guests</span> Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-card border border-border rounded-lg p-8 text-center"
              >
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-6 leading-relaxed">
                  "{t.text}"
                </p>
                <p className="font-heading font-semibold text-foreground">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Explore Scotland?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Whether you have a single day or a fortnight to spare, Eddie will craft an itinerary tailored to your unique preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/curated-tours"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-accent text-accent-foreground font-semibold text-sm hover:bg-gold-hover transition-colors"
            >
              Browse Tours
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md border border-primary-foreground/30 text-primary-foreground font-medium text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
