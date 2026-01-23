import { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        destination: '',
        travelDates: '',
        groupSize: '',
        experienceType: '',
        budget: '',
        conservationInterests: [],
        specialRequirements: '',
        newsletter: false
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const destinationOptions = [
        { value: 'thailand', label: 'Thailand - Elephant Nature Park', description: 'Currency: THB' },
        { value: 'sri-lanka', label: 'Sri Lanka - Udawalawe Sanctuary', description: 'Currency: LKR' },
        { value: 'india', label: 'India - Kaziranga National Park', description: 'Currency: INR' },
        { value: 'kenya', label: 'Kenya - Amboseli Reserve', description: 'Currency: USD' },
        { value: 'botswana', label: 'Botswana - Chobe National Park', description: 'Currency: USD' }
    ];

    const experienceOptions = [
        { value: 'observation', label: 'Wildlife Observation', description: 'Non-intrusive viewing' },
        { value: 'photography', label: 'Photography Safari', description: 'Guided photo tours' },
        { value: 'conservation', label: 'Conservation Volunteer', description: 'Hands-on participation' },
        { value: 'education', label: 'Educational Tour', description: 'Learning-focused experience' },
        { value: 'custom', label: 'Custom Experience', description: 'Tailored itinerary' }
    ];

    const budgetOptions = [
        { value: 'economy', label: '$2,000 - $4,000', description: 'Essential experience' },
        { value: 'standard', label: '$4,000 - $7,000', description: 'Comfortable journey' },
        { value: 'premium', label: '$7,000 - $12,000', description: 'Enhanced experience' },
        { value: 'luxury', label: '$12,000+', description: 'Ultimate conservation journey' }
    ];

    const conservationInterestOptions = [
        'Elephant Behavior Research',
        'Habitat Restoration',
        'Anti-Poaching Initiatives',
        'Community Development',
        'Wildlife Photography',
        'Educational Outreach'
    ];

    const validateForm = () => {
        const newErrors = {};

        if (!formData?.fullName?.trim()) {
            newErrors.fullName = 'Full name is required';
        }

        if (!formData?.email?.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData?.phone?.trim()) {
            newErrors.phone = 'Phone number is required';
        }

        if (!formData?.destination) {
            newErrors.destination = 'Please select a destination';
        }

        if (!formData?.travelDates) {
            newErrors.travelDates = 'Travel dates are required';
        }

        if (!formData?.groupSize?.trim()) {
            newErrors.groupSize = 'Group size is required';
        }

        if (!formData?.experienceType) {
            newErrors.experienceType = 'Please select an experience type';
        }

        if (!formData?.budget) {
            newErrors.budget = 'Please select a budget range';
        }

        setErrors(newErrors);
        return Object.keys(newErrors)?.length === 0;
    };

    const handleSubmit = (e) => {
        e?.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);

            setTimeout(() => {
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    destination: '',
                    travelDates: '',
                    groupSize: '',
                    experienceType: '',
                    budget: '',
                    conservationInterests: [],
                    specialRequirements: '',
                    newsletter: false
                });
                setSubmitSuccess(false);
            }, 5000);
        }, 2000);
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors?.[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const handleCheckboxChange = (interest) => {
        setFormData(prev => ({
            ...prev,
            conservationInterests: prev?.conservationInterests?.includes(interest)
                ? prev?.conservationInterests?.filter(i => i !== interest)
                : [...prev?.conservationInterests, interest]
        }));
    };

    if (submitSuccess) {
        return (
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
                <div className="relative bg-card/50 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-primary/30 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>

                    <div className="relative text-center">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                            <Icon name="CheckCircle2" size={48} color="var(--color-primary)" />
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Your Journey Begins Now
                        </h2>

                        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Thank you for choosing Elephantum. Our conservation specialists will review your request and contact you within 24 hours to craft your personalized ethical elephant experience.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-muted/30 rounded-xl p-6">
                                <Icon name="Leaf" size={32} color="var(--color-primary)" className="mx-auto mb-3" />
                                <h3 className="text-lg font-semibold text-foreground mb-2">Conservation Impact</h3>
                                <p className="text-sm text-muted-foreground">Your booking contributes to elephant protection and habitat restoration</p>
                            </div>

                            <div className="bg-muted/30 rounded-xl p-6">
                                <Icon name="Users" size={32} color="var(--color-primary)" className="mx-auto mb-3" />
                                <h3 className="text-lg font-semibold text-foreground mb-2">Community Support</h3>
                                <p className="text-sm text-muted-foreground">Empowering local communities through ethical tourism</p>
                            </div>

                            <div className="bg-muted/30 rounded-xl p-6">
                                <Icon name="Heart" size={32} color="var(--color-primary)" className="mx-auto mb-3" />
                                <h3 className="text-lg font-semibold text-foreground mb-2">Ethical Experience</h3>
                                <p className="text-sm text-muted-foreground">Guaranteed welfare-first elephant encounters</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="default" iconName="Home" iconPosition="left" onClick={() => window.location.href = '/homepage'}>
                                Return Home
                            </Button>
                            <Button variant="outline" iconName="MapPin" iconPosition="left" onClick={() => window.location.href = '/locations'}>
                                Explore Locations
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
            <div className="relative bg-card/50 backdrop-blur-xl rounded-2xl p-6 md:p-8 lg:p-12 border border-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>

                <div className="relative">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            Personalized Consultation Request
                        </h2>
                        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                            Share your vision, and we'll design an ethical elephant experience that exceeds your expectations while protecting wildlife and supporting local communities.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                label="Full Name"
                                type="text"
                                placeholder="Enter your full name"
                                value={formData?.fullName}
                                onChange={(e) => handleInputChange('fullName', e?.target?.value)}
                                error={errors?.fullName}
                                required
                            />

                            <Input
                                label="Email Address"
                                type="email"
                                placeholder="your.email@example.com"
                                value={formData?.email}
                                onChange={(e) => handleInputChange('email', e?.target?.value)}
                                error={errors?.email}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                label="Phone Number"
                                type="tel"
                                placeholder="+1 (555) 123-4567"
                                value={formData?.phone}
                                onChange={(e) => handleInputChange('phone', e?.target?.value)}
                                error={errors?.phone}
                                required
                            />

                            <Select
                                label="Preferred Destination"
                                placeholder="Select a sanctuary"
                                options={destinationOptions}
                                value={formData?.destination}
                                onChange={(value) => handleInputChange('destination', value)}
                                error={errors?.destination}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                label="Preferred Travel Dates"
                                type="date"
                                value={formData?.travelDates}
                                onChange={(e) => handleInputChange('travelDates', e?.target?.value)}
                                error={errors?.travelDates}
                                required
                            />

                            <Input
                                label="Group Size"
                                type="number"
                                placeholder="Number of travelers"
                                value={formData?.groupSize}
                                onChange={(e) => handleInputChange('groupSize', e?.target?.value)}
                                error={errors?.groupSize}
                                required
                                min="1"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Select
                                label="Experience Type"
                                placeholder="Choose your experience"
                                options={experienceOptions}
                                value={formData?.experienceType}
                                onChange={(value) => handleInputChange('experienceType', value)}
                                error={errors?.experienceType}
                                required
                            />

                            <Select
                                label="Budget Range (USD)"
                                placeholder="Select your budget"
                                options={budgetOptions}
                                value={formData?.budget}
                                onChange={(value) => handleInputChange('budget', value)}
                                error={errors?.budget}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-foreground mb-3">
                                Conservation Interests <span className="text-muted-foreground">(Select all that apply)</span>
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {conservationInterestOptions?.map((interest) => (
                                    <Checkbox
                                        key={interest}
                                        label={interest}
                                        checked={formData?.conservationInterests?.includes(interest)}
                                        onChange={() => handleCheckboxChange(interest)}
                                    />
                                ))}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="specialRequirements" className="block text-sm font-medium text-foreground mb-2">
                                Special Requirements or Questions
                            </label>
                            <textarea
                                id="specialRequirements"
                                rows="5"
                                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                placeholder="Tell us about any dietary restrictions, accessibility needs, photography equipment, or specific conservation questions..."
                                value={formData?.specialRequirements}
                                onChange={(e) => handleInputChange('specialRequirements', e?.target?.value)}
                            />
                        </div>

                        <div className="bg-muted/30 rounded-xl p-6">
                            <Checkbox
                                label="Subscribe to Conservation Updates"
                                description="Receive monthly newsletters about elephant conservation, sanctuary updates, and exclusive travel opportunities"
                                checked={formData?.newsletter}
                                onChange={(e) => handleInputChange('newsletter', e?.target?.checked)}
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                type="submit"
                                variant="default"
                                size="lg"
                                fullWidth
                                loading={isSubmitting}
                                iconName="Send"
                                iconPosition="right"
                                className="breathing-cta"
                            >
                                {isSubmitting ? 'Submitting Request...' : 'Submit Consultation Request'}
                            </Button>
                        </div>

                        <p className="text-xs text-muted-foreground text-center mt-6">
                            By submitting this form, you agree to our privacy policy and consent to be contacted by our conservation specialists. We respect your privacy and will never share your information with third parties.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;