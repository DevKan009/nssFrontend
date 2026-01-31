import { useEffect, useState } from "react";
import { client } from "@/lib/sanityClient";
// import { queries } from "@/lib/queries"; // queries imported dynamically or defined here if import fails
import EventList from "@/components/EventList";

const allEventsQuery = `*[_type == "event"] | order(date desc){
    _id, title, slug{current}, date, venue, isFeatured, "coverImage": coverImage.asset->url
}`;

const Events = () => {
    const [events, setEvents] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const data = await client.fetch(allEventsQuery);
                setEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="min-h-screen pt-20 pb-16">
            <section className="relative py-20 overflow-hidden">
                <div className="container relative z-10 px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 animate-fade-in">
                        Our <span className="gradient-text">Events</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
                        Explore our initiatives and activities aimed at creating positive social change
                        and community development.
                    </p>
                </div>
            </section>

            <section className="container px-6">
                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nss-blue"></div>
                    </div>
                ) : (
                    <EventList events={events} showFilters={true} />
                )}
            </section>
        </div>
    );
};

export default Events;
