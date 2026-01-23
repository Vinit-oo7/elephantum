import { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Mitchell",
            location: "London, UK",
            avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_170699746-1763294878713.png",
            avatarAlt: "Professional headshot of Caucasian woman with shoulder-length brown hair wearing blue blazer smiling warmly at camera",
            rating: 5,
            experience: "Dawn Encounters",
            date: "December 2025",
            review: "Watching elephants emerge from the morning mist was absolutely magical. The guides were incredibly knowledgeable about elephant behavior and conservation. This wasn't just tourism—it was a profound education about these magnificent creatures and the importance of protecting their habitats.",
            images: [
                {
                    url: "https://images.unsplash.com/photo-1685391692627-4a2fc5c0c75c",
                    alt: "Elephant family walking through misty forest at sunrise with golden light creating ethereal atmosphere"
                }]

        },
        {
            id: 2,
            name: "David Chen",
            location: "Singapore",
            avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_13a48293d-1763296098326.png",
            avatarAlt: "Professional headshot of Asian man with short black hair wearing gray suit and glasses with confident smile",
            rating: 5,
            experience: "Photography Expedition",
            date: "November 2025",
            review: "As a wildlife photographer, I've traveled extensively, but this experience exceeded all expectations. The access to prime locations and the patience of our guides allowed me to capture once-in-a-lifetime shots. More importantly, I learned about the conservation challenges these animals face and how ethical tourism makes a real difference.",
            images: [
                {
                    url: "https://images.unsplash.com/photo-1595659293368-6a7fb0bee904",
                    alt: "Close-up photograph of elephant eye showing intricate details and emotional depth with natural lighting"
                }]

        },
        {
            id: 3,
            name: "Maria Rodriguez",
            location: "Barcelona, Spain",
            avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1975607e9-1763295500639.png",
            avatarAlt: "Professional headshot of Hispanic woman with long dark hair wearing white blouse with warm genuine smile",
            rating: 5,
            experience: "Family Adventure",
            date: "January 2026",
            review: "Our family of four, including kids aged 8 and 12, had the most incredible educational experience. The guides tailored everything perfectly for children, teaching them about elephant intelligence and conservation in engaging ways. My kids haven't stopped talking about it since we returned home!",
            images: [
                {
                    url: "https://images.unsplash.com/photo-1709567484031-87bc70607500",
                    alt: "Family group observing elephant herd from safe distance with children pointing excitedly at baby elephant"
                }]

        },
        {
            id: 4,
            name: "James Thompson",
            location: "Melbourne, Australia",
            avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_11bb52de7-1763299509621.png",
            avatarAlt: "Professional headshot of Caucasian man with short blonde hair wearing navy polo shirt with friendly smile",
            rating: 5,
            experience: "Conservation Immersion",
            date: "October 2025",
            review: "The three-day conservation program completely changed my perspective on wildlife tourism. Working alongside sanctuary staff, I learned about elephant behavior research, habitat restoration, and the daily challenges of conservation work. This experience inspired me to become a monthly donor to elephant protection initiatives.",
            images: [
                {
                    url: "https://img.rocket.new/generatedImages/rocket_gen_img_1c91d2ced-1767042319677.png",
                    alt: "Conservation volunteer in khaki uniform helping sanctuary staff with elephant health check in natural habitat"
                }]

        },
        {
            id: 5,
            name: "Priya Sharma",
            location: "Mumbai, India",
            avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_111e29bbe-1763294966477.png",
            avatarAlt: "Professional headshot of Indian woman with long black hair wearing traditional kurta with bright welcoming smile",
            rating: 5,
            experience: "Twilight Tracking",
            date: "September 2025",
            review: "Following elephant herds during their evening routines was mesmerizing. Our naturalist guide shared fascinating insights about elephant communication and social structures. The sunset viewing was breathtaking, and knowing that our visit directly supports conservation efforts made it even more meaningful.",
            images: [
                {
                    url: "https://images.unsplash.com/photo-1582765805106-0ff2380b9596",
                    alt: "Elephant herd silhouetted against vibrant orange sunset sky walking across savanna grassland"
                }]

        },
        {
            id: 6,
            name: "Michael O\'Brien",
            location: "Dublin, Ireland",
            avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_11b5a415c-1763294923881.png",
            avatarAlt: "Professional headshot of Caucasian man with red hair and beard wearing green sweater with cheerful expression",
            rating: 5,
            experience: "Educational Retreat",
            date: "August 2025",
            review: "The week-long educational retreat was transformative. Combining field observations with lectures on elephant cognition gave me a comprehensive understanding of these incredible animals. The accommodations were comfortable, the food was excellent, and the entire experience was professionally organized while maintaining authentic conservation values.",
            images: [
                {
                    url: "https://img.rocket.new/generatedImages/rocket_gen_img_111b5868f-1768148644932.png",
                    alt: "Educational group sitting in outdoor classroom with elephant sanctuary visible in background during lecture"
                }]

        }];


    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials?.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const navigateSlide = (direction) => {
        setIsAutoPlaying(false);
        if (direction === 'next') {
            setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
        } else {
            setCurrentIndex((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
        }
    };

    const currentTestimonial = testimonials?.[currentIndex];

    return (
        <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-card">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Traveler Testimonials
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Real stories from conscious travelers who chose ethical elephant encounters
                    </p>
                </div>

                <div className="relative">
                    <div className="bg-background rounded-2xl p-6 md:p-8 lg:p-12 border border-border">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={currentTestimonial?.avatar}
                                        alt={currentTestimonial?.avatarAlt}
                                        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover" />

                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                            {currentTestimonial?.name}
                                        </h3>
                                        <p className="text-sm md:text-base text-muted-foreground flex items-center gap-2">
                                            <Icon name="MapPin" size={14} />
                                            {currentTestimonial?.location}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex gap-1">
                                        {[...Array(currentTestimonial?.rating)]?.map((_, i) =>
                                            <Icon key={i} name="Star" size={20} color="var(--color-primary)" className="fill-current" />
                                        )}
                                    </div>
                                    <span className="text-sm text-muted-foreground">
                                        {currentTestimonial?.rating}.0
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Icon name="Compass" size={16} />
                                        <span>{currentTestimonial?.experience}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Icon name="Calendar" size={16} />
                                        <span>{currentTestimonial?.date}</span>
                                    </div>
                                </div>

                                <p className="text-base md:text-lg text-foreground leading-relaxed">
                                    "{currentTestimonial?.review}"
                                </p>

                                <div className="flex items-center gap-3 pt-4">
                                    <button
                                        onClick={() => navigateSlide('prev')}
                                        className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                                        aria-label="Previous testimonial">

                                        <Icon name="ChevronLeft" size={20} />
                                    </button>
                                    <button
                                        onClick={() => navigateSlide('next')}
                                        className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                                        aria-label="Next testimonial">

                                        <Icon name="ChevronRight" size={20} />
                                    </button>
                                    <div className="flex gap-2 ml-4">
                                        {testimonials?.map((_, index) =>
                                            <button
                                                key={index}
                                                onClick={() => goToSlide(index)}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ?
                                                    'bg-primary w-6' : 'bg-muted hover:bg-muted-foreground'}`
                                                }
                                                aria-label={`Go to testimonial ${index + 1}`} />

                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-64 md:h-80 lg:h-full min-h-[400px] rounded-xl overflow-hidden">
                                <Image
                                    src={currentTestimonial?.images?.[0]?.url}
                                    alt={currentTestimonial?.images?.[0]?.alt}
                                    className="w-full h-full object-cover" />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-8 px-8 py-4 bg-background rounded-lg border border-border">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                                1,247
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Happy Travelers
                            </div>
                        </div>
                        <div className="w-px h-12 bg-border" />
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                                4.9
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Average Rating
                            </div>
                        </div>
                        <div className="w-px h-12 bg-border" />
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                                98%
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Would Recommend
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);

};

export default TestimonialsCarousel;