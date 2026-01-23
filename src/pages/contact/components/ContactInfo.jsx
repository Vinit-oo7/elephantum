import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
    const contactMethods = [
        {
            icon: 'Mail',
            title: 'Email Us',
            primary: 'conservation@elephantum.com',
            secondary: 'bookings@elephantum.com',
            description: 'For general inquiries and booking requests'
        },
        {
            icon: 'Phone',
            title: 'Call Us',
            primary: '+1 (555) ELEPHANT',
            secondary: '+1 (555) 353-7426',
            description: 'Available Mon-Fri, 9AM-6PM EST'
        },
        {
            icon: 'MessageCircle',
            title: 'Live Chat',
            primary: 'Instant Support',
            secondary: 'Average response: 2 minutes',
            description: 'Chat with conservation specialists'
        },
        {
            icon: 'MapPin',
            title: 'Visit Us',
            primary: '123 Conservation Way',
            secondary: 'Wildlife District, Nature City',
            description: 'By appointment only'
        }
    ];

    const officeHours = [
        { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
        { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST' },
        { day: 'Sunday', hours: 'Closed (Emergency support available)' }
    ];

    const emergencyContacts = [
        {
            title: 'Travel Emergency',
            phone: '+1 (555) 911-HELP',
            description: '24/7 emergency assistance for active travelers'
        },
        {
            title: 'Sanctuary Emergency',
            phone: '+1 (555) SOS-WILD',
            description: 'Report wildlife concerns or incidents'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Multiple Ways to Connect
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                    Choose your preferred method of communication. Our conservation specialists are ready to help you plan your ethical elephant experience.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
                {contactMethods?.map((method, index) => (
                    <div
                        key={index}
                        className="relative bg-card/50 backdrop-blur-xl rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative">
                            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                <Icon name={method?.icon} size={28} color="var(--color-primary)" />
                            </div>

                            <h3 className="text-lg font-semibold text-foreground mb-2">{method?.title}</h3>
                            <p className="text-base text-primary font-medium mb-1">{method?.primary}</p>
                            <p className="text-sm text-muted-foreground mb-3">{method?.secondary}</p>
                            <p className="text-xs text-muted-foreground">{method?.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 md:mb-16">
                <div className="bg-card/50 backdrop-blur-xl rounded-xl p-6 md:p-8 border border-primary/20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon name="Clock" size={24} color="var(--color-primary)" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">Office Hours</h3>
                    </div>

                    <div className="space-y-4">
                        {officeHours?.map((schedule, index) => (
                            <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                                <span className="text-sm md:text-base text-muted-foreground">{schedule?.day}</span>
                                <span className="text-sm md:text-base text-foreground font-medium">{schedule?.hours}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                        <p className="text-xs text-muted-foreground">
                            <Icon name="Info" size={14} className="inline mr-1" />
                            All times are in Eastern Standard Time (EST). We accommodate international time zones for scheduled consultations.
                        </p>
                    </div>
                </div>

                <div className="bg-card/50 backdrop-blur-xl rounded-xl p-6 md:p-8 border border-error/30">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-lg bg-error/10 flex items-center justify-center">
                            <Icon name="AlertCircle" size={24} color="var(--color-error)" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">Emergency Contacts</h3>
                    </div>

                    <div className="space-y-6">
                        {emergencyContacts?.map((emergency, index) => (
                            <div key={index} className="p-4 bg-error/5 rounded-lg border border-error/20">
                                <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">{emergency?.title}</h4>
                                <p className="text-lg md:text-xl text-error font-bold mb-2">{emergency?.phone}</p>
                                <p className="text-xs md:text-sm text-muted-foreground">{emergency?.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                        <p className="text-xs text-muted-foreground">
                            <Icon name="Shield" size={14} className="inline mr-1" />
                            For life-threatening emergencies, always contact local emergency services first (911 in US, 112 in EU, etc.)
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
                <Icon name="Headphones" size={48} color="var(--color-primary)" className="mx-auto mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Prefer to Talk Directly?
                </h3>
                <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Schedule a free 30-minute consultation with one of our conservation specialists to discuss your dream elephant experience in detail.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center gap-2">
                        <Icon name="Calendar" size={20} />
                        Schedule Consultation
                    </button>
                    <button className="px-8 py-4 bg-card text-foreground rounded-lg font-semibold border border-primary/30 hover:border-primary/50 transition-colors duration-300 flex items-center justify-center gap-2">
                        <Icon name="Download" size={20} />
                        Download Brochure
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;