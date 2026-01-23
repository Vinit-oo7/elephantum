import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ExperienceTypes = () => {
    const experiences = [
        {
            id: 1,
            icon: "Sunrise",
            title: "Dawn Encounters",
            description: "Witness elephants in their most active hours as they forage and socialize in the cool morning mist",
            image: "https://images.unsplash.com/photo-1669392623495-90d8acfdd027",
            imageAlt: "Elephant family walking through misty forest at sunrise with golden light rays piercing through trees and morning fog",
            duration: "3-4 hours",
            difficulty: "Easy",
            bestSeason: "Year-round"
        },
        {
            id: 2,
            icon: "Camera",
            title: "Photography Expeditions",
            description: "Capture stunning moments with professional guidance and access to prime viewing locations",
            image: "https://images.unsplash.com/photo-1589016025017-a2080e95326f",
            imageAlt: "Professional photographer with telephoto lens capturing close-up shot of elephant in natural habitat with dramatic lighting",
            duration: "Full day",
            difficulty: "Moderate",
            bestSeason: "Oct-Mar"
        },
        {
            id: 3,
            icon: "Heart",
            title: "Conservation Immersion",
            description: "Work alongside sanctuary staff to understand elephant care, behavior research, and habitat protection",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1374be66c-1764851173928.png",
            imageAlt: "Wildlife conservationist in khaki uniform gently examining elephant's trunk while taking notes in tropical sanctuary setting",
            duration: "2-3 days",
            difficulty: "Moderate",
            bestSeason: "Year-round"
        },
        {
            id: 4,
            icon: "Users",
            title: "Family Adventures",
            description: "Educational experiences designed for all ages with interactive learning about elephant intelligence",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1faf4d94e-1768148644055.png",
            imageAlt: "Multi-generational family group of five people observing elephant herd from safe distance in open grassland with guide",
            duration: "Half day",
            difficulty: "Easy",
            bestSeason: "Year-round"
        },
        {
            id: 5,
            icon: "Moon",
            title: "Twilight Tracking",
            description: "Follow elephant herds during their evening routines with expert naturalist guides",
            image: "https://images.unsplash.com/photo-1582765805106-0ff2380b9596",
            imageAlt: "Silhouette of elephant herd against vibrant orange and purple sunset sky walking across savanna grassland",
            duration: "3-4 hours",
            difficulty: "Moderate",
            bestSeason: "Apr-Sep"
        },
        {
            id: 6,
            icon: "BookOpen",
            title: "Educational Retreats",
            description: "Multi-day programs combining field observation with lectures on elephant cognition and conservation",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_13a3f63c5-1768148643514.png",
            imageAlt: "Small group of students sitting in outdoor classroom setting with whiteboard showing elephant anatomy diagrams and sanctuary in background",
            duration: "5-7 days",
            difficulty: "Easy",
            bestSeason: "Year-round"
        }];


    return (
        <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-card">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Choose Your Journey
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Every experience is crafted to honor elephant welfare while creating transformative moments for conscious travelers
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {experiences?.map((experience) =>
                        <div
                            key={experience?.id}
                            className="group bg-background rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300">

                            <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                                <Image
                                    src={experience?.image}
                                    alt={experience?.imageAlt}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                                    <Icon name={experience?.icon} size={24} color="var(--color-primary)" />
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                                    {experience?.title}
                                </h3>
                                <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-3">
                                    {experience?.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                                        <Icon name="Clock" size={12} className="inline mr-1" />
                                        {experience?.duration}
                                    </span>
                                    <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                                        <Icon name="TrendingUp" size={12} className="inline mr-1" />
                                        {experience?.difficulty}
                                    </span>
                                    <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                                        <Icon name="Calendar" size={12} className="inline mr-1" />
                                        {experience?.bestSeason}
                                    </span>
                                </div>

                                <button className="w-full py-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>);

};

export default ExperienceTypes;