import Icon from '../../../components/AppIcon';

const ContactHero = () => {
    return (
        <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent"></div>

            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 md:mb-8">
                    <Icon name="Sparkles" size={16} color="var(--color-primary)" />
                    <span className="text-xs md:text-sm text-primary font-medium">Begin Your Conservation Journey</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
                    Connect With Our
                    <span className="block text-primary mt-2">Conservation Specialists</span>
                </h1>

                <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Every journey begins with a conversation. Share your vision for an ethical elephant encounter, and we'll craft a personalized experience that protects wildlife while transforming your understanding of these magnificent beings.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-8 md:mt-12">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon name="Clock" size={24} color="var(--color-primary)" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm text-muted-foreground">Response Time</p>
                            <p className="text-base font-semibold text-foreground">Within 24 Hours</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon name="Users" size={24} color="var(--color-primary)" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm text-muted-foreground">Expert Consultants</p>
                            <p className="text-base font-semibold text-foreground">15+ Specialists</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon name="Globe" size={24} color="var(--color-primary)" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm text-muted-foreground">Languages Supported</p>
                            <p className="text-base font-semibold text-foreground">12+ Languages</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;