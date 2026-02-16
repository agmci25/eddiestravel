import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import eddieImage from "@/assets/eddie-guide.jpg";
import { Award, MapPin, Heart, Car } from "lucide-react";

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding bg-section-alt">
      <div className="container-narrow mx-auto text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
          Meet Your <span className="text-primary">Guide</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          The man behind the wheel — and the stories.
        </p>
      </div>
    </section>

    {/* Eddie's Story */}
    <section className="section-padding">
      <div className="container-narrow mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={eddieImage}
            alt="Eddie, your Scottish tour guide, standing beside his premium Mercedes minivan"
            className="rounded-lg w-full object-cover aspect-[4/3]"
          />
        </div>
        <div>
          <h2 className="font-heading text-3xl font-bold mb-6">
            Hello, I'm <span className="text-primary">Eddie</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a licensed professional driver and Scotland expert who has spent a lifetime exploring every glen, loch and castle this beautiful country has to offer. What began as a personal passion for Scotland's history and landscapes has grown into a mission: sharing these wonders with travellers from around the world.
            </p>
            <p>
              My tours aren't about ticking boxes — they're about storytelling. Every stop has a tale, every road reveals a secret, and every guest becomes part of the journey. I combine safety, comfort and rich narrative to deliver experiences that linger long after you've returned home.
            </p>
            <p>
              Whether you're drawn to the mystery of Loch Ness, the wild beauty of Skye or the smoky warmth of an Islay distillery, I'll craft a day — or a week — around what moves you. That's a promise.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* What Makes Us Different */}
    <section className="section-padding bg-section-alt">
      <div className="container-narrow mx-auto">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">
          What Makes Eddie's Travel <span className="text-primary">Special</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Award, title: "Licensed Guide", desc: "Fully qualified professional driver-guide with years of experience." },
            { icon: MapPin, title: "Hidden Gems", desc: "Routes and stops that only a local could know — far beyond the tourist trail." },
            { icon: Heart, title: "Personal Touch", desc: "Flexible photo stops, rich historical narratives and cultural insights at every turn." },
            { icon: Car, title: "Premium Transport", desc: "Travel in a comfortable Mercedes V-Class or Vito Tourer with complimentary water." },
          ].map((item) => (
            <div key={item.title} className="text-center p-6">
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

    {/* CTA */}
    <section className="section-padding bg-primary">
      <div className="container-narrow mx-auto text-center">
        <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
          Let's Start Your Scottish Adventure
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
          I'd love to hear from you. Whether you have questions or you're ready to book, get in touch and let's plan something unforgettable.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-3 rounded-md bg-accent text-accent-foreground font-semibold text-sm hover:bg-gold-hover transition-colors"
        >
          Contact Eddie
        </Link>
      </div>
    </section>
  </Layout>
);

export default About;
