import { useState } from "react";
import EventCard from "./EventCard";
import { Button } from "@/components/ui/button";

interface EventListProps {
    events: any[]; // Ideally strict types
    showFilters?: boolean;
}

const EventList = ({ events, showFilters = true }: EventListProps) => {
    const [filter, setFilter] = useState("all");

    const now = new Date();
    const filteredEvents = events.filter((event) => {
        const eventDate = new Date(event.date);
        if (filter === "upcoming") return eventDate >= now;
        if (filter === "past") return eventDate < now;
        return true;
    });

    return (
        <div className="space-y-12 animate-fade-in">
            {showFilters && (
                <div className="flex flex-wrap justify-center gap-4">
                    {[
                        { id: "all", label: "All Events" },
                        { id: "upcoming", label: "Upcoming" },
                        { id: "past", label: "Past Events" },
                    ].map((f) => (
                        <Button
                            key={f.id}
                            variant={filter === f.id ? "default" : "outline"}
                            onClick={() => setFilter(f.id)}
                            className={`rounded-full px-6 ${filter === f.id
                                    ? "bg-nss-blue text-white hover:bg-nss-blue/90"
                                    : "border-white/10 text-muted-foreground hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            {f.label}
                        </Button>
                    ))}
                </div>
            )}

            {filteredEvents.length === 0 ? (
                <div className="text-center py-20 glass-card rounded-3xl">
                    <p className="text-muted-foreground text-lg">No events found in this category.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredEvents.map((event) => (
                        <EventCard key={event._id} event={event} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default EventList;
