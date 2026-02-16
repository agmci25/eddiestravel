import { useState } from "react";
import Layout from "@/components/Layout";
import contactHero from "@/assets/contact-hero.jpg";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="relative py-20 sm:py-28">
        <img
          src={contactHero}
          alt="Scottish castle ruins on a dramatic coastline"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="container-narrow mx-auto text-center relative z-10">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-white">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Ready to explore Scotland? Have a question about our tours? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">Contact Details</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Email</p>
                    <a href="mailto:info@eddiestravel.co.uk" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      info@eddiestravel.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Phone</p>
                    <p className="text-sm text-muted-foreground">Available on request</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Based in</p>
                    <p className="text-sm text-muted-foreground">Edinburgh, Scotland</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-primary-foreground mb-2">Quick Booking?</h3>
              <p className="text-sm text-primary-foreground/80 mb-4">
                For the fastest response, email us directly with your preferred dates and tour choice.
              </p>
              <a
                href="mailto:info@eddiestravel.co.uk?subject=Tour%20Booking%20Enquiry"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-accent text-accent-foreground text-sm font-medium hover:bg-gold-hover transition-colors"
              >
                <Send size={14} /> Email Eddie
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="text-center py-16 bg-section-alt rounded-lg border border-border">
                <Mail size={48} className="mx-auto text-primary mb-4" />
                <h3 className="font-heading text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. Eddie will reply within 24 hours.
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
                <div>
                  <label className="block text-sm font-medium mb-1.5">Subject</label>
                  <input
                    type="text"
                    maxLength={150}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Booking enquiry, Tour question"
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={6}
                    maxLength={2000}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your plans, questions or the tour you're interested in…"
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-md bg-accent text-accent-foreground font-semibold text-sm hover:bg-gold-hover transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
