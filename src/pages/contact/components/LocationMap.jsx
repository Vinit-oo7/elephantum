import Icon from '../../../components/AppIcon';

const LocationMap = () => {
    const officeLocations = [
        {
            name: 'Global Headquarters',
            address: '123 Conservation Way, Wildlife District',
            city: 'Nature City, NC 12345',
            country: 'United States',
            coordinates: { lat: 40.7128, lng: -74.0060 },
            phone: '+1 (555) 353-7426',
            email: 'hq@elephantum.com'
        },
        {
            name: 'Asia Pacific Office',
            address: '456 Sanctuary Road, Conservation Quarter',
            city: 'Bangkok, 10110',
            country: 'Thailand',
            coordinates: { lat: 13.7563, lng: 100.5018 },
            phone: '+66 2 123 4567',
            email: 'asia@elephantum.com'
        },
        {
            name: 'Africa Regional Office',
            address: '789 Wildlife Avenue, Nature Reserve',
            city: 'Nairobi, 00100',
            country: 'Kenya',
            coordinates: { lat: -1.2921, lng: 36.8219 },
            phone: '+254 20 123 4567',
            email: 'africa@elephantum.com'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Our Global Presence
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                    With offices strategically located near major elephant sanctuaries, we provide local expertise and on-ground support for your conservation journey.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {officeLocations?.map((location, index) => (
                    <div
                        key={index}
                        className="bg-card/50 backdrop-blur-xl rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 group"
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                                <Icon name="MapPin" size={24} color="var(--color-primary)" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground mb-1">{location?.name}</h3>
                                <p className="text-sm text-muted-foreground">{location?.country}</p>
                            </div>
                        </div>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-start gap-3">
                                <Icon name="Building2" size={16} color="var(--color-muted-foreground)" className="mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-sm text-foreground">{location?.address}</p>
                                    <p className="text-sm text-muted-foreground">{location?.city}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Icon name="Phone" size={16} color="var(--color-muted-foreground)" className="flex-shrink-0" />
                                <p className="text-sm text-foreground">{location?.phone}</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Icon name="Mail" size={16} color="var(--color-muted-foreground)" className="flex-shrink-0" />
                                <p className="text-sm text-primary">{location?.email}</p>
                            </div>
                        </div>

                        <button className="w-full px-4 py-3 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center gap-2">
                            <Icon name="Navigation" size={18} />
                            Get Directions
                        </button>
                    </div>
                ))}
            </div>
            <div className="bg-card/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-primary/20">
                <div className="aspect-[16/9] md:aspect-[21/9] w-full">
                    <iframe
                        width="100%"
                        height="100%"
                        loading="lazy"
                        title="Elephantum Global Headquarters Location"
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps?q=40.7128,-74.0060&z=14&output=embed"
                        className="w-full h-full"
                    />
                </div>

                <div className="p-6 md:p-8 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-2">Visit Our Headquarters</h3>
                            <p className="text-sm text-muted-foreground">
                                Schedule a visit to our conservation center and meet our team of specialists in person.
                            </p>
                        </div>
                        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 flex items-center gap-2 whitespace-nowrap">
                            <Icon name="Calendar" size={18} />
                            Book Visit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationMap;