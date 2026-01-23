import { useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        if (titleRef?.current) observer?.observe(titleRef?.current);
        if (subtitleRef?.current) observer?.observe(subtitleRef?.current);

        return () => observer?.disconnect();
    }, []);

    return (
        <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-card to-background">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-primary blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full bg-accent blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full mb-6 md:mb-8 lg:mb-10 lime-glow" style={{ background: 'rgba(50, 205, 50, 0.1)' }}>
                    <Icon name="Heart" size={32} color="var(--color-primary)" className="md:w-10 md:h-10 lg:w-12 lg:h-12" />
                </div>

                <h1
                    ref={titleRef}
                    className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 lg:mb-8 transition-all duration-1000 opacity-0"
                    style={{ transform: 'translateY(30px)', fontFamily: 'Orbitron, sans-serif' }}
                >
                    <span className="text-primary">Guardians</span> of the <span className="text-foreground">Giants</span>
                </h1>

                <p
                    ref={subtitleRef}
                    className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 opacity-0"
                    style={{ transform: 'translateY(30px)' }}
                >
                    We are more than a travel platform. We are a movement dedicated to protecting elephant welfare, empowering local communities, and creating transformative experiences that honor the majestic intelligence of Earth's gentle giants.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;