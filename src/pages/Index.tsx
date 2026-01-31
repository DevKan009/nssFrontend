import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Heart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import EventList from "@/components/EventList";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanityClient";

const upcomingEventsQuery = `*[_type == "event" && date >= now()] | order(date asc)[0...3]{
    _id, title, slug{current}, date, venue, isFeatured, "coverImage": coverImage.asset->url
}`;

const Index = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await client.fetch(upcomingEventsQuery);
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
    <div className="min-h-screen bg-nss-navy text-white overflow-hidden">
      <Hero />

      {/* Stats / Quick Info */}
      <section className="relative z-20 -mt-20 container px-6 pointer-events-none">
        <div className="glass-card p-8 rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center pointer-events-auto shadow-2xl shadow-black/50 border-white/5">
          {[
            { label: "Established", value: "2009" },
            { label: "Volunteers", value: "500+" },
            { label: "Awards", value: "15+" },
            { label: "Hours Served", value: "10k+" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</span>
              <span className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 container px-6 relative">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-nss-blue/10 rounded-full blur-3xl -z-10" />
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-nss-blue/20 text-nss-blue text-sm font-bold uppercase tracking-wider mb-6 border border-nss-blue/20">Our Mission</span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Building Tomorrow's <span className="gradient-text">Leaders</span></h2>
          <p className="text-lg text-muted-foreground">
            We empower students to become responsible citizens through active community service.
            Fostering leadership, empathy, and positive social change.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Heart, title: "Community Service", desc: "Selfless dedication to society welfare.", color: "text-nss-blue" },
            { icon: Sparkles, title: "Leadership", desc: "Developing skills to lead with purpose.", color: "text-nss-gold" },
            { icon: Calendar, title: "Active Participation", desc: "Engaging in impactful regular events.", color: "text-emerald-400" },
          ].map((item, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group">
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-black/20 relative">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-nss-gold font-bold tracking-wider uppercase mb-2 block">Events</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">What's Happening</h2>
            </div>
            <Button asChild variant="outline" className="rounded-full border-white/20 hover:bg-white/10 text-white">
              <Link to="/events">View All Events <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>

          {loading ? (
            <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nss-blue"></div></div>
          ) : events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {events.map(event => (
                <div key={event._id} className="glass-card rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  {/* Simplified card for homepage */}
                  <div className="h-48 overflow-hidden relative">
                    <img src={event.coverImage || '/placeholder.svg'} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase border border-white/20">
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-1">{event.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-6">
                      <Calendar className="w-4 h-4 mr-2 text-nss-blue" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <Link to={`/events/${event.slug.current}`} className="text-nss-gold font-bold text-sm uppercase tracking-wider hover:underline">
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 glass-card rounded-3xl">
              <p className="text-muted-foreground">No upcoming events found.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section - "Make an Impact" */}
      <section className="py-32 relative overflow-hidden">
        {/* Colorful background gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-nss-blue/20 to-nss-gold/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-nss-blue/10 via-nss-navy to-nss-navy opacity-80" />

        <div className="container relative z-10 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black font-heading tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 animate-fade-in">
              Make an Impact. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nss-blue to-nss-gold">Join the Movement.</span>
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Be part of a community that believes in the power of service.
              Your journey to changing the world starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-nss-blue hover:bg-nss-blue/90 text-white shadow-xl shadow-nss-blue/20 hover:-translate-y-1 transition-transform duration-300 w-full sm:w-auto">
                Become a Volunteer
              </Button>
              <Button asChild size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-white/20 hover:bg-white/10 text-white backdrop-blur-sm w-full sm:w-auto">
                <Link to="/events">Explore Activities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
