import Icon from '../../../components/AppIcon';

const IntelligenceFactsGrid = () => {
    const facts = [
        {
            id: 1,
            icon: "Brain",
            title: "Exceptional Memory",
            description: "Elephants possess remarkable long-term memory, remembering individuals, locations, and experiences for decades. They can recall water sources during droughts and recognize family members after years of separation.",
            stat: "40+ years",
            statLabel: "Memory Span"
        },
        {
            id: 2,
            icon: "Heart",
            title: "Emotional Intelligence",
            description: "They display complex emotions including joy, grief, compassion, and empathy. Elephants mourn their dead, celebrate births, and show concern for injured herd members, demonstrating profound emotional depth.",
            stat: "15+ emotions",
            statLabel: "Recognized States"
        },
        {
            id: 3,
            icon: "Users",
            title: "Social Complexity",
            description: "Elephant societies are matriarchal with intricate social structures. They maintain lifelong bonds, communicate across miles using infrasound, and cooperate in childcare, demonstrating sophisticated social intelligence.",
            stat: "100+ individuals",
            statLabel: "Social Network"
        },
        {
            id: 4,
            icon: "Lightbulb",
            title: "Problem Solving",
            description: "Elephants use tools, understand cause-and-effect relationships, and adapt strategies to overcome obstacles. They've been observed using branches to swat flies and stacking objects to reach food.",
            stat: "Tool users",
            statLabel: "Cognitive Ability"
        },
        {
            id: 5,
            icon: "MessageCircle",
            title: "Advanced Communication",
            description: "They communicate through vocalizations, body language, seismic signals, and chemical cues. Their infrasonic calls travel miles, allowing coordination across vast distances in complex social networks.",
            stat: "70+ sounds",
            statLabel: "Vocal Repertoire"
        },
        {
            id: 6,
            icon: "Eye",
            title: "Self-Awareness",
            description: "Elephants recognize themselves in mirrors, demonstrating self-awareness found in few species. This cognitive milestone indicates advanced consciousness and understanding of their own existence.",
            stat: "Mirror test",
            statLabel: "Passed Successfully"
        }
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-card">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
                        Cognitive <span className="text-primary">Capabilities</span>
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Scientific research reveals the extraordinary mental abilities that make elephants one of nature's most intelligent species
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {facts?.map((fact) => (
                        <div
                            key={fact?.id}
                            className="group bg-background rounded-lg p-6 md:p-7 lg:p-8 border border-border hover:border-primary transition-all duration-300 lime-glow-hover"
                        >
                            <div className="flex items-start justify-between mb-4 md:mb-5">
                                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Icon name={fact?.icon} size={24} color="var(--color-primary)" className="md:w-7 md:h-7 lg:w-8 lg:h-8" />
                                </div>
                                <div className="text-right">
                                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary">{fact?.stat}</div>
                                    <div className="text-xs md:text-sm text-muted-foreground">{fact?.statLabel}</div>
                                </div>
                            </div>

                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-2 md:mb-3">
                                {fact?.title}
                            </h3>

                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                {fact?.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IntelligenceFactsGrid;