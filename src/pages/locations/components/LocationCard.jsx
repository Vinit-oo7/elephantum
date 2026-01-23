import { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationCard = ({ location, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-card rounded-lg overflow-hidden border border-border transition-all duration-500 ease-out hover:border-primary group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <Image
          src={location?.image}
          alt={location?.imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        
        <div className="absolute top-4 right-4 flex gap-2">
          {location?.certified && (
            <div className="bg-success/20 backdrop-blur-sm px-3 py-1 rounded-full border border-success/40 flex items-center gap-1">
              <Icon name="BadgeCheck" size={14} color="var(--color-success)" />
              <span className="text-xs text-success font-medium">Certified</span>
            </div>
          )}
          {location?.featured && (
            <div className="bg-primary/20 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/40 flex items-center gap-1">
              <Icon name="Star" size={14} color="var(--color-primary)" />
              <span className="text-xs text-primary font-medium">Featured</span>
            </div>
          )}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            {location?.name}
          </h3>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Icon name="MapPin" size={16} />
            <span className="text-sm">{location?.country}</span>
          </div>
        </div>
      </div>
      <div className="p-4 md:p-6">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {location?.description}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Icon name="Users" size={16} color="var(--color-primary)" />
              <span className="text-xs text-muted-foreground">Elephants</span>
            </div>
            <p className="text-lg font-semibold text-foreground">{location?.elephantCount}</p>
          </div>
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Icon name="MapPinned" size={16} color="var(--color-primary)" />
              <span className="text-xs text-muted-foreground">Area</span>
            </div>
            <p className="text-lg font-semibold text-foreground">{location?.area}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {location?.highlights?.slice(0, 3)?.map((highlight, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {highlight}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Starting from</p>
            <p className="text-2xl font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              {location?.currency}{location?.price}
            </p>
            <p className="text-xs text-muted-foreground">per person</p>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Star" size={16} color="var(--color-warning)" fill="var(--color-warning)" />
            <span className="text-lg font-semibold text-foreground">{location?.rating}</span>
            <span className="text-sm text-muted-foreground">({location?.reviews})</span>
          </div>
        </div>

        <Button
          variant="default"
          fullWidth
          iconName="ArrowRight"
          iconPosition="right"
          onClick={() => onViewDetails(location)}
          className={`transition-all duration-300 ${isHovered ? 'lime-glow' : ''}`}
        >
          Explore Sanctuary
        </Button>
      </div>
    </div>
  );
};

export default LocationCard;