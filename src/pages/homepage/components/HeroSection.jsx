import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon.jsx';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    if (heroRef?.current) {
      observer?.observe(heroRef?.current);
    }

    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1518535501258-45e8046c3298"
          alt="Majestic African elephant walking through misty forest at dawn with golden sunlight filtering through trees creating ethereal atmosphere"
          className="w-full h-full object-cover opacity-40" />

        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)]?.map((_, i) =>
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full lime-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              background: 'var(--color-primary)',
              opacity: 0.6
            }}>
          </div>
        )}
      </div>
      <div ref={textRef} className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <div className="mb-6 md:mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 lg:mb-10" style={{ background: 'rgba(50, 205, 50, 0.1)', border: '1px solid var(--color-border)' }}>
            <Icon name="Leaf" size={20} color="var(--color-primary)" />
            <span className="text-xs md:text-sm text-primary font-medium">Conservation-First Tourism</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 lg:mb-8 text-foreground leading-tight">
          Travel Where
          <span className="block text-primary mt-2 md:mt-3 lg:mt-4" style={{ textShadow: '0 0 30px rgba(50, 205, 50, 0.5)' }}>
            Elephants Roam Free
          </span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-10 lg:mb-12 leading-relaxed px-4">
          Experience transformative conservation journeys that protect elephant welfare while supporting local communities. Every encounter contributes to their protection story.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <Link to="/locations">
            <Button
              variant="default"
              size="lg"
              iconName="MapPin"
              iconPosition="right"
              className="breathing-cta w-full sm:w-auto">

              Explore Sanctuaries
            </Button>
          </Link>
          <Link to="/about-them">
            <Button
              variant="outline"
              size="lg"
              iconName="Heart"
              iconPosition="right"
              className="w-full sm:w-auto">

              Learn About Elephants
            </Button>
          </Link>
        </div>

        <div className="mt-12 md:mt-16 lg:mt-20 flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
          {[
            { value: '5', label: 'Ethical Sanctuaries', icon: 'MapPin' },
            { value: '100%', label: 'Conservation Focus', icon: 'Shield' },
            { value: '1000+', label: 'Lives Transformed', icon: 'Users' }]?.
            map((stat, index) =>
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Icon name={stat?.icon} size={20} color="var(--color-primary)" />
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">{stat?.value}</div>
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat?.label}</div>
              </div>
            )}
        </div>
      </div>
      <div className="absolute bottom-8 md:bottom-10 lg:bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <Icon name="ChevronDown" size={32} color="var(--color-primary)" />
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>);

};

export default HeroSection;