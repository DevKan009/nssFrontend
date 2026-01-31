import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanityClient";
import { queries } from "@/lib/queries";

const EventDetail = () => {
    const { slug } = useParams();
    const [event, setEvent] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const data = await client.fetch(queries.eventBySlug, { slug });
                setEvent(data);
            } catch (error) {
                console.error('Error fetching event:', error);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchEvent();
        }
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nss-blue"></div>
            </div>
        );
    }

    if (!event) {
        return (
            <div className="min-h-screen pt-20 flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Event Not Found</h2>
                <Button asChild variant="outline">
                    <Link to="/events">Back to Events</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20 pb-16">
            {/* Hero Image */}
            <div className="relative h-[50vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-nss-navy via-nss-navy/50 to-transparent z-10" />
                <img
                    src={event.coverImage}
                    alt={event.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 container px-6 pb-12">
                    <div className="bg-black/60 backdrop-blur-md p-6 rounded-3xl inline-block max-w-4xl">
                        <Link to="/events" className="inline-flex items-center text-white hover:text-nss-blue mb-4 transition-colors font-medium">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Events
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4 leading-tight">{event.title}</h1>
                        <div className="flex flex-wrap gap-6 text-white/90">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-nss-gold" />
                                <span className="font-medium">{new Date(event.date).toLocaleDateString()}</span>
                            </div>
                            {event.venue && (
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-nss-gold" />
                                    <span className="font-medium">{event.venue}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-6 py-12">
                <div className="max-w-4xl mx-auto glass-card p-8 rounded-3xl">
                    <h2 className="text-2xl font-bold text-white mb-6">About the Event</h2>
                    {/* Handle rich text or string description */}
                    <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                        {Array.isArray(event.description) ? (
                            event.description.map((block: any, index: number) => {
                                if (block._type === 'block') {
                                    const text = block.children?.map((child: any) => child.text).join('') || '';
                                    return <p key={index}>{text}</p>;
                                }
                                return null;
                            })
                        ) : (
                            <p>{typeof event.description === 'string' ? event.description : 'No description available.'}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;
