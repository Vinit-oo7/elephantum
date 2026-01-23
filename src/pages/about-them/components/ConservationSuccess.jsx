import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ConservationSuccess = () => {
    const [activeStory, setActiveStory] = useState(0);

    const successStories = [
        {
            id: 0,
            title: "Amboseli Elephant Research Project",
            location: "Kenya",
            year: "1972-Present",
            impact: "50+ years of continuous research",
            beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1cce58b21-1768148644740.png",
            beforeImageAlt: "Historical black and white photograph showing small elephant population in sparse Amboseli landscape with limited vegetation",
            afterImage: "https://images.unsplash.com/photo-1727252734589-147155b958be",
            afterImageAlt: "Modern thriving elephant herd of multiple generations walking through lush Amboseli wetlands with Mount Kilimanjaro backdrop",
            description: "The longest-running study of wild elephants has revolutionized our understanding of elephant intelligence, social structures, and conservation needs. This research demonstrated that elephants possess complex emotional lives and sophisticated social networks.",
            achievements: [
                "Documented 3,000+ individual elephants across five decades",
                "Revealed matriarchal leadership and multi-generational knowledge transfer",
                "Established baseline data for global elephant conservation strategies",
                "Protected critical migration corridors through community partnerships"],

            metrics: {
                population: "+180%",
                territory: "1,200 km²",
                families: "58 tracked"
            }
        },
        {
            id: 1,
            title: "Elephant Transit Home",
            location: "Sri Lanka",
            year: "1995-Present",
            impact: "200+ orphans rehabilitated",
            beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1be7063fa-1768148645023.png",
            beforeImageAlt: "Orphaned baby elephant calf alone in rescue facility showing signs of trauma and malnutrition with minimal care infrastructure",
            afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1f7de9ca2-1768148645003.png",
            afterImageAlt: "Healthy rehabilitated young elephants playing together in natural forest habitat with experienced caretakers monitoring nearby",
            description: "This pioneering facility rescues orphaned elephant calves and prepares them for reintegration into wild herds. The program demonstrates that with proper care and social learning, orphaned elephants can develop normal intelligence and behavior patterns.",
            achievements: [
                "Successfully released 180+ elephants back to protected wilderness",
                "Developed specialized milk formula matching maternal nutrition",
                "Created surrogate family structures for psychological development",
                "Trained local communities in human-elephant coexistence strategies"],

            metrics: {
                survival: "92%",
                released: "180+",
                duration: "4-6 years"
            }
        },
        {
            id: 2,
            title: "Elephant Listening Project",
            location: "Central African Republic",
            year: "2000-Present",
            impact: "Acoustic monitoring revolution",
            beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_18dd16daf-1768148642985.png",
            beforeImageAlt: "Dense Central African rainforest with limited visibility showing challenges of traditional elephant population monitoring methods",
            afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1833f7ac7-1768148643508.png",
            afterImageAlt: "Modern acoustic monitoring equipment installed in forest canopy capturing elephant infrasonic communication across vast distances",
            description: "Revolutionary acoustic technology revealed that elephants communicate across miles using infrasonic calls below human hearing range. This discovery transformed our understanding of elephant intelligence and enabled non-invasive population monitoring.",
            achievements: [
                "Mapped elephant communication networks spanning 100+ kilometers",
                "Identified distinct vocal signatures for individual recognition",
                "Detected poaching events through distress call analysis",
                "Established 24/7 monitoring without human presence disturbance"],

            metrics: {
                range: "10 km radius",
                calls: "70+ types",
                accuracy: "95%"
            }
        }];


    return (
        <section className="py-12 md:py-16 lg:py-20 bg-card">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
                        Conservation <span className="text-primary">Success Stories</span>
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Groundbreaking research and rehabilitation programs that have transformed elephant conservation and deepened our understanding of their intelligence
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10 lg:mb-12">
                    {successStories?.map((story, index) =>
                        <button
                            key={story?.id}
                            onClick={() => setActiveStory(index)}
                            className={`px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${activeStory === index ?
                                'bg-primary text-primary-foreground lime-glow' :
                                'bg-background text-muted-foreground border border-border hover:border-primary'}`
                            }>

                            {story?.location}
                        </button>
                    )}
                </div>

                <div className="bg-background rounded-lg overflow-hidden border border-border">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        <div className="relative">
                            <div className="absolute top-4 left-4 md:top-5 md:left-5 lg:top-6 lg:left-6 z-10 bg-background/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-border">
                                <span className="text-xs md:text-sm font-medium text-muted-foreground">Before</span>
                            </div>
                            <div className="h-64 md:h-80 lg:h-96 overflow-hidden">
                                <Image
                                    src={successStories?.[activeStory]?.beforeImage}
                                    alt={successStories?.[activeStory]?.beforeImageAlt}
                                    className="w-full h-full object-cover" />

                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute top-4 left-4 md:top-5 md:left-5 lg:top-6 lg:left-6 z-10 bg-primary/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg">
                                <span className="text-xs md:text-sm font-medium text-primary-foreground">After</span>
                            </div>
                            <div className="h-64 md:h-80 lg:h-96 overflow-hidden">
                                <Image
                                    src={successStories?.[activeStory]?.afterImage}
                                    alt={successStories?.[activeStory]?.afterImageAlt}
                                    className="w-full h-full object-cover" />

                            </div>
                        </div>
                    </div>

                    <div className="p-6 md:p-7 lg:p-8">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5 md:mb-6">
                            <div>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2">
                                    {successStories?.[activeStory]?.title}
                                </h3>
                                <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1.5 md:gap-2">
                                        <Icon name="MapPin" size={16} color="var(--color-primary)" />
                                        <span>{successStories?.[activeStory]?.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 md:gap-2">
                                        <Icon name="Calendar" size={16} color="var(--color-primary)" />
                                        <span>{successStories?.[activeStory]?.year}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 md:gap-2">
                                        <Icon name="TrendingUp" size={16} color="var(--color-primary)" />
                                        <span>{successStories?.[activeStory]?.impact}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3 md:gap-4">
                                {Object.entries(successStories?.[activeStory]?.metrics)?.map(([key, value]) =>
                                    <div key={key} className="text-center">
                                        <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary">{value}</div>
                                        <div className="text-xs md:text-sm text-muted-foreground capitalize">{key}</div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5 md:mb-6">
                            {successStories?.[activeStory]?.description}
                        </p>

                        <h4 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4">
                            Key Achievements
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            {successStories?.[activeStory]?.achievements?.map((achievement, index) =>
                                <div key={index} className="flex items-start gap-2 md:gap-3 bg-muted/50 rounded-lg p-3 md:p-4">
                                    <Icon name="CheckCircle2" size={18} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
                                    <span className="text-xs md:text-sm text-foreground">{achievement}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>);

};

export default ConservationSuccess;