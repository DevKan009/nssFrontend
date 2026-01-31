import { Target, Users, Heart, Award } from "lucide-react";

const About = () => {
    const values = [
        {
            icon: Target,
            title: "Our Vision",
            description:
                "To develop students into responsible citizens through community service and social development activities.",
        },
        {
            icon: Users,
            title: "Community First",
            description:
                "We believe in putting community needs first and working together to create lasting positive impact.",
        },
        {
            icon: Heart,
            title: "Service with Heart",
            description:
                "Our work is driven by genuine care and commitment to improving lives and building better communities.",
        },
        {
            icon: Award,
            title: "Excellence",
            description:
                "We strive for excellence in every initiative, ensuring quality impact and sustainable change.",
        },
    ];

    return (
        <div className="min-h-screen pt-20 pb-16">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-nss-navy/50 pointer-events-none" />
                <div className="container relative z-10 px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 animate-fade-in">
                        About <span className="gradient-text">NSS IET DAVV</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:200ms]">
                        The National Service Scheme (NSS) at IET DAVV is more than just an organization; it's a movement.
                        Since our inception, we have been dedicated to fostering social responsibility, leadership,
                        and empathy among students through impactful community service.
                    </p>
                </div>
            </section>

            {/* History Section */}
            <section className="py-16">
                <div className="container px-6">
                    <div className="glass-card p-8 md:p-12 rounded-3xl max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold font-heading text-white mb-8 text-center">
                            Our Journey
                        </h2>
                        <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                            <p>
                                Launched in 1969, the National Service Scheme formed the backbone of youth volunteering in India.
                                At IET DAVV, we embraced this mission with open arms, integrating it into the very fabric of our student life.
                            </p>
                            <p>
                                From humble beginnings, our unit has grown into a vibrant force of change. We have organized countless
                                blood donation camps, tree plantation drives, rural development projects, and educational awareness campaigns.
                                Each initiative is a stepping stone towards a better society.
                            </p>
                            <p>
                                Today, we stand proud as a beacon of hope and action, proving that youth are not just the leaders of tomorrow,
                                but the change-makers of today.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-16">
                <div className="container px-6">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-12 text-center">
                        Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index}
                                    className="glass-card p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-nss-blue/10 flex items-center justify-center mb-6 group-hover:bg-nss-blue/20 transition-colors">
                                        <Icon className="h-6 w-6 text-nss-blue group-hover:scale-110 transition-transform" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 font-heading">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Motto Section */}
            <section className="py-20 mt-12 bg-gradient-to-r from-nss-blue/20 to-nss-navy/20 border-y border-white/5">
                <div className="container px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 uppercase tracking-wider opacity-90">
                        "Not Me, But You"
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        This simple motto encapsulates the essence of democratic living and upholds the need for selfless service.
                        It teaches us to appreciate the other person's point of view and to show consideration for fellow human beings.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
