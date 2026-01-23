import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const DocumentarySection = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const documentaries = [
        {
            id: 1,
            title: "The Elephant Whisperers",
            duration: "41 min",
            year: "2022",
            thumbnail: "https://images.unsplash.com/photo-1622471712826-3d1eefad5435",
            thumbnailAlt: "Documentary thumbnail showing intimate moment between elephant caretaker and baby elephant in lush South Indian sanctuary landscape",
            description: "Academy Award-winning documentary following an indigenous couple caring for an orphaned elephant calf in South India, revealing the profound emotional bonds between humans and elephants.",
            topics: ["Emotional Intelligence", "Conservation", "Human-Elephant Bond", "Indigenous Wisdom"]
        },
        {
            id: 2,
            title: "Secrets of the Elephants",
            duration: "4 episodes",
            year: "2023",
            thumbnail: "https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7",
            thumbnailAlt: "National Geographic documentary series thumbnail featuring elephant herd crossing river in dramatic African wilderness setting",
            description: "National Geographic series exploring elephant intelligence across four continents, showcasing their problem-solving abilities, social structures, and adaptation strategies in changing environments.",
            topics: ["Cognitive Science", "Social Behavior", "Adaptation", "Global Conservation"]
        },
        {
            id: 3,
            title: "Echo: An Elephant to Remember",
            duration: "52 min",
            year: "2010",
            thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_19e8dc8a3-1768148645489.png",
            thumbnailAlt: "Documentary thumbnail of legendary matriarch Echo leading her family through Amboseli National Park with Mount Kilimanjaro background",
            description: "Intimate portrait of Echo, the legendary Amboseli matriarch, documenting her wisdom, leadership, and the multi-generational knowledge she passed to her family over five decades.",
            topics: ["Matriarchal Leadership", "Family Dynamics", "Long-term Research", "Wildlife Legacy"]
        }];


    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
                        Documentary <span className="text-primary">Insights</span>
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Award-winning films that capture the remarkable intelligence and emotional depth of elephants through years of intimate observation
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8 mb-8 md:mb-10 lg:mb-12">
                    {documentaries?.map((doc) =>
                        <div
                            key={doc?.id}
                            className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 lime-glow-hover">

                            <div className="relative h-48 md:h-52 lg:h-56 overflow-hidden">
                                <Image
                                    src={doc?.thumbnail}
                                    alt={doc?.thumbnailAlt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                                <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-background/90 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded-lg">
                                    <span className="text-xs md:text-sm font-medium text-foreground">{doc?.duration}</span>
                                </div>
                            </div>

                            <div className="p-5 md:p-6">
                                <div className="flex items-center gap-2 mb-2 md:mb-3">
                                    <Icon name="Award" size={16} color="var(--color-primary)" />
                                    <span className="text-xs md:text-sm text-primary font-medium">{doc?.year}</span>
                                </div>

                                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 line-clamp-2">
                                    {doc?.title}
                                </h3>

                                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 md:mb-5 line-clamp-3">
                                    {doc?.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4 md:mb-5">
                                    {doc?.topics?.map((topic, index) =>
                                        <span
                                            key={index}
                                            className="text-xs px-2 py-1 md:px-2.5 md:py-1 rounded-full bg-primary/10 text-primary border border-primary/20">

                                            {topic}
                                        </span>
                                    )}
                                </div>

                                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 md:py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-300 border border-primary/20">
                                    <Icon name="Play" size={18} />
                                    <span className="text-sm md:text-base font-medium">Watch Trailer</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="bg-card rounded-lg overflow-hidden border border-border">
                    <div className="relative aspect-video bg-background">
                        {!isPlaying ?
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image
                                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1320aefc7-1764872051773.png"
                                    alt="Featured documentary preview showing elephant family interaction in natural habitat with cinematic lighting and composition"
                                    className="w-full h-full object-cover" />

                                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
                                <button
                                    onClick={handlePlayClick}
                                    className="relative z-10 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-all duration-300 lime-glow breathing-cta"
                                    aria-label="Play featured documentary">

                                    <Icon name="Play" size={32} color="var(--color-primary-foreground)" className="ml-1 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                                </button>
                            </div> :

                            <div className="absolute inset-0 flex items-center justify-center bg-background">
                                <div className="text-center">
                                    <Icon name="Film" size={48} color="var(--color-primary)" className="mx-auto mb-4 md:w-14 md:h-14 lg:w-16 lg:h-16" />
                                    <p className="text-sm md:text-base text-muted-foreground">Video player would load here</p>
                                    <p className="text-xs md:text-sm text-muted-foreground mt-2">Documentary streaming integration</p>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="p-6 md:p-7 lg:p-8">
                        <div className="flex items-start justify-between gap-4 mb-4 md:mb-5">
                            <div>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2">
                                    Featured: Understanding Elephant Intelligence
                                </h3>
                                <p className="text-sm md:text-base text-muted-foreground">
                                    A comprehensive exploration of cognitive research and behavioral studies
                                </p>
                            </div>
                            <div className="flex gap-2 md:gap-3">
                                <button className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors" aria-label="Share video">
                                    <Icon name="Share2" size={18} color="var(--color-muted-foreground)" className="md:w-5 md:h-5" />
                                </button>
                                <button className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors" aria-label="Add to watchlist">
                                    <Icon name="Bookmark" size={18} color="var(--color-muted-foreground)" className="md:w-5 md:h-5" />
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Icon name="Clock" size={16} color="var(--color-primary)" />
                                <span>58 minutes</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon name="Calendar" size={16} color="var(--color-primary)" />
                                <span>2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon name="Award" size={16} color="var(--color-primary)" />
                                <span>Wildlife Film Festival Winner</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon name="Eye" size={16} color="var(--color-primary)" />
                                <span>2.4M views</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);

};

export default DocumentarySection;