import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface EventProps {
    _id: string;
    slug: { current: string };
    title: string;
    date: string;
    venue?: string;
    coverImage?: any; // Sanity image type
    isFeatured?: boolean;
}

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        day: "2-digit",
        month: "short",
        year: "numeric",
    }).format(date);
};

const EventCard = ({ event }: { event: EventProps }) => {
    return (
        <Link to={`/events/${event.slug.current}`}>
            <motion.div
                whileHover={{ y: -10 }}
                className="glass-card rounded-3xl overflow-hidden h-full group relative"
            >
                <div className="relative aspect-video overflow-hidden">
                    <img
                        src={event.coverImage || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-nss-navy via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {event.isFeatured && (
                        <Badge className="absolute top-4 right-4 bg-nss-gold text-nss-navy hover:bg-nss-gold/90 border-0 px-3 py-1 text-xs font-bold uppercase tracking-wider animate-pulse-glow">
                            Featured
                        </Badge>
                    )}
                </div>

                <div className="p-6 relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-nss-blue to-nss-gold" />

                    <h3 className="font-heading text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-nss-blue transition-colors">
                        {event.title}
                    </h3>

                    <div className="space-y-3">
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-white transition-colors">
                            <div className="p-2 rounded-lg bg-white/5 mr-3 group-hover:bg-nss-blue/20 transition-colors">
                                <Calendar className="h-4 w-4 text-nss-blue" />
                            </div>
                            <time dateTime={event.date} className="font-medium">
                                {formatDate(event.date)}
                            </time>
                        </div>

                        {event.venue && (
                            <div className="flex items-center text-sm text-muted-foreground group-hover:text-white transition-colors">
                                <div className="p-2 rounded-lg bg-white/5 mr-3 group-hover:bg-nss-gold/20 transition-colors">
                                    <MapPin className="h-4 w-4 text-nss-gold" />
                                </div>
                                <span className="line-clamp-1 font-medium">{event.venue}</span>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default EventCard;
