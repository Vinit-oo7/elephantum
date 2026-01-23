import { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationDetailsModal = ({ location, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCurrency, setSelectedCurrency] = useState(location?.currency);

  if (!location) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Info' },
    { id: 'experiences', label: 'Experiences', icon: 'Sparkles' },
    { id: 'conservation', label: 'Conservation', icon: 'Heart' },
    { id: 'facilities', label: 'Facilities', icon: 'Building2' }
  ];

  const currencyOptions = [
    { code: 'USD', symbol: '$', rate: 1 },
    { code: 'INR', symbol: '₹', rate: 83 },
    { code: 'THB', symbol: '฿', rate: 35 },
    { code: 'LKR', symbol: 'Rs', rate: 325 }
  ];

  const convertPrice = (basePrice) => {
    const currency = currencyOptions?.find(c => c?.code === selectedCurrency);
    return Math.round(basePrice * currency?.rate);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm">
      <div className="bg-card rounded-lg border border-border max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
          <Image
            src={location?.image}
            alt={location?.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background hover:border-primary transition-all duration-300"
            aria-label="Close modal"
          >
            <Icon name="X" size={20} />
          </button>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {location?.name}
                </h2>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="MapPin" size={18} />
                  <span className="text-base">{location?.country}</span>
                </div>
              </div>
              <div className="flex gap-2">
                {location?.certified && (
                  <div className="bg-success/20 backdrop-blur-sm px-3 py-2 rounded-full border border-success/40 flex items-center gap-2">
                    <Icon name="BadgeCheck" size={16} color="var(--color-success)" />
                    <span className="text-sm text-success font-medium">Certified</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="border-b border-border">
            <div className="flex overflow-x-auto px-4 md:px-6">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center gap-2 px-4 py-4 border-b-2 transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab?.id
                      ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={tab?.icon} size={18} />
                  <span className="text-sm font-medium">{tab?.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 md:p-6 lg:p-8">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    About This Sanctuary
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {location?.fullDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Users" size={20} color="var(--color-primary)" />
                      <span className="text-sm text-muted-foreground">Elephant Population</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">{location?.elephantCount}</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="MapPinned" size={20} color="var(--color-primary)" />
                      <span className="text-sm text-muted-foreground">Protected Area</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">{location?.area}</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Calendar" size={20} color="var(--color-primary)" />
                      <span className="text-sm text-muted-foreground">Best Season</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">{location?.bestSeason}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {location?.highlights?.map((highlight, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experiences' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Available Experiences
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {location?.experiences?.map((experience, index) => (
                    <div key={index} className="bg-muted/50 rounded-lg p-4 border border-border hover:border-primary transition-all duration-300">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Icon name={experience?.icon} size={20} color="var(--color-primary)" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-semibold text-foreground mb-1">{experience?.name}</h4>
                          <p className="text-sm text-muted-foreground">{experience?.duration}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{experience?.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">
                          {currencyOptions?.find(c => c?.code === selectedCurrency)?.symbol}
                          {convertPrice(experience?.basePrice)}
                        </span>
                        <span className="text-xs text-muted-foreground">{experience?.groupSize}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'conservation' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Conservation Efforts
                </h3>
                <div className="space-y-4">
                  {location?.conservationEfforts?.map((effort, index) => (
                    <div key={index} className="bg-muted/50 rounded-lg p-4 border border-border">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center flex-shrink-0">
                          <Icon name="Heart" size={20} color="var(--color-success)" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-semibold text-foreground mb-2">{effort?.title}</h4>
                          <p className="text-sm text-muted-foreground">{effort?.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" size={24} color="var(--color-primary)" />
                    <div>
                      <h4 className="text-base font-semibold text-foreground mb-2">Your Impact</h4>
                      <p className="text-sm text-muted-foreground">
                        {location?.impactMessage}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'facilities' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Facilities & Amenities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {location?.facilities?.map((facility, index) => (
                    <div key={index} className="flex items-center gap-3 bg-muted/50 rounded-lg p-4">
                      <Icon name="Check" size={20} color="var(--color-success)" />
                      <span className="text-sm text-foreground">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-border p-4 md:p-6 bg-muted/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Starting from</p>
                <div className="flex items-center gap-2">
                  <select
                    value={selectedCurrency}
                    onChange={(e) => setSelectedCurrency(e?.target?.value)}
                    className="bg-background border border-border rounded px-2 py-1 text-sm text-foreground"
                  >
                    {currencyOptions?.map((curr) => (
                      <option key={curr?.code} value={curr?.code}>
                        {curr?.code}
                      </option>
                    ))}
                  </select>
                  <p className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {currencyOptions?.find(c => c?.code === selectedCurrency)?.symbol}
                    {convertPrice(location?.price)}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">per person</p>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Star" size={18} color="var(--color-warning)" fill="var(--color-warning)" />
                <span className="text-xl font-semibold text-foreground">{location?.rating}</span>
                <span className="text-sm text-muted-foreground">({location?.reviews} reviews)</span>
              </div>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                iconName="Heart"
                iconPosition="left"
                className="flex-1 md:flex-initial"
              >
                Save
              </Button>
              <Button
                variant="default"
                iconName="Calendar"
                iconPosition="left"
                className="flex-1 md:flex-initial breathing-cta"
              >
                Book Experience
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetailsModal;