import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UniqueExperiencesSection = () => {
    const experiences = [
        {
            title: 'Forest Sanctuary Walks',
            description: 'Walk alongside elephants as they forage through protected forests. Observe natural behaviors, family interactions, and the intelligence that makes these beings extraordinary. Guided by conservation experts who share decades of elephant knowledge.',
            image: "https://images.unsplash.com/photo-1503959561554-9d2e8577f4ab",
            imageAlt: 'Tourist walking respectfully behind elephant family in dense tropical forest with experienced local guide explaining elephant behavior',
            features: ['Small Groups (Max 8)', 'Expert Naturalists', '3-4 Hours', 'All Ages Welcome'],
            icon: 'Trees'
        },
        {
            title: 'River Bathing Observation',
            description: 'Witness the joy of elephants at play during their daily river rituals. Watch as families splash, spray, and bond in crystal-clear waters. A photographer\'s dream and a moment of pure connection with nature\'s gentle giants.',
            image: "https://images.unsplash.com/photo-1533484482814-3fe2d922be89",
            imageAlt: 'Elephant herd bathing and playing in pristine river with baby elephants splashing water while mothers watch protectively',
            features: ['Morning Sessions', 'Photography Friendly', '2 Hours', 'Seasonal Availability'],
            icon: 'Waves'
        },
        {
            title: 'Conservation Volunteering',
            description: 'Contribute directly to elephant welfare through hands-on conservation work. Assist with habitat restoration, prepare enrichment activities, and learn from veterinary teams. Make a tangible difference while gaining deep insights into elephant care.',
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ca4bc324-1764661982101.png",
            imageAlt: 'Volunteers working with local conservationists planting trees in elephant habitat with adult elephants grazing peacefully in background',
            features: ['1-2 Weeks', 'Hands-On Work', 'Certificate Provided', 'Accommodation Included'],
            icon: 'Heart'
        },
        {
            title: 'Cultural Immersion',
            description: 'Experience the deep connection between indigenous communities and elephants. Learn traditional knowledge, share meals with mahout families, and understand the cultural significance of elephants in local heritage. Tourism that honors both wildlife and people.',
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_12ddd497e-1767005894637.png",
            imageAlt: 'Indigenous family in traditional dress sharing stories about elephant conservation with tourists around evening campfire',
            features: ['Village Homestays', 'Traditional Meals', 'Cultural Workshops', 'Language Exchange'],
            icon: 'Users'
        }];


    return (
        <section className="py-16 md:py-20 lg:py-24 bg-card">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6" style={{ background: 'rgba(50, 205, 50, 0.1)', border: '1px solid var(--color-border)' }}>
                        <Icon name="Compass" size={18} color="var(--color-primary)" />
                        <span className="text-xs md:text-sm text-primary font-medium">Transformative Journeys</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
                        Unique Experiences
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                        Every encounter is designed to create lasting memories while ensuring elephant welfare and supporting conservation efforts. Choose your path to connection.
                    </p>
                </div>

                <div className="space-y-12 md:space-y-16 lg:space-y-20">
                    {experiences?.map((experience, index) =>
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-10 lg:gap-12 items-center`}>

                            <div className="w-full lg:w-1/2">
                                <div className="relative rounded-2xl overflow-hidden group">
                                    <Image
                                        src={experience?.image}
                                        alt={experience?.imageAlt}
                                        className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110" />

                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                                    <div
                                        className="absolute top-6 left-6 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center"
                                        style={{ background: 'rgba(50, 205, 50, 0.2)', border: '1px solid var(--color-primary)' }}>

                                        <Icon name={experience?.icon} size={28} color="var(--color-primary)" />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2">
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                                    {experience?.title}
                                </h3>
                                <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                                    {experience?.description}
                                </p>

                                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                                    {experience?.features?.map((feature, featureIndex) =>
                                        <div
                                            key={featureIndex}
                                            className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 rounded-lg"
                                            style={{ background: 'rgba(50, 205, 50, 0.1)', border: '1px solid var(--color-border)' }}>

                                            <Icon name="Check" size={16} color="var(--color-primary)" />
                                            <span className="text-xs md:text-sm text-foreground">{feature}</span>
                                        </div>
                                    )}
                                </div>

                                <Link to="/experience">
                                    <Button
                                        variant="default"
                                        size="lg"
                                        iconName="ArrowRight"
                                        iconPosition="right">

                                        Learn More
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-16 md:mt-20 lg:mt-24 text-center p-8 md:p-10 lg:p-12 rounded-2xl" style={{ background: 'rgba(50, 205, 50, 0.05)', border: '1px solid var(--color-border)' }}>
                    <Icon name="Sparkles" size={40} color="var(--color-primary)" className="mx-auto mb-6" />
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Custom Experiences Available
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                        Every traveler is unique. We craft personalized itineraries that match your interests, fitness level, and conservation goals. Let's design your perfect elephant encounter.
                    </p>
                    <Link to="/contact">
                        <Button
                            variant="outline"
                            size="lg"
                            iconName="MessageCircle"
                            iconPosition="right">

                            Request Custom Experience
                        </Button>
                    </Link>
                </div>
            </div>
        </section>);

};

export default UniqueExperiencesSection;