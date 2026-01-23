import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';

const ExperienceCustomizer = () => {
    const [selectedExperience, setSelectedExperience] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedDuration, setSelectedDuration] = useState('');
    const [groupSize, setGroupSize] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const experienceOptions = [
        { value: 'dawn', label: 'Dawn Encounters', description: '3-4 hours morning experience' },
        { value: 'photography', label: 'Photography Expedition', description: 'Full day with professional guidance' },
        { value: 'conservation', label: 'Conservation Immersion', description: '2-3 days hands-on program' },
        { value: 'family', label: 'Family Adventure', description: 'Half day educational experience' },
        { value: 'twilight', label: 'Twilight Tracking', description: '3-4 hours evening experience' },
        { value: 'educational', label: 'Educational Retreat', description: '5-7 days comprehensive program' }
    ];

    const locationOptions = [
        { value: 'thailand', label: 'Thailand Sanctuary', description: 'Chiang Mai Region' },
        { value: 'srilanka', label: 'Sri Lanka Reserve', description: 'Udawalawe National Park' },
        { value: 'kenya', label: 'Kenya Conservancy', description: 'Amboseli Ecosystem' },
        { value: 'india', label: 'India Sanctuary', description: 'Kerala Wildlife Corridor' },
        { value: 'botswana', label: 'Botswana Delta', description: 'Okavango Region' }
    ];

    const durationOptions = [
        { value: 'half-day', label: 'Half Day', description: '4-5 hours' },
        { value: 'full-day', label: 'Full Day', description: '8-10 hours' },
        { value: '2-3-days', label: '2-3 Days', description: 'Weekend immersion' },
        { value: '5-7-days', label: '5-7 Days', description: 'Week-long retreat' }
    ];

    const handleSubmit = (e) => {
        e?.preventDefault();
        console.log({
            selectedExperience,
            selectedLocation,
            selectedDuration,
            groupSize,
            selectedDate
        });
    };

    return (
        <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-background">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Customize Your Journey
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Design your perfect ethical elephant encounter tailored to your interests and schedule
                    </p>
                </div>

                <div className="bg-card rounded-2xl p-6 md:p-8 lg:p-10 border border-border">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Select
                            label="Choose Your Experience"
                            description="Select the type of encounter that resonates with you"
                            placeholder="Select an experience"
                            options={experienceOptions}
                            value={selectedExperience}
                            onChange={setSelectedExperience}
                            required
                            searchable
                        />

                        <Select
                            label="Select Destination"
                            description="Choose from our curated sanctuary locations"
                            placeholder="Select a location"
                            options={locationOptions}
                            value={selectedLocation}
                            onChange={setSelectedLocation}
                            required
                            searchable
                        />

                        <Select
                            label="Duration"
                            description="How long would you like to immerse yourself?"
                            placeholder="Select duration"
                            options={durationOptions}
                            value={selectedDuration}
                            onChange={setSelectedDuration}
                            required
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                label="Group Size"
                                type="number"
                                placeholder="Number of travelers"
                                description="Maximum 12 people per group"
                                value={groupSize}
                                onChange={(e) => setGroupSize(e?.target?.value)}
                                min="1"
                                max="12"
                                required
                            />

                            <Input
                                label="Preferred Date"
                                type="date"
                                description="Subject to availability"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e?.target?.value)}
                                required
                            />
                        </div>

                        <div className="bg-muted rounded-lg p-4 md:p-6">
                            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                <Icon name="Info" size={20} color="var(--color-primary)" />
                                What's Included
                            </h3>
                            <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <Icon name="Check" size={18} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                                    <span>Expert naturalist guides with elephant behavior expertise</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Icon name="Check" size={18} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                                    <span>All sanctuary entrance fees and conservation contributions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Icon name="Check" size={18} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                                    <span>Transportation to and from sanctuary locations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Icon name="Check" size={18} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                                    <span>Meals and refreshments during experience</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Icon name="Check" size={18} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                                    <span>Educational materials and conservation resources</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Icon name="Check" size={18} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                                    <span>Photography guidance and equipment recommendations</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                type="submit"
                                variant="default"
                                iconName="Send"
                                iconPosition="right"
                                fullWidth
                            >
                                Request Consultation
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                iconName="Download"
                                iconPosition="left"
                            >
                                Download Brochure
                            </Button>
                        </div>

                        <p className="text-xs md:text-sm text-muted-foreground text-center">
                            Our conservation specialists will contact you within 24 hours to discuss your customized experience
                        </p>
                    </form>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-card rounded-lg border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                            <Icon name="Shield" size={24} color="var(--color-primary)" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                            Ethical Guarantee
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            100% cruelty-free encounters with certified sanctuaries
                        </p>
                    </div>

                    <div className="text-center p-6 bg-card rounded-lg border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                            <Icon name="Users" size={24} color="var(--color-primary)" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                            Small Groups
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Maximum 12 travelers for intimate, meaningful experiences
                        </p>
                    </div>

                    <div className="text-center p-6 bg-card rounded-lg border border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                            <Icon name="Heart" size={24} color="var(--color-primary)" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                            Conservation Impact
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            20% of proceeds directly fund elephant protection
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceCustomizer;