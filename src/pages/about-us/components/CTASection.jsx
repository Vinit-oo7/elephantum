import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
    return (
        <section className="py-12 md:py-16 lg:py-24 bg-background relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-transparent to-accent"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full mb-6 md:mb-8 breathing-cta" style={{ background: 'rgba(50, 205, 50, 0.1)', border: '2px solid var(--color-primary)' }}>
                    <Icon name="Compass" size={32} color="var(--color-primary)" className="md:w-10 md:h-10 lg:w-12 lg:h-12" />
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 lg:mb-8" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Ready to <span className="text-primary">Travel Where Elephants Roam Free?</span>
                </h2>

                <p className="text-sm md:text-base lg:text-xl text-muted-foreground mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
                    Join thousands of conscious travelers who have transformed their lives through ethical elephant encounters. Your journey becomes their protection story.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                    <Link to="/locations">
                        <Button
                            variant="default"
                            size="lg"
                            iconName="MapPin"
                            iconPosition="left"
                            className="w-full sm:w-auto breathing-cta"
                        >
                            Explore Sanctuaries
                        </Button>
                    </Link>

                    <Link to="/contact">
                        <Button
                            variant="outline"
                            size="lg"
                            iconName="MessageCircle"
                            iconPosition="left"
                            className="w-full sm:w-auto"
                        >
                            Book Consultation
                        </Button>
                    </Link>
                </div>

                <div className="mt-8 md:mt-10 lg:mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                            5
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground">
                            Certified Sanctuaries
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                            100%
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground">
                            Ethical Practices
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                            15K+
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground">
                            Lives Transformed
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;