import { useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (heroRef?.current) {
            observer?.observe(heroRef?.current);
        }

        return () => observer?.disconnect();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-card to-background"
        >
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-primary blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full bg-accent blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-primary/10 mb-6 md:mb-8 lime-glow">
                    <Icon name="Brain" size={32} color="var(--color-primary)" className="md:w-10 md:h-10 lg:w-12 lg:h-12" />
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
                    Understanding Elephant
                    <span className="text-primary"> Intelligence</span>
                </h1>

                <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Discover the remarkable cognitive abilities, emotional depth, and social complexity that make elephants among Earth's most intelligent beings. Their wisdom guides our conservation mission.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-10 lg:mt-12">
                    <div className="flex items-center gap-2 md:gap-3">
                        <Icon name="Award" size={20} color="var(--color-primary)" className="md:w-6 md:h-6" />
                        <span className="text-xs md:text-sm lg:text-base text-muted-foreground">Wildlife Research Certified</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                        <Icon name="BookOpen" size={20} color="var(--color-primary)" className="md:w-6 md:h-6" />
                        <span className="text-xs md:text-sm lg:text-base text-muted-foreground">Scientific Documentation</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                        <Icon name="Users" size={20} color="var(--color-primary)" className="md:w-6 md:h-6" />
                        <span className="text-xs md:text-sm lg:text-base text-muted-foreground">Expert Collaboration</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;