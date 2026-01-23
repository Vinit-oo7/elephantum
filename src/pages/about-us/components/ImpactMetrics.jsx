import { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const ImpactMetrics = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        }, { threshold: 0.3 });

        if (sectionRef?.current) observer?.observe(sectionRef?.current);

        return () => observer?.disconnect();
    }, []);

    const metrics = [
        {
            icon: 'Users',
            value: 15000,
            suffix: '+',
            label: 'Travelers Transformed',
            description: 'Conscious explorers who became conservation advocates'
        },
        {
            icon: 'DollarSign',
            value: 2.5,
            suffix: 'M',
            label: 'Conservation Funding',
            description: 'Direct contributions to elephant protection programs'
        },
        {
            icon: 'Briefcase',
            value: 250,
            suffix: '+',
            label: 'Community Jobs',
            description: 'Sustainable employment for local elephant guardians'
        },
        {
            icon: 'TreePine',
            value: 5000,
            suffix: '+',
            label: 'Acres Protected',
            description: 'Natural habitat restored and preserved'
        }
    ];

    const CountUpAnimation = ({ end, suffix, duration = 2000 }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!isVisible) return;

            let startTime;
            const animate = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);

                setCount(Math.floor(progress * end));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        }, [isVisible, end, duration]);

        return (
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                {count?.toLocaleString()}{suffix}
            </span>
        );
    };

    return (
        <section ref={sectionRef} className="py-12 md:py-16 lg:py-24 bg-background relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-primary blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-accent blur-3xl"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        Real-Time <span className="text-primary">Impact</span>
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
                        Every booking creates measurable change. These numbers represent lives protected, communities empowered, and habitats preserved.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {metrics?.map((metric, index) => (
                        <div
                            key={index}
                            className="p-6 md:p-8 rounded-2xl text-center transition-all duration-500 hover:lime-glow-hover"
                            style={{
                                background: 'rgba(26, 26, 26, 0.6)',
                                border: '1px solid rgba(50, 205, 50, 0.2)',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full mb-4 md:mb-6 lime-glow" style={{ background: 'rgba(50, 205, 50, 0.1)' }}>
                                <Icon name={metric?.icon} size={28} color="var(--color-primary)" className="md:w-8 md:h-8 lg:w-10 lg:h-10" />
                            </div>

                            <div className="mb-2 md:mb-3">
                                <CountUpAnimation end={metric?.value} suffix={metric?.suffix} />
                            </div>

                            <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-3 text-foreground" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                {metric?.label}
                            </h3>

                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                                {metric?.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 md:mt-12 lg:mt-16 text-center">
                    <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium" style={{ background: 'rgba(50, 205, 50, 0.1)', border: '1px solid rgba(50, 205, 50, 0.3)' }}>
                        <Icon name="Activity" size={16} color="var(--color-primary)" />
                        <span className="text-primary">Updated in real-time as travelers book experiences</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactMetrics;