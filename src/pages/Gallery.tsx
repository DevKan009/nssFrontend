import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanityClient";

const galleryQuery = `*[_type == "galleryImage"] | order(takenAt desc){
    _id, caption, "image": image.asset->url, "event": event-> { _id, title, slug }, uploadedBy-> { name, _id, "avatar": avatar.asset->url }, takenAt
}`;

const Gallery = () => {
    const [images, setImages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState<any>(null);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const data = await client.fetch(galleryQuery);
                setImages(data);
            } catch (error) {
                console.error('Error fetching gallery:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchGallery();
    }, []);

    return (
        <div className="min-h-screen pt-20 pb-16">
            <section className="relative py-20 overflow-hidden">
                <div className="container relative z-10 px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 animate-fade-in">
                        Our <span className="gradient-text">Gallery</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
                        Moments captured from our events and activities. Each photo tells a story of service and dedication.
                    </p>
                </div>
            </section>

            <section className="container px-6">
                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nss-blue"></div>
                    </div>
                ) : images.length === 0 ? (
                    <div className="text-center py-20 glass-card rounded-3xl">
                        <p className="text-muted-foreground text-lg">No images available yet.</p>
                    </div>
                ) : (
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {images.map((item) => (
                            <div
                                key={item._id}
                                className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer"
                                onClick={() => setSelectedImage(item)}
                            >
                                <img
                                    src={item.image}
                                    alt={item.caption || "Gallery Image"}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <ZoomIn className="text-white w-10 h-10" />
                                </div>
                                {item.caption && (
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                        <p className="text-white font-medium">{item.caption}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="fixed top-6 right-6 text-white hover:bg-white/10 rounded-full z-[120] w-12 h-12"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </Button>
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.caption}
                            className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                        />
                        {selectedImage.caption && (
                            <p className="text-white text-center mt-4 text-xl font-medium">{selectedImage.caption}</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
