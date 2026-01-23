import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedLocationsSection = () => {
    const scrollRef = useRef(null);

    const locations = [
        {
            id: 1,
            name: 'Elephant Nature Park',
            country: 'Thailand',
            region: 'Chiang Mai',
            image: "https://images.unsplash.com/photo-1722102684321-e61b314fcf3c",
            imageAlt: 'Asian elephant family bathing in natural river surrounded by lush green tropical forest with mahouts observing from distance',
            description: 'Rescue and rehabilitation sanctuary where elephants roam freely across 250 acres of protected forest. Witness family bonds and natural behaviors.',
            highlights: ['30+ Rescued Elephants', 'River Bathing', 'Forest Walks'],
            rating: 4.9,
            reviews: 2847
        },
        {
            id: 2,
            name: 'Udawalawe Sanctuary',
            country: 'Sri Lanka',
            region: 'Sabaragamuwa',
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d28e9dd5-1767182645659.png",
            imageAlt: 'Wild Sri Lankan elephant herd grazing in golden grassland savanna with dramatic mountain backdrop during sunset',
            description: 'Wild elephant observation in their natural grassland habitat. Home to over 500 elephants with ethical viewing protocols.',
            highlights: ['500+ Wild Elephants', 'Safari Viewing', 'Baby Elephants'],
            rating: 4.8,
            reviews: 1923
        },
        {
            id: 3,
            name: 'Amboseli Conservation',
            country: 'Kenya',
            region: 'Kajiado',
            image: "https://images.unsplash.com/photo-1727252734589-147155b958be",
            imageAlt: 'African elephant matriarch leading herd across dusty plains with snow-capped Mount Kilimanjaro visible in background',
            description: 'Iconic African elephant herds against the backdrop of Mount Kilimanjaro. Research-based conservation with community involvement.',
            highlights: ['Kilimanjaro Views', 'Large Herds', 'Research Programs'],
            rating: 4.9,
            reviews: 3156
        },
        {
            id: 4,
            name: 'Mondulkiri Project',
            country: 'Cambodia',
            region: 'Mondulkiri',
            image: "https://images.unsplash.com/photo-1700753478935-26dfe93b17d9",
            imageAlt: 'Asian elephant walking through dense jungle rainforest with indigenous Bunong guide in traditional clothing',
            description: 'Indigenous Bunong community-led sanctuary in pristine jungle. Intimate encounters with retired logging elephants.',
            highlights: ['Indigenous Culture', 'Jungle Trekking', 'Waterfall Visits'],
            rating: 4.7,
            reviews: 1456
        },
        {
            id: 5,
            name: 'Pinnawala Sanctuary',
            country: 'Sri Lanka',
            region: 'Sabaragamuwa',
            image: "https://images.unsplash.com/photo-1533484482814-3fe2d922be89",
            imageAlt: 'Orphaned baby elephants playing and bathing in crystal clear river with caretakers ensuring their safety',
            description: 'Orphan elephant nursery and breeding program. Watch baby elephants being bottle-fed and playing in the river.',
            highlights: ['Orphan Care', 'Breeding Program', 'River Bathing'],
            rating: 4.6,
            reviews: 2234
        }];


    const scroll = (direction) => {
        if (scrollRef?.current) {
            const scrollAmount = 400;
            scrollRef?.current?.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-primary) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6" style={{ background: 'rgba(50, 205, 50, 0.1)', border: '1px solid var(--color-border)' }}>
                        <Icon name="MapPin" size={18} color="var(--color-primary)" />
                        <span className="text-xs md:text-sm text-primary font-medium">Sacred Destinations</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
                        Featured Sanctuaries
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                        Handpicked ethical sanctuaries where elephants live with dignity and freedom. Each location meets our strict conservation and welfare standards.
                    </p>
                </div>

                <div className="relative">
                    <button
                        onClick={() => scroll('left')}
                        className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-12 h-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                        style={{ background: 'rgba(50, 205, 50, 0.2)', border: '1px solid var(--color-border)' }}
                        aria-label="Scroll left">

                        <Icon name="ChevronLeft" size={24} color="var(--color-primary)" />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

                        {locations?.map((location) =>
                            <div
                                key={location?.id}
                                className="flex-shrink-0 w-80 md:w-96 group">

                                <div
                                    className="rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105"
                                    style={{
                                        background: 'rgba(26, 26, 26, 0.8)',
                                        border: '1px solid var(--color-border)',
                                        backdropFilter: 'blur(10px)'
                                    }}>

                                    <div className="relative h-56 md:h-64 overflow-hidden">
                                        <Image
                                            src={location?.image}
                                            alt={location?.imageAlt}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                                        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full" style={{ background: 'rgba(0, 0, 0, 0.7)' }}>
                                            <Icon name="Star" size={14} color="var(--color-warning)" />
                                            <span className="text-xs font-semibold text-foreground">{location?.rating}</span>
                                            <span className="text-xs text-muted-foreground">({location?.reviews})</span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground mb-1">
                                                    {location?.name}
                                                </h3>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <Icon name="MapPin" size={14} color="var(--color-primary)" />
                                                    <span>{location?.region}, {location?.country}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                            {location?.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {location?.highlights?.map((highlight, index) =>
                                                <span
                                                    key={index}
                                                    className="text-xs px-3 py-1 rounded-full"
                                                    style={{ background: 'rgba(50, 205, 50, 0.1)', color: 'var(--color-primary)' }}>

                                                    {highlight}
                                                </span>
                                            )}
                                        </div>

                                        <Link to="/locations">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                iconName="ArrowRight"
                                                iconPosition="right"
                                                fullWidth>

                                                Explore Sanctuary
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={() => scroll('right')}
                        className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 w-12 h-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                        style={{ background: 'rgba(50, 205, 50, 0.2)', border: '1px solid var(--color-border)' }}
                        aria-label="Scroll right">

                        <Icon name="ChevronRight" size={24} color="var(--color-primary)" />
                    </button>
                </div>

                <div className="text-center mt-12 md:mt-16">
                    <Link to="/locations">
                        <Button
                            variant="default"
                            size="lg"
                            iconName="Map"
                            iconPosition="right">

                            View All Sanctuaries
                        </Button>
                    </Link>
                </div>
            </div>
            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>);

};

export default FeaturedLocationsSection;