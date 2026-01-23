import { useEffect, useRef } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const members = entry.target.querySelectorAll('.team-member');
                    members.forEach((member, index) => {
                        setTimeout(() => {
                            member.style.opacity = '1';
                            member.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            });
        }, { threshold: 0.1 });

        if (sectionRef?.current) observer?.observe(sectionRef?.current);

        return () => observer?.disconnect();
    }, []);

    const teamMembers = [
        {
            name: 'Dr. Priya Sharma',
            role: 'Conservation Director',
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_18b45a110-1763301844083.png",
            imageAlt: 'Professional woman with long dark hair wearing white lab coat standing in wildlife research facility with conservation charts in background',
            expertise: 'Wildlife Biology',
            bio: '15 years leading elephant conservation programs across Asia. Published researcher in elephant cognition and social behavior.',
            social: { linkedin: '#', twitter: '#' }
        },
        {
            name: 'Rajesh Kumar',
            role: 'Community Relations Lead',
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_125b68624-1763295869657.png",
            imageAlt: 'Indian man with warm smile wearing traditional kurta standing in rural village setting with community members in background',
            expertise: 'Cultural Anthropology',
            bio: 'Bridges traditional elephant-keeping communities with modern conservation practices. Ensures fair economic partnerships.',
            social: { linkedin: '#', twitter: '#' }
        },
        {
            name: 'Sarah Mitchell',
            role: 'Ethical Tourism Architect',
            image: "https://images.unsplash.com/photo-1598135753096-f4002016d194",
            imageAlt: 'Caucasian woman with blonde hair in outdoor adventure gear standing in tropical forest with wildlife observation equipment',
            expertise: 'Sustainable Travel',
            bio: 'Designs transformative wildlife experiences that prioritize animal welfare. Former National Geographic expedition leader.',
            social: { linkedin: '#', twitter: '#' }
        },
        {
            name: 'Thanawat Pongsuwan',
            role: 'Sanctuary Partnership Manager',
            image: "https://images.unsplash.com/photo-1668083423438-2aa020bdb55e",
            imageAlt: 'Thai man wearing casual outdoor clothing standing near elephant sanctuary with lush green mountains in background',
            expertise: 'Wildlife Management',
            bio: 'Vets and certifies partner sanctuaries across Southeast Asia. Ensures compliance with highest ethical standards.',
            social: { linkedin: '#', twitter: '#' }
        }];


    return (
        <section ref={sectionRef} className="py-12 md:py-16 lg:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        Meet the <span className="text-primary">Guardians</span>
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
                        Our team combines decades of conservation expertise, cultural knowledge, and passion for ethical wildlife tourism.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {teamMembers?.map((member, index) =>
                        <div
                            key={index}
                            className="team-member group transition-all duration-700 opacity-0"
                            style={{ transform: 'translateY(30px)' }}>

                            <div className="relative overflow-hidden rounded-2xl mb-4 md:mb-6" style={{ border: '2px solid rgba(50, 205, 50, 0.2)' }}>
                                <div className="aspect-[3/4] overflow-hidden">
                                    <Image
                                        src={member?.image}
                                        alt={member?.imageAlt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                                    <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2" style={{ background: 'rgba(50, 205, 50, 0.2)', color: 'var(--color-primary)' }}>
                                        {member?.expertise}
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-foreground" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                    {member?.name}
                                </h3>
                                <p className="text-sm md:text-base text-primary mb-3 md:mb-4 font-medium">
                                    {member?.role}
                                </p>
                                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 md:mb-6">
                                    {member?.bio}
                                </p>
                                <div className="flex justify-center gap-3 md:gap-4">
                                    <a
                                        href={member?.social?.linkedin}
                                        className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:lime-glow"
                                        style={{ background: 'rgba(50, 205, 50, 0.1)', border: '1px solid rgba(50, 205, 50, 0.2)' }}
                                        aria-label={`${member?.name} LinkedIn profile`}>

                                        <Icon name="Linkedin" size={18} color="var(--color-primary)" />
                                    </a>
                                    <a
                                        href={member?.social?.twitter}
                                        className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:lime-glow"
                                        style={{ background: 'rgba(50, 205, 50, 0.1)', border: '1px solid rgba(50, 205, 50, 0.2)' }}
                                        aria-label={`${member?.name} Twitter profile`}>

                                        <Icon name="Twitter" size={18} color="var(--color-primary)" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>);

};

export default TeamSection;