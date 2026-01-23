import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BehaviorTimeline = () => {
    const [activePhase, setActivePhase] = useState(0);

    const lifePhases = [
        {
            id: 0,
            age: "0-2 Years",
            phase: "Infancy",
            icon: "Baby",
            image: "https://images.unsplash.com/photo-1584442939366-f054656849cb",
            imageAlt: "Baby elephant calf standing close to mother elephant in natural grassland habitat with protective herd nearby",
            behaviors: [
                "Constant maternal bonding and protection within herd structure",
                "Learning trunk coordination through play and observation",
                "Developing social skills through interaction with family members",
                "Nursing and gradual introduction to solid vegetation"],

            intelligence: "Rapid neural development with intense learning through imitation and play"
        },
        {
            id: 1,
            age: "3-10 Years",
            phase: "Juvenile",
            icon: "Sparkles",
            image: "https://images.unsplash.com/photo-1702509416526-649413e781d3",
            imageAlt: "Young juvenile elephant playing with siblings in muddy waterhole surrounded by tropical forest vegetation",
            behaviors: [
                "Playful exploration and testing of physical boundaries",
                "Learning migration routes and water source locations",
                "Developing communication skills and social hierarchies",
                "Practicing foraging techniques under adult supervision"],

            intelligence: "Peak curiosity phase with rapid skill acquisition and social learning"
        },
        {
            id: 2,
            age: "11-20 Years",
            phase: "Adolescence",
            icon: "Zap",
            image: "https://images.unsplash.com/photo-1621404715237-762dac5bf2de",
            imageAlt: "Adolescent elephant with developing tusks walking through savanna grassland during golden hour sunset",
            behaviors: [
                "Males begin separating from maternal herds periodically",
                "Females start learning childcare from experienced mothers",
                "Establishing individual personalities and social preferences",
                "Mastering complex foraging and problem-solving skills"],

            intelligence: "Identity formation with advanced cognitive development and strategic thinking"
        },
        {
            id: 3,
            age: "21-40 Years",
            phase: "Prime Adulthood",
            icon: "Crown",
            image: "https://images.unsplash.com/photo-1557467479-193f004a20e0",
            imageAlt: "Mature adult elephant with full tusks leading herd across river crossing in lush green wilderness landscape",
            behaviors: [
                "Females become experienced mothers and herd leaders",
                "Males engage in musth periods and breeding competition",
                "Peak physical strength and reproductive activity",
                "Teaching younger generations survival and social skills"],

            intelligence: "Maximum cognitive ability with accumulated wisdom and leadership skills"
        },
        {
            id: 4,
            age: "41-60 Years",
            phase: "Matriarch/Elder",
            icon: "Award",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_15edfec81-1765359125318.png",
            imageAlt: "Elderly matriarch elephant with weathered skin and long tusks standing majestically in African savanna at dusk",
            behaviors: [
                "Matriarchs guide herds using decades of environmental knowledge",
                "Elders make critical decisions during droughts and migrations",
                "Passing down cultural knowledge to younger generations",
                "Maintaining social cohesion and conflict resolution"],

            intelligence: "Wisdom peak with irreplaceable ecological and social knowledge"
        }];


    return (
        <section className="py-12 md:py-16 lg:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
                        Life Cycle <span className="text-primary">Intelligence</span>
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore how elephant intelligence evolves through distinct life phases, from playful calves to wise matriarchs
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
                    <div className="lg:w-2/5">
                        <div className="sticky top-24 space-y-3 md:space-y-4">
                            {lifePhases?.map((phase, index) =>
                                <button
                                    key={phase?.id}
                                    onClick={() => setActivePhase(index)}
                                    className={`w-full text-left p-4 md:p-5 lg:p-6 rounded-lg border transition-all duration-300 ${activePhase === index ?
                                        'bg-primary/10 border-primary lime-glow' : 'bg-card border-border hover:border-primary/50'}`
                                    }>

                                    <div className="flex items-center gap-3 md:gap-4 mb-2">
                                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center ${activePhase === index ? 'bg-primary/20' : 'bg-muted'}`
                                        }>
                                            <Icon
                                                name={phase?.icon}
                                                size={20}
                                                color={activePhase === index ? 'var(--color-primary)' : 'var(--color-muted-foreground)'}
                                                className="md:w-6 md:h-6" />

                                        </div>
                                        <div>
                                            <div className={`text-xs md:text-sm font-medium ${activePhase === index ? 'text-primary' : 'text-muted-foreground'}`
                                            }>
                                                {phase?.age}
                                            </div>
                                            <div className={`text-base md:text-lg lg:text-xl font-semibold ${activePhase === index ? 'text-foreground' : 'text-muted-foreground'}`
                                            }>
                                                {phase?.phase}
                                            </div>
                                        </div>
                                    </div>
                                    {activePhase === index &&
                                        <p className="text-xs md:text-sm text-muted-foreground mt-2">
                                            {phase?.intelligence}
                                        </p>
                                    }
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="lg:w-3/5">
                        <div className="bg-card rounded-lg overflow-hidden border border-border">
                            <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                                <Image
                                    src={lifePhases?.[activePhase]?.image}
                                    alt={lifePhases?.[activePhase]?.imageAlt}
                                    className="w-full h-full object-cover" />

                                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                            </div>

                            <div className="p-6 md:p-7 lg:p-8">
                                <div className="flex items-center gap-3 mb-4 md:mb-5">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Icon name={lifePhases?.[activePhase]?.icon} size={24} color="var(--color-primary)" className="md:w-7 md:h-7" />
                                    </div>
                                    <div>
                                        <div className="text-xs md:text-sm text-primary font-medium">
                                            {lifePhases?.[activePhase]?.age}
                                        </div>
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                                            {lifePhases?.[activePhase]?.phase}
                                        </h3>
                                    </div>
                                </div>

                                <div className="bg-primary/5 rounded-lg p-4 md:p-5 mb-5 md:mb-6 border border-primary/20">
                                    <div className="flex items-start gap-2 md:gap-3">
                                        <Icon name="Brain" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-1" />
                                        <p className="text-sm md:text-base text-foreground">
                                            {lifePhases?.[activePhase]?.intelligence}
                                        </p>
                                    </div>
                                </div>

                                <h4 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4">
                                    Key Behaviors & Development
                                </h4>
                                <ul className="space-y-2 md:space-y-3">
                                    {lifePhases?.[activePhase]?.behaviors?.map((behavior, index) =>
                                        <li key={index} className="flex items-start gap-2 md:gap-3">
                                            <Icon name="Check" size={16} color="var(--color-primary)" className="flex-shrink-0 mt-1" />
                                            <span className="text-sm md:text-base text-muted-foreground">{behavior}</span>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);

};

export default BehaviorTimeline;