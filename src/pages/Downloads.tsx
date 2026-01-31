import { FileText, Download } from "lucide-react";

const Downloads = () => {
    const resources = [
        { title: "NSS Enrollment Form", type: "PDF", size: "2.4 MB" },
        { title: "Volunteer Guide 2024", type: "PDF", size: "1.2 MB" },
        { title: "Event Proposal Template", type: "DOCX", size: "0.5 MB" },
        { title: "Annual Report 2023", type: "PDF", size: "15.0 MB" },
    ];

    return (
        <div className="min-h-screen pt-20 pb-16">
            <section className="relative py-20 overflow-hidden">
                <div className="container relative z-10 px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 animate-fade-in">
                        Resources & <span className="gradient-text">Downloads</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
                        Access important documents, forms, and guides for volunteers and coordinators.
                    </p>
                </div>
            </section>

            <div className="container px-6 max-w-4xl mx-auto">
                <div className="glass-card rounded-3xl p-8">
                    <div className="grid gap-4">
                        {resources.map((resource, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-nss-blue/20 flex items-center justify-center text-nss-blue">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-nss-gold transition-colors">{resource.title}</h3>
                                        <p className="text-sm text-muted-foreground">{resource.type} • {resource.size}</p>
                                    </div>
                                </div>
                                <button className="p-3 rounded-full bg-white/5 hover:bg-nss-blue text-white transition-all">
                                    <Download className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Downloads;
