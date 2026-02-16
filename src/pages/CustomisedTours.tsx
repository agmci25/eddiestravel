import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { User, Calendar, Compass, Sparkles } from "lucide-react";
import parallaxImage from "@/assets/parallax-scotland.jpg";

const CustomisedTours = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    partySize: "",
    preferredDates: "",
    interests: "",
    message: "",
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
        className="parallax-section py-28 sm:py-36"
        style={{ backgroundImage: `url(${parallaxImage})` }}
      >
        <div className="parallax-overlay" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
            <span className="text-primary">Customised</span> Tours
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Don't want to follow the crowd? Share your interests and we'll craft a bespoke Scottish itinerary just for you.
          </p>
        </div>
      </section>

      {/* Why Bespoke */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Why Go <span className="text-primary">Bespoke</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: User, title: "It's All About You", desc: "Choose your destinations, pace and experiences. Your tour, your rules." },
              { icon: Calendar, title: "Easy Planning", desc: "A dedicated team member assists with every detail of your itinerary design." },
              { icon: Sparkles, title: "We Handle the Details", desc: "Accommodation, attraction bookings and dining reservations — we'll arrange it all." },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 bg-section-alt rounded-lg">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <item.icon size={26} />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
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
              Start Planning Your <span className="text-primary">Adventure</span>
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
                  <label className="block text-sm font-medium mb-1.5">Full Name *</label>
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
                  <label className="block text-sm font-medium mb-1.5">Party Size</label>
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
                  <label className="block text-sm font-medium mb-1.5">Preferred Dates</label>
                  <input
                    type="text"
                    maxLength={50}
                    value={formData.preferredDates}
                    onChange={(e) => setFormData({ ...formData, preferredDates: e.target.value })}
                    placeholder="e.g. June 2026, flexible"
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">What interests you most?</label>
                <input
                  type="text"
                  maxLength={200}
                  value={formData.interests}
                  onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                  placeholder="e.g. castles, whisky, hiking, history, wildlife"
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Anything else we should know?</label>
                <textarea
                  rows={4}
                  maxLength={1000}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
    </Layout>
  );
};

export default CustomisedTours;
