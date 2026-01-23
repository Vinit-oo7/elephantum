import { useState } from 'react';
import Icon from '../../../components/AppIcon';

const InteractiveMap = ({ locations, onLocationSelect, selectedLocation }) => {
  const [hoveredMarker, setHoveredMarker] = useState(null);

  const mapMarkers = [
    { id: 1, name: 'Elephant Nature Park', top: '35%', left: '72%' },
    { id: 2, name: 'Pinnawala Sanctuary', top: '55%', left: '75%' },
    { id: 3, name: 'Kaziranga Reserve', top: '40%', left: '78%' },
    { id: 4, name: 'Udawalawe Haven', top: '58%', left: '76%' },
    { id: 5, name: 'Yala Wilderness', top: '60%', left: '77%' }
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Explore Sacred Destinations
        </h3>
        <p className="text-sm text-muted-foreground">
          Click on any sanctuary marker to discover ethical elephant encounters across Asia
        </p>
      </div>
      <div className="relative w-full aspect-[16/9] bg-muted/30 rounded-lg overflow-hidden border border-border">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Elephant Sanctuaries Map"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=18.5,75&z=4&output=embed"
          className="absolute inset-0"
        />

        {mapMarkers?.map((marker) => {
          const location = locations?.find(loc => loc?.id === marker?.id);
          const isSelected = selectedLocation?.id === marker?.id;
          const isHovered = hoveredMarker === marker?.id;

          return (
            <button
              key={marker?.id}
              onClick={() => onLocationSelect(location)}
              onMouseEnter={() => setHoveredMarker(marker?.id)}
              onMouseLeave={() => setHoveredMarker(null)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group"
              style={{ top: marker?.top, left: marker?.left }}
              aria-label={`View ${marker?.name}`}
            >
              <div className={`relative ${isSelected || isHovered ? 'lime-glow' : ''}`}>
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isSelected
                    ? 'bg-primary border-2 border-primary scale-125' :'bg-primary/20 border-2 border-primary/40 hover:bg-primary/40 hover:scale-110'
                }`}>
                  <Icon
                    name="MapPin"
                    size={isSelected ? 24 : 20}
                    color={isSelected ? 'var(--color-background)' : 'var(--color-primary)'}
                  />
                </div>

                {(isHovered || isSelected) && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap">
                    <div className="bg-background border border-primary/40 rounded-lg px-3 py-2 shadow-lg">
                      <p className="text-sm font-semibold text-foreground">{marker?.name}</p>
                      {location && (
                        <p className="text-xs text-muted-foreground">{location?.country}</p>
                      )}
                    </div>
                    <div className="w-2 h-2 bg-background border-r border-b border-primary/40 transform rotate-45 absolute top-full left-1/2 -translate-x-1/2 -mt-1" />
                  </div>
                )}

                <div className={`absolute inset-0 rounded-full animate-ping ${
                  isSelected ? 'bg-primary' : 'bg-primary/40'
                }`} style={{ animationDuration: '2s' }} />
              </div>
            </button>
          );
        })}
      </div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3">
        {locations?.map((location) => (
          <button
            key={location?.id}
            onClick={() => onLocationSelect(location)}
            className={`p-3 rounded-lg border transition-all duration-300 text-left ${
              selectedLocation?.id === location?.id
                ? 'bg-primary/20 border-primary text-primary' :'bg-muted/50 border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <Icon name="MapPin" size={14} />
              <span className="text-xs font-medium line-clamp-1">{location?.name}</span>
            </div>
            <p className="text-xs opacity-80">{location?.country}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default InteractiveMap;