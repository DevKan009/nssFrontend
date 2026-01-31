import { useEffect, useState } from "react";
import { client } from "@/lib/sanityClient";
import { Quote } from "lucide-react";

// Fallback query if import fails, ensuring standalone functionality
const messagesQuery = `*[_type == "message"] | order(_createdAt desc){
    _id, name, year, photo{asset->url}, text
}`;

const Messages = () => {
    const [messages, setMessages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const data = await client.fetch(messagesQuery);
                setMessages(data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchMessages();
    }, []);

    return (
        <div className="min-h-screen pt-20 pb-16">
            <section className="relative py-20 overflow-hidden">
                <div className="container relative z-10 px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 animate-fade-in">
                        Volunteer <span className="gradient-text">Voices</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
                        Hear from our volunteers about their experiences and the impact NSS has made on their lives.
                    </p>
                </div>
            </section>

            <section className="container px-6">
                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nss-blue"></div>
                    </div>
                ) : messages.length === 0 ? (
                    <div className="text-center py-20 glass-card rounded-3xl">
                        <p className="text-muted-foreground text-lg">No testimonials available yet.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {messages.map((message) => (
                            <div key={message._id} className="glass-card p-8 rounded-3xl relative hover:-translate-y-2 transition-transform duration-300">
                                <Quote className="h-8 w-8 text-nss-gold mb-6 opacity-50" />
                                <p className="text-muted-foreground mb-8 text-lg leading-relaxed italic">
                                    "{message.text}"
                                </p>

                                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                    <div className="w-12 h-12 rounded-full bg-nss-navy flex items-center justify-center text-white font-bold border-2 border-white/10 overflow-hidden">
                                        {message.photo ? (
                                            <img src={message.photo.asset?.url || message.photo} alt={message.name} className="w-full h-full object-cover" />
                                        ) : (
                                            message.name.charAt(0)
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">{message.name}</h4>
                                        <p className="text-sm text-nss-blue">{message.year}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Messages;
