
import { ArrowRight, Calendar, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-nss-navy">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-nss-blue/20 via-nss-navy to-nss-navy" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10" />

                {/* Animated Blobs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nss-blue/30 rounded-full blur-3xl animate-pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nss-gold/20 rounded-full blur-3xl animate-pulse-glow delay-1000" />
            </div>

            <div className="container relative z-10 px-6">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in">
                        <span className="w-2 h-2 rounded-full bg-nss-gold" />
                        <span className="text-sm font-medium text-nss-gold">Join the movement of change</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-heading text-white tracking-tight animate-fade-in [animation-delay:200ms]">
                        Serve with <span className="gradient-text">Pride</span> <br />
                        Lead with <span className="gradient-text">Confidence</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in [animation-delay:400ms]">
                        National Service Scheme (NSS) IET DAVV unit is dedicated to community service,
                        personality development, and nation-building through voluntary contribution.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in [animation-delay:600ms]">
                        <Button size="lg" className="bg-nss-blue hover:bg-nss-blue/90 text-white rounded-full px-8 h-12 text-lg shadow-lg shadow-nss-blue/25">
                            Join Us Today <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 h-12 text-lg">
                            View Events
                        </Button>
                    </div>

                    {/* Stats/Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-12 animate-fade-in [animation-delay:800ms]">
                        {[
                            { icon: Users, label: "Volunteers", value: "500+" },
                            { icon: Calendar, label: "Annual Events", value: "50+" },
                            { icon: Heart, label: "Lives Impacted", value: "10k+" },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-2 group hover:-translate-y-1 transition-transform"
                            >
                                <div className="w-12 h-12 rounded-full bg-nss-blue/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                    <stat.icon className="w-6 h-6 text-nss-blue" />
                                </div>
                                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                                <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
