import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const ComparisonTool = ({ locations }) => {
    const [selectedLocations, setSelectedLocations] = useState([locations?.[0]?.id, locations?.[1]?.id]);

    const locationOptions = locations?.map(loc => ({
        value: loc?.id,
        label: loc?.name,
        description: loc?.country
    }));

    const comparisonFeatures = [
        { key: 'elephantCount', label: 'Elephant Population', icon: 'Users' },
        { key: 'area', label: 'Protected Area', icon: 'MapPinned' },
        { key: 'rating', label: 'Rating', icon: 'Star' },
        { key: 'price', label: 'Starting Price', icon: 'DollarSign' },
        { key: 'bestSeason', label: 'Best Season', icon: 'Calendar' },
        { key: 'certified', label: 'Certification', icon: 'BadgeCheck' }
    ];

    const getLocationById = (id) => locations?.find(loc => loc?.id === id);

    const handleLocationChange = (index, value) => {
        const newSelected = [...selectedLocations];
        newSelected[index] = value;
        setSelectedLocations(newSelected);
    };

    return (
        <div className="bg-card rounded-lg border border-border p-4 md:p-6 lg:p-8">
            <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Compare Sanctuaries
                </h3>
                <p className="text-sm text-muted-foreground">
                    Select two sanctuaries to compare their features and find your perfect ethical elephant experience
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Select
                    label="First Sanctuary"
                    options={locationOptions}
                    value={selectedLocations?.[0]}
                    onChange={(value) => handleLocationChange(0, value)}
                    searchable
                />
                <Select
                    label="Second Sanctuary"
                    options={locationOptions}
                    value={selectedLocations?.[1]}
                    onChange={(value) => handleLocationChange(1, value)}
                    searchable
                />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                    <thead>
                        <tr className="border-b border-border">
                            <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Feature</th>
                            {selectedLocations?.map((locId, index) => {
                                const location = getLocationById(locId);
                                return (
                                    <th key={index} className="py-4 px-4">
                                        <div className="text-center">
                                            <p className="text-base font-bold text-foreground mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                                {location?.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground">{location?.country}</p>
                                        </div>
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonFeatures?.map((feature, index) => (
                            <tr key={feature?.key} className={index !== comparisonFeatures?.length - 1 ? 'border-b border-border' : ''}>
                                <td className="py-4 px-4">
                                    <div className="flex items-center gap-2">
                                        <Icon name={feature?.icon} size={16} color="var(--color-primary)" />
                                        <span className="text-sm text-foreground">{feature?.label}</span>
                                    </div>
                                </td>
                                {selectedLocations?.map((locId, locIndex) => {
                                    const location = getLocationById(locId);
                                    let value = location?.[feature?.key];

                                    if (feature?.key === 'certified') {
                                        value = value ? (
                                            <div className="flex items-center justify-center gap-1 text-success">
                                                <Icon name="Check" size={16} />
                                                <span className="text-sm">Certified</span>
                                            </div>
                                        ) : (
                                            <span className="text-sm text-muted-foreground">Not Certified</span>
                                        );
                                    } else if (feature?.key === 'rating') {
                                        value = (
                                            <div className="flex items-center justify-center gap-1">
                                                <Icon name="Star" size={16} color="var(--color-warning)" fill="var(--color-warning)" />
                                                <span className="text-sm font-semibold">{value}</span>
                                            </div>
                                        );
                                    } else if (feature?.key === 'price') {
                                        value = (
                                            <span className="text-sm font-semibold text-primary">
                                                {location?.currency}{value}
                                            </span>
                                        );
                                    } else {
                                        value = <span className="text-sm text-foreground">{value}</span>;
                                    }

                                    return (
                                        <td key={locIndex} className="py-4 px-4 text-center">
                                            {value}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-6 flex flex-col md:flex-row gap-3">
                <Button
                    variant="outline"
                    iconName="Download"
                    iconPosition="left"
                    className="flex-1"
                >
                    Download Comparison
                </Button>
                <Button
                    variant="default"
                    iconName="Calendar"
                    iconPosition="left"
                    className="flex-1 breathing-cta"
                >
                    Book Selected Sanctuary
                </Button>
            </div>
        </div>
    );
};

export default ComparisonTool;