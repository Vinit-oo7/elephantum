import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SeasonalGuide = () => {
    const seasons = [
        {
            id: 1,
            season: "Dry Season",
            months: "November - March",
            icon: "Sun",
            image: "https://images.unsplash.com/photo-1610372537236-0147e2a5fad3",
            imageAlt: "Elephant herd gathering around waterhole during dry season with clear blue sky and sparse vegetation in background",
            highlights: [
                "Optimal wildlife viewing with elephants congregating at water sources",
                "Clear skies perfect for photography and videography",
                "Comfortable temperatures for extended outdoor experiences",
                "Higher elephant activity during cooler morning and evening hours"],

            bestFor: ["Photography Expeditions", "Dawn Encounters", "Twilight Tracking"],
            weatherConditions: "Warm days (25-30°C), cool mornings and evenings",
            crowdLevel: "Moderate to High"
        },
        {
            id: 2,
            season: "Wet Season",
            months: "April - October",
            icon: "CloudRain",
            image: "https://images.unsplash.com/photo-1707247353286-4eda9b9f3252",
            imageAlt: "Elephants playing in rain with lush green vegetation and dramatic cloudy sky creating moody atmospheric scene",
            highlights: [
                "Lush landscapes with vibrant green vegetation",
                "Elephants displaying playful behavior in rain and mud",
                "Fewer tourists for more intimate experiences",
                "Newborn elephant calves often visible with herds"],

            bestFor: ["Conservation Immersion", "Educational Retreats", "Family Adventures"],
            weatherConditions: "Warm and humid (28-35°C), afternoon showers",
            crowdLevel: "Low to Moderate"
        },
        {
            id: 3,
            season: "Shoulder Season",
            months: "March - April, October - November",
            icon: "Cloud",
            image: "https://images.unsplash.com/photo-1614242548728-8bacc4b11db1",
            imageAlt: "Elephant family walking through transitional landscape with mix of dry and green vegetation under partly cloudy sky",
            highlights: [
                "Perfect balance of weather and wildlife activity",
                "Transition period offers unique behavioral observations",
                "Moderate temperatures ideal for all-day experiences",
                "Excellent value with lower seasonal pricing"],

            bestFor: ["All Experience Types", "First-Time Visitors", "Budget-Conscious Travelers"],
            weatherConditions: "Pleasant temperatures (22-28°C), occasional rain",
            crowdLevel: "Low"
        }];


    return (
        <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-card">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Seasonal Experience Guide
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Plan your visit around elephant behavior patterns and optimal viewing conditions
                    </p>
                </div>

                <div className="space-y-8 md:space-y-12">
                    {seasons?.map((season, index) =>
                        <div
                            key={season?.id}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`
                            }>

                            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="relative h-64 md:h-80 lg:h-full min-h-[400px] rounded-xl overflow-hidden">
                                    <Image
                                        src={season?.image}
                                        alt={season?.imageAlt}
                                        className="w-full h-full object-cover" />

                                    <div className="absolute top-4 left-4 flex items-center gap-3 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                                        <Icon name={season?.icon} size={24} color="var(--color-primary)" />
                                        <span className="text-white font-semibold">{season?.season}</span>
                                    </div>
                                </div>
                            </div>

                            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                                        {season?.season}
                                    </h3>
                                    <p className="text-base md:text-lg text-primary font-medium">
                                        {season?.months}
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                                        <Icon name="Sparkles" size={20} color="var(--color-primary)" />
                                        Season Highlights
                                    </h4>
                                    <ul className="space-y-2">
                                        {season?.highlights?.map((highlight, idx) =>
                                            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                                                <Icon name="Check" size={18} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                                                <span>{highlight}</span>
                                            </li>
                                        )}
                                    </ul>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-background rounded-lg p-4 border border-border">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Icon name="Thermometer" size={18} color="var(--color-primary)" />
                                            <span className="text-sm font-semibold text-foreground">Weather</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{season?.weatherConditions}</p>
                                    </div>

                                    <div className="bg-background rounded-lg p-4 border border-border">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Icon name="Users" size={18} color="var(--color-primary)" />
                                            <span className="text-sm font-semibold text-foreground">Crowd Level</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{season?.crowdLevel}</p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-base font-semibold text-foreground mb-3">
                                        Best Experiences for This Season:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {season?.bestFor?.map((experience, idx) =>
                                            <span
                                                key={idx}
                                                className="px-3 py-1 text-xs md:text-sm rounded-full bg-primary/10 text-primary border border-primary/20">

                                                {experience}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-12 md:mt-16 bg-background rounded-xl p-6 md:p-8 border border-border">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Icon name="Info" size={24} color="var(--color-primary)" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                Planning Your Visit
                            </h3>
                            <p className="text-sm md:text-base text-muted-foreground mb-4">
                                While elephants can be observed year-round, each season offers unique advantages. Consider your priorities—whether it's optimal photography conditions, fewer crowds, or witnessing specific behaviors—when selecting your travel dates. Our conservation specialists can help you choose the perfect timing for your interests.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Icon name="Calendar" size={16} />
                                    <span>Book 3-6 months in advance</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Icon name="Shield" size={16} />
                                    <span>Flexible rescheduling available</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Icon name="Heart" size={16} />
                                    <span>All seasons support conservation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);

};

export default SeasonalGuide;