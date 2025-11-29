import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
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
        <section className="py-28 md:py-40 bg-background relative overflow-hidden gradient-mesh">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/30"></div>
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6, type: "spring", bounce: 0.4 }}
                  className="inline-block px-6 py-3 glass-effect text-primary rounded-full text-base font-bold mb-8 border-2 border-primary/20 uppercase tracking-widest"
                >
                  ✨ OUR MISSION
                </motion.span>
                <h2 className="font-heading text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-primary via-nss-purple to-accent bg-clip-text text-transparent leading-tight">
                  Building Tomorrow's Leaders
                </h2>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-primary rounded-[2.5rem] opacity-10 blur-2xl"></div>
                <div className="relative glass-effect rounded-[2rem] p-10 md:p-16 shadow-2xl border-2 border-white/20">
                  <p className="text-xl md:text-2xl text-foreground leading-relaxed text-center mb-10 font-medium">
                    The National Service Scheme at IET DAVV is committed to developing students' 
                    personality through community service. We believe in fostering social responsibility, 
                    leadership, and creating positive change through meaningful action.
                  </p>
                  <div className="text-center">
                    <Button asChild size="lg" variant="default">
                      <Link to="/about">
                        Learn More About Us
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-28 md:py-40 bg-muted/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring", bounce: 0.4 }}
                className="inline-block px-6 py-3 glass-effect text-accent rounded-full text-base font-bold mb-8 border-2 border-accent/20 uppercase tracking-widest"
              >
                🎯 WHAT'S HAPPENING
              </motion.span>
              <h2 className="font-heading text-5xl md:text-7xl font-extrabold mb-8">Upcoming Events</h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
                Join us in making a difference in our community
              </p>
            </motion.div>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg font-bold">Loading events...</p>
              </div>
            ) : events.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg font-bold">No upcoming events at the moment.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {events.slice(0, 6).map((event, index) => (
                  <motion.div
                    key={event._id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <EventCard event={event} />
                  </motion.div>
                ))}
              </div>
            )}

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Button asChild variant="default" size="lg">
                <Link to="/events">
                  View All Events
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 md:py-48 relative overflow-hidden">
          <div className="absolute inset-0 gradient-hero"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,193,7,0.1),transparent_70%)]"></div>
          <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring", bounce: 0.4 }}
                className="inline-block px-6 py-3 glass-effect text-accent rounded-full text-base font-bold mb-10 uppercase tracking-widest"
              >
                🚀 JOIN THE MOVEMENT
              </motion.div>
              <h2 className="font-heading text-5xl md:text-8xl font-extrabold mb-8 text-white leading-[0.9] drop-shadow-2xl">
                Ready to Make<br/>a Difference?
              </h2>
              <p className="text-2xl md:text-3xl mb-16 text-white/95 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-lg">
                Join us in our mission to serve the community and create lasting positive impact. 
                Be part of something bigger than yourself.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" variant="accent" className="text-lg">
                  Join NSS Today
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-nss-slate text-lg backdrop-blur-sm bg-white/10">
                  <Link to="/events">Explore Events</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
