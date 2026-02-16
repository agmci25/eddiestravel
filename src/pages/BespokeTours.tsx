import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { User, Calendar, Sparkles, Compass, Star, Wifi, Car, Droplets, UserCheck } from "lucide-react";
import parallaxImage from "@/assets/parallax-scotland.jpg";

const testimonials = [
  {
    name: "Mia Holesin-Soles",
    text: "I have never been to a travel tour agency with such amazing reviews and well-structured tours!",
    title: "Exceptional Services",
  },
  {
    name: "Jennifer Smith-Nelson",
    text: "We didn't have to worry about anything during our whole holiday! Already planning the next one.",
    title: "Unforgettable Adventures",
  },
  {
    name: "Jonathan Reed",
    text: "Our vacation was truly outstanding. We experienced new adventures and created the most amazing memories. It exceeded all our expectations!",
    title: "Unforgettable Trip",
  },
  {
    name: "Emma Thompson",
    text: "Our family explorations were special evenings filled with wonder. Such a memorable experience thanks to your knowledgeable team.",
    title: "Exquisite Expedition",
  },
];

const inclusions = [
  { icon: Wifi, label: "Onboard WiFi" },
  { icon: Car, label: "Premium Mercedes Minivan" },
  { icon: Droplets, label: "Bottled Scottish Water" },
  { icon: UserCheck, label: "Expert Tour Guide" },
];

const BespokeTours = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    partySize: "",
    tourLength: "",
    destinations: "",
    expectations: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section
        className="parallax-section py-20 sm:py-28"
        style={{ backgroundImage: `url(${parallaxImage})` }}
      >
        <div className="parallax-overlay" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-primary-foreground/80 font-body text-sm uppercase tracking-[0.3em] mb-4">
            bespoke travelling experiences
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
            <span className="text-primary">Bespoke</span> Tours
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Craft incomparable travel itineraries and make lifelong memories.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Unforgettable <span className="text-primary">Travel Experiences</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            When it's your first time visiting Scotland, it's hard to know exactly what to see, so knowing what you're interested in helps us help you! Do you like castles, whisky, history, culture, beautiful scenery? Contact us directly or check out our expertly curated tours for inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-accent text-accent-foreground font-semibold text-sm hover:bg-gold-hover transition-colors"
            >
              Contact Us Now
            </Link>
            <Link
              to="/curated-tours"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors"
            >
              Or Try Our Curated Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Why Private Tour */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Why Should You Pick a <span className="text-primary">Private Tour</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                icon: User,
                title: "It's All About You",
                desc: "A custom private tour with Eddie's Travel lets you create and plan your tour just how you want it. You will get your own guide and vehicle so you get to experience Scotland the way you want to.",
              },
              {
                icon: Calendar,
                title: "Easy Planning",
                desc: "You get a dedicated member of our team who will be with you throughout the whole planning stage to ensure you get your dream tour of Scotland.",
              },
              {
                icon: Sparkles,
                title: "We Take Care of the Details",
                desc: "We can do as much or as little as you like. Whether it's booking accommodation or attractions or even just ensuring there's a table waiting for you at dinner time — we're here to make sure everything is taken care of, so you can focus on experiencing Scotland at its best!",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <item.icon size={26} />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold mb-2">
              What <span className="text-primary">Guests</span> Are Saying
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground font-medium">4.75 Based on 1,400 Reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-card border border-border rounded-lg p-6 text-center"
              >
                <h4 className="font-heading font-semibold text-base mb-3">"{t.title}"</h4>
                <p className="text-sm text-muted-foreground italic mb-4 leading-relaxed">
                  {t.text}
                </p>
                <p className="text-xs font-medium text-foreground">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="section-padding bg-primary">
        <div className="container-narrow mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground text-center mb-10">
            All of Our Tours Complete With
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {inclusions.map((item) => (
              <div key={item.label} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-foreground/10 text-primary-foreground mb-3">
                  <item.icon size={26} />
                </div>
                <p className="text-primary-foreground font-medium text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Contact Us for Your <span className="text-primary">Bespoke Tour</span>
            </h2>
            <p className="text-muted-foreground">
              Tell us about your ideal Scottish experience and we'll get back to you with a personalised proposal.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 bg-card rounded-lg border border-border">
              <Compass size={48} className="mx-auto text-primary mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-muted-foreground">
                We've received your enquiry and will be in touch within 24 hours to start crafting your bespoke tour.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-lg border border-border p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Name *</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1.5">How many people are travelling?</label>
                  <input
                    type="text"
                    maxLength={20}
                    value={formData.partySize}
                    onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                    placeholder="e.g. 2 adults, 1 child"
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Preferred tour length (days)</label>
                  <input
                    type="text"
                    maxLength={50}
                    value={formData.tourLength}
                    onChange={(e) => setFormData({ ...formData, tourLength: e.target.value })}
                    placeholder="e.g. 3 days"
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">What are your preferred destinations?</label>
                <input
                  type="text"
                  maxLength={200}
                  value={formData.destinations}
                  onChange={(e) => setFormData({ ...formData, destinations: e.target.value })}
                  placeholder="e.g. Highlands, Isle of Skye, Edinburgh"
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">What are your expectations for this tour?</label>
                <textarea
                  rows={4}
                  maxLength={1000}
                  value={formData.expectations}
                  onChange={(e) => setFormData({ ...formData, expectations: e.target.value })}
                  placeholder="Tell us about your interests — castles, whisky, history, hiking, wildlife..."
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-md bg-accent text-accent-foreground font-semibold text-sm hover:bg-gold-hover transition-colors"
              >
                Send Enquiry
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Fancy Something Else */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold mb-2">
              Fancy <span className="text-primary">Something Else</span>?
            </h2>
            <p className="text-muted-foreground">We offer more than pre-planned trips</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <h3 className="font-heading text-lg font-semibold mb-3">Design Your Custom Adventure</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Eddie's Travel offers both curated itineraries and bespoke trips tailored to your preferences. Let us guide you through the amazing landscape of Scotland and design your own bespoke experience.
              </p>
              <Link to="/contact" className="text-sm font-medium text-primary hover:underline">
                Get Started →
              </Link>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <h3 className="font-heading text-lg font-semibold mb-3">Explore Curated Itineraries</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                We offer a variety of curated itineraries, including trips of different lengths and routes across Scotland's most iconic destinations.
              </p>
              <Link to="/curated-tours" className="text-sm font-medium text-primary hover:underline">
                View Tours →
              </Link>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <h3 className="font-heading text-lg font-semibold mb-3">Contact Us Directly</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Want to explore beyond Scotland? Have your own plans? Contact us directly, and we'll tailor a trip to your specific needs and budget.
              </p>
              <Link to="/contact" className="text-sm font-medium text-primary hover:underline">
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BespokeTours;
