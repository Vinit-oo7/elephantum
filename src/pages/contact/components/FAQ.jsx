import { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqCategories = [
        {
            category: 'Booking & Planning',
            questions: [
                {
                    question: 'How far in advance should I book my elephant experience?',
                    answer: 'We recommend booking at least 3-6 months in advance, especially for peak travel seasons (November-March in Asia, June-October in Africa). This ensures availability at your preferred sanctuary and allows time for proper trip planning and conservation education preparation.'
                },
                {
                    question: 'What is included in the consultation process?',
                    answer: 'Our free consultation includes: personalized itinerary planning, sanctuary selection based on your interests, conservation education materials, travel logistics coordination, accommodation recommendations, and ongoing support throughout your journey. We also provide pre-trip briefings on elephant behavior and ethical interaction guidelines.'
                },
                {
                    question: 'Can I customize my experience?',
                    answer: 'Absolutely! Every journey is tailored to your interests, whether you focus on photography, conservation volunteering, educational tours, or pure observation. We work with you to create an experience that aligns with your goals while maintaining our strict ethical standards.'
                },
                {
                    question: 'What is your cancellation policy?',
                    answer: 'We offer flexible cancellation up to 60 days before departure with full refund. Between 30-60 days, 50% refund applies. Within 30 days, we offer credit toward future bookings. Travel insurance is highly recommended for unexpected circumstances.'
                }
            ]
        },
        {
            category: 'Ethical Standards',
            questions: [
                {
                    question: 'How do you ensure elephant welfare?',
                    answer: 'We partner exclusively with sanctuaries that prohibit riding, chains, bullhooks, and forced performances. All locations are certified by international wildlife organizations and undergo regular welfare audits. Elephants have freedom to roam, natural social structures, and veterinary care.'
                },
                {
                    question: 'What makes your experiences different from traditional elephant tourism?',
                    answer: 'Unlike traditional tourism that exploits elephants for entertainment, we focus on observation-based experiences that prioritize animal welfare. You witness elephants in natural behaviors, learn about conservation challenges, and contribute directly to protection efforts through your visit.'
                },
                {
                    question: 'How does my booking support conservation?',
                    answer: 'A significant portion of every booking funds: anti-poaching patrols, habitat restoration, veterinary care, community education programs, and local employment. We provide transparent impact reports showing exactly how your contribution helps protect elephants and their ecosystems.'
                }
            ]
        },
        {
            category: 'Travel Logistics',
            questions: [
                {
                    question: 'Do you arrange flights and accommodations?',
                    answer: 'We provide comprehensive travel planning assistance including flight recommendations, visa guidance, and curated accommodation options near sanctuaries. While we don\'t book flights directly, we partner with eco-conscious travel agencies for complete package arrangements if desired.'
                },
                {
                    question: 'What should I pack for an elephant experience?',
                    answer: 'Essential items include: neutral-colored clothing (avoid bright colors), sturdy walking shoes, sun protection, insect repellent, camera with zoom lens, reusable water bottle, and binoculars. We provide a detailed packing list during consultation based on your specific destination and season.'
                },
                {
                    question: 'Are experiences suitable for families with children?',
                    answer: 'Yes! We offer family-friendly experiences with age-appropriate education programs. Children must be at least 8 years old for most experiences, with special family programs available. We ensure safe viewing distances and engaging activities that teach conservation values to young travelers.'
                },
                {
                    question: 'What languages do your guides speak?',
                    answer: 'Our local guides are fluent in English and their native languages. We can arrange translators for other languages with advance notice. All conservation education materials are available in 12+ languages to ensure comprehensive understanding.'
                }
            ]
        }
    ];

    const toggleQuestion = (categoryIndex, questionIndex) => {
        const index = `${categoryIndex}-${questionIndex}`;
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
            <div className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                    <Icon name="HelpCircle" size={16} color="var(--color-primary)" />
                    <span className="text-xs md:text-sm text-primary font-medium">Frequently Asked Questions</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Everything You Need to Know
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                    Find answers to common questions about booking, ethical standards, and travel logistics. Can't find what you're looking for? Contact our specialists directly.
                </p>
            </div>
            <div className="space-y-8">
                {faqCategories?.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="bg-card/50 backdrop-blur-xl rounded-xl p-6 md:p-8 border border-primary/20">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Icon name="Folder" size={20} color="var(--color-primary)" />
                            </div>
                            {category?.category}
                        </h3>

                        <div className="space-y-4">
                            {category?.questions?.map((item, questionIndex) => {
                                const isOpen = openIndex === `${categoryIndex}-${questionIndex}`;

                                return (
                                    <div
                                        key={questionIndex}
                                        className="border border-border rounded-lg overflow-hidden transition-all duration-300"
                                    >
                                        <button
                                            onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                                            className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-muted/30 transition-colors duration-300"
                                            aria-expanded={isOpen}
                                        >
                                            <span className="text-base md:text-lg font-semibold text-foreground pr-4">
                                                {item?.question}
                                            </span>
                                            <Icon
                                                name={isOpen ? 'ChevronUp' : 'ChevronDown'}
                                                size={20}
                                                color="var(--color-primary)"
                                                className="flex-shrink-0"
                                            />
                                        </button>
                                        {isOpen && (
                                            <div className="px-6 py-4 bg-muted/20 border-t border-border">
                                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                                    {item?.answer}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/30 text-center">
                <Icon name="MessageSquare" size={48} color="var(--color-primary)" className="mx-auto mb-4" />
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    Still Have Questions?
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-xl mx-auto">
                    Our conservation specialists are here to help. Get personalized answers to your specific questions about ethical elephant experiences.
                </p>
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 inline-flex items-center gap-2">
                    <Icon name="Send" size={20} />
                    Ask a Question
                </button>
            </div>
        </div>
    );
};

export default FAQ;