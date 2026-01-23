import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToActionSection = () => {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-primary) 1px, transparent 0)', backgroundSize: '60px 60px' }}></div>
            </div>
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)]?.map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`,
                            background: 'var(--color-primary)',
                            opacity: 0.4
                        }}
                    ></div>
                ))}
            </div>
            <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
                <div
                    className="text-center p-8 md:p-12 lg:p-16 rounded-3xl breathing-cta"
                    style={{
                        background: 'rgba(26, 26, 26, 0.9)',
                        border: '2px solid var(--color-primary)',
                        backdropFilter: 'blur(20px)'
                    }}
                >
                    <div className="mb-6 md:mb-8">
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6" style={{ background: 'rgba(50, 205, 50, 0.2)', border: '1px solid var(--color-primary)' }}>
                            <Icon name="Sparkles" size={20} color="var(--color-primary)" />
                            <span className="text-sm md:text-base text-primary font-semibold">Begin Your Journey</span>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                        Ready to Experience
                        <span className="block text-primary mt-2" style={{ textShadow: '0 0 30px rgba(50, 205, 50, 0.5)' }}>
                            Ethical Elephant Tourism?
                        </span>
                    </h2>

                    <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-10 lg:mb-12 leading-relaxed">
                        Join thousands of conscious travelers who have transformed their understanding of elephants. Every booking supports conservation, empowers communities, and protects these magnificent beings.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-8 md:mb-10">
                        <Link to="/contact" className="w-full sm:w-auto">
                            <Button
                                variant="default"
                                size="xl"
                                iconName="Calendar"
                                iconPosition="right"
                                fullWidth
                                className="lime-glow-hover"
                            >
                                Book Consultation
                            </Button>
                        </Link>
                        <Link to="/locations" className="w-full sm:w-auto">
                            <Button
                                variant="outline"
                                size="xl"
                                iconName="MapPin"
                                iconPosition="right"
                                fullWidth
                            >
                                Explore Sanctuaries
                            </Button>
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12 pt-8 md:pt-10 border-t border-border">
                        {[
                            { icon: 'Shield', label: '100% Ethical', sublabel: 'Certified Sanctuaries' },
                            { icon: 'Users', label: '1000+ Travelers', sublabel: 'Lives Transformed' },
                            { icon: 'Heart', label: 'Conservation', sublabel: 'Impact Guaranteed' }
                        ]?.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <Icon name={stat?.icon} size={24} color="var(--color-primary)" />
                                    <div className="text-xl md:text-2xl font-bold text-primary">{stat?.label}</div>
                                </div>
                                <div className="text-xs md:text-sm text-muted-foreground">{stat?.sublabel}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 md:mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Lock" size={16} color="var(--color-muted-foreground)" />
                        <span>Secure booking • Flexible cancellation • 24/7 support</span>
                    </div>
                </div>

                <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {[
                        {
                            icon: 'MessageCircle',
                            title: 'Free Consultation',
                            description: 'Speak with our conservation experts to plan your perfect ethical elephant experience.',
                            link: '/contact'
                        },
                        {
                            icon: 'BookOpen',
                            title: 'Learn About Elephants',
                            description: 'Discover the intelligence, emotions, and social structures of these magnificent beings.',
                            link: '/about-them'
                        },
                        {
                            icon: 'Globe',
                            title: 'View All Locations',
                            description: 'Explore our 5 handpicked sanctuaries across Asia and Africa.',
                            link: '/locations'
                        }
                    ]?.map((item, index) => (
                        <Link key={index} to={item?.link}>
                            <div
                                className="p-6 rounded-xl transition-all duration-300 hover:scale-105 group"
                                style={{ background: 'rgba(26, 26, 26, 0.6)', border: '1px solid var(--color-border)' }}
                            >
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                                    style={{ background: 'rgba(50, 205, 50, 0.1)', border: '1px solid var(--color-border)' }}
                                >
                                    <Icon name={item?.icon} size={24} color="var(--color-primary)" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2">{item?.title}</h3>
                                <p className="text-sm text-muted-foreground">{item?.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.5); opacity: 0.8; }
        }
      `}</style>
        </section>
    );
};

export default CallToActionSection;