import { Link } from "react-router-dom";
import { Clock, Users } from "lucide-react";
import type { Tour } from "@/data/tours";

const TourCard = ({ tour }: { tour: Tour }) => (
  <div className="group bg-card rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow duration-300">
    <div className="relative overflow-hidden aspect-[4/3]">
      <img
        src={tour.image}
        alt={`${tour.title} — Scottish tour with Eddie's Travel`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
        {tour.type === "day" ? "Day Tour" : "Multi-Day"}
      </span>
    </div>
    <div className="p-5">
      <h3 className="font-heading text-lg font-semibold text-foreground mb-2 leading-tight">
        {tour.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {tour.shortDescription}
      </p>
      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <Clock size={14} />
          {tour.duration}
        </span>
        <span className="flex items-center gap-1">
          <Users size={14} />
          {tour.vehicle}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-heading text-lg font-bold text-primary">{tour.price}</span>
        <Link
          to={`/curated-tours#${tour.slug}`}
          className="text-sm font-medium text-accent hover:text-gold-hover transition-colors"
        >
          Learn more →
        </Link>
      </div>
    </div>
  </div>
);

export default TourCard;
