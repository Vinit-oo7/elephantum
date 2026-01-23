import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterPanel = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        certified: false,
        featured: false,
        priceRange: 'all',
        country: 'all',
        season: 'all'
    });

    const priceRanges = [
        { value: 'all', label: 'All Prices' },
        { value: 'budget', label: 'Under $100' },
        { value: 'mid', label: '$100 - $200' },
        { value: 'premium', label: 'Above $200' }
    ];

    const countries = [
        { value: 'all', label: 'All Countries' },
        { value: 'Thailand', label: 'Thailand' },
        { value: 'Sri Lanka', label: 'Sri Lanka' },
        { value: 'India', label: 'India' }
    ];

    const seasons = [
        { value: 'all', label: 'All Seasons' },
        { value: 'Nov-Feb', label: 'Winter (Nov-Feb)' },
        { value: 'Mar-May', label: 'Summer (Mar-May)' },
        { value: 'Jun-Oct', label: 'Monsoon (Jun-Oct)' }
    ];

    const handleFilterChange = (key, value) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    const handleReset = () => {
        const resetFilters = {
            certified: false,
            featured: false,
            priceRange: 'all',
            country: 'all',
            season: 'all'
        };
        setFilters(resetFilters);
        onFilterChange(resetFilters);
    };

    const activeFilterCount = Object.values(filters)?.filter(v => v !== 'all' && v !== false)?.length;

    return (
        <div className="bg-card rounded-lg border border-border p-4 md:p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <Icon name="Filter" size={20} color="var(--color-primary)" />
                    <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        Filters
                    </h3>
                    {activeFilterCount > 0 && (
                        <span className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                            {activeFilterCount}
                        </span>
                    )}
                </div>
                {activeFilterCount > 0 && (
                    <button
                        onClick={handleReset}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                        Reset All
                    </button>
                )}
            </div>
            <div className="space-y-6">
                <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Certification</h4>
                    <div className="space-y-2">
                        <Checkbox
                            label="Wildlife Conservation Certified"
                            checked={filters?.certified}
                            onChange={(e) => handleFilterChange('certified', e?.target?.checked)}
                        />
                        <Checkbox
                            label="Featured Sanctuaries"
                            checked={filters?.featured}
                            onChange={(e) => handleFilterChange('featured', e?.target?.checked)}
                        />
                    </div>
                </div>

                <div className="border-t border-border pt-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Price Range</h4>
                    <div className="space-y-2">
                        {priceRanges?.map((range) => (
                            <label key={range?.value} className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    type="radio"
                                    name="priceRange"
                                    value={range?.value}
                                    checked={filters?.priceRange === range?.value}
                                    onChange={(e) => handleFilterChange('priceRange', e?.target?.value)}
                                    className="w-4 h-4 text-primary border-border focus:ring-primary"
                                />
                                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                    {range?.label}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="border-t border-border pt-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Country</h4>
                    <div className="space-y-2">
                        {countries?.map((country) => (
                            <label key={country?.value} className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    type="radio"
                                    name="country"
                                    value={country?.value}
                                    checked={filters?.country === country?.value}
                                    onChange={(e) => handleFilterChange('country', e?.target?.value)}
                                    className="w-4 h-4 text-primary border-border focus:ring-primary"
                                />
                                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                    {country?.label}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="border-t border-border pt-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Best Season</h4>
                    <div className="space-y-2">
                        {seasons?.map((season) => (
                            <label key={season?.value} className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    type="radio"
                                    name="season"
                                    value={season?.value}
                                    checked={filters?.season === season?.value}
                                    onChange={(e) => handleFilterChange('season', e?.target?.value)}
                                    className="w-4 h-4 text-primary border-border focus:ring-primary"
                                />
                                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                    {season?.label}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
                <Button
                    variant="default"
                    fullWidth
                    iconName="Search"
                    iconPosition="left"
                >
                    Apply Filters
                </Button>
            </div>
        </div>
    );
};

export default FilterPanel;