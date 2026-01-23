import { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ExperienceHero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const heroSlides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1518535501258-45e8046c3298",
            imageAlt: "Majestic adult elephant walking through lush green forest with sunlight filtering through dense canopy creating dramatic lighting",
            title: "Journey Into The Wild",
            subtitle: "Discover ethical encounters that transform perspectives"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1606572065506-2cf9bd2881e3",
            imageAlt: "Baby elephant playfully splashing in crystal clear river water surrounded by tropical vegetation and rocky riverbed",
            title: "Witness Pure Joy",
            subtitle: "Experience authentic moments of elephant happiness"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1676317399913-1a3e7dca7263",
            imageAlt: "Elephant herd walking together across golden savanna grassland during sunset with dramatic orange and purple sky",
            title: "Walk With Giants",
            subtitle: "Create memories that support conservation"
        }];


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
            {heroSlides?.map((slide, index) =>
                <div
                    key={slide?.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`
                    }>

                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
                    <img
                        src={slide?.image}
                        alt={slide?.imageAlt}
                        className="w-full h-full object-cover" />

                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-6 lg:px-8">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
                            {slide?.title}
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl">
                            {slide?.subtitle}
                        </p>
                    </div>
                </div>
            )}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
                {heroSlides?.map((_, index) =>
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ?
                            'bg-primary w-8' : 'bg-white/50 hover:bg-white/80'}`
                        }
                        aria-label={`Go to slide ${index + 1}`} />

                )}
            </div>
            <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides?.length) % heroSlides?.length)}
                className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-primary transition-all duration-300"
                aria-label="Previous slide">

                <Icon name="ChevronLeft" size={24} />
            </button>
            <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides?.length)}
                className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-primary transition-all duration-300"
                aria-label="Next slide">

                <Icon name="ChevronRight" size={24} />
            </button>
        </section>);

};

export default ExperienceHero;