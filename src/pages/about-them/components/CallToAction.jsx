import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const CallToAction = () => {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-card">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background via-card to-background border border-primary/20">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-primary blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-accent blur-3xl"></div>
                    </div>

                    <div className="relative z-10 p-8 md:p-10 lg:p-12 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-primary/10 mb-6 md:mb-8 lime-glow">
                            <Icon name="Heart" size={32} color="var(--color-primary)" className="md:w-10 md:h-10 lg:w-12 lg:h-12" />
                        </div>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-5">
                            Experience Their <span className="text-primary">Intelligence</span> Firsthand
                        </h2>

                        <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
                            Now that you understand the remarkable cognitive abilities of elephants, discover ethical sanctuaries where you can witness their intelligence, social bonds, and gentle wisdom in natural habitats.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 lg:gap-6">
                            <Link
                                to="/locations"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all duration-300 lime-glow breathing-cta text-sm md:text-base"
                            >
                                <Icon name="MapPin" size={20} className="md:w-6 md:h-6" />
                                <span>Explore Sanctuaries</span>
                            </Link>

                            <Link
                                to="/experience"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-background hover:bg-muted text-foreground rounded-lg font-medium transition-all duration-300 border border-border hover:border-primary text-sm md:text-base"
                            >
                                <Icon name="Compass" size={20} className="md:w-6 md:h-6" />
                                <span>Plan Your Journey</span>
                            </Link>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10 mt-10 md:mt-12 lg:mt-14 pt-8 md:pt-10 border-t border-border">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">5</div>
                                <div className="text-xs md:text-sm text-muted-foreground">Ethical Sanctuaries</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">100%</div>
                                <div className="text-xs md:text-sm text-muted-foreground">Conservation Focus</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">24/7</div>
                                <div className="text-xs md:text-sm text-muted-foreground">Expert Support</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">4.9★</div>
                                <div className="text-xs md:text-sm text-muted-foreground">Traveler Rating</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-10 lg:mt-12">
                    <div className="bg-background rounded-lg p-5 md:p-6 border border-border hover:border-primary transition-colors duration-300">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 md:mb-5">
                            <Icon name="Shield" size={24} color="var(--color-primary)" className="md:w-7 md:h-7" />
                        </div>
                        <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3">
                            Ethical Guarantee
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                            Every sanctuary partner is certified for elephant welfare, ensuring no riding, chains, or harmful practices
                        </p>
                    </div>

                    <div className="bg-background rounded-lg p-5 md:p-6 border border-border hover:border-primary transition-colors duration-300">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 md:mb-5">
                            <Icon name="Users" size={24} color="var(--color-primary)" className="md:w-7 md:h-7" />
                        </div>
                        <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3">
                            Community Impact
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                            Your journey directly supports local communities and indigenous conservation efforts
                        </p>
                    </div>

                    <div className="bg-background rounded-lg p-5 md:p-6 border border-border hover:border-primary transition-colors duration-300">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 md:mb-5">
                            <Icon name="Leaf" size={24} color="var(--color-primary)" className="md:w-7 md:h-7" />
                        </div>
                        <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3">
                            Conservation Contribution
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                            Every booking funds habitat protection, anti-poaching patrols, and elephant research programs
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;