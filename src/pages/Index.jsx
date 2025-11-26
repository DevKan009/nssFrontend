import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { client } from '@/lib/sanityClient';
import { queries } from '@/lib/queries';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import StatsBar from '@/components/StatsBar';
import EventCard from '@/components/EventCard';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsData = await client.fetch(queries.upcomingEvents);
        setEvents(eventsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSlider />
        <StatsBar />

        {/* Mission Section */}
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background"></div>
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6 border border-primary/20">
                  OUR MISSION
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Building Tomorrow's Leaders
                </h2>
              </div>
              <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border/50">
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-center mb-8">
                  The National Service Scheme at IET DAVV is committed to developing students' 
                  personality through community service. We believe in fostering social responsibility, 
                  leadership, and creating positive change through meaningful action.
                </p>
                <div className="text-center">
                  <Button asChild size="lg" variant="default">
                    <Link to="/about">
                      Learn More About Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 border border-accent/20">
                WHAT'S HAPPENING
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join us in making a difference in our community
              </p>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading events...</p>
              </div>
            ) : events.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No upcoming events at the moment.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.slice(0, 6).map((event) => (
                  <EventCard key={event._id} event={event} />
                ))}
              </div>
            )}

            <div className="text-center mt-12">
              <Button asChild variant="default" size="lg">
                <Link to="/events">
                  View All Events
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 gradient-hero"></div>
          <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Join us in our mission to serve the community and create lasting positive impact. 
              Be part of something bigger than yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent">
                Join NSS Today
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-nss-slate">
                <Link to="/events">Explore Events</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
