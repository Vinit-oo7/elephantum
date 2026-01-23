import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import Breadcrumb from '../../components/Breadcrumb';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import LocationCard from './components/LocationCard';
import LocationDetailsModal from './components/LocationDetailsModal';
import InteractiveMap from './components/InteractiveMap';
import ComparisonTool from './components/ComparisonTool';
import FilterPanel from './components/FilterPanel';

const Locations = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [viewMode, setViewMode] = useState('grid');
    const [filteredLocations, setFilteredLocations] = useState([]);
    const [sortBy, setSortBy] = useState('featured');

    const locations = [
        {
            id: 1,
            name: "Elephant Nature Park",
            country: "Chiang Mai, Thailand",
            image: "https://images.unsplash.com/photo-1611605834890-a4f92858c823",
            imageAlt: "Majestic Asian elephant walking through lush green forest with morning mist in Chiang Mai Thailand sanctuary",
            description: "A pioneering rescue and rehabilitation center where elephants roam freely across 250 acres of protected forest. Experience authentic interactions while supporting rescued elephants.",
            fullDescription: "Elephant Nature Park stands as Southeast Asia's premier ethical elephant sanctuary, pioneering the no-riding, observation-based tourism model since 1995. Nestled in the verdant mountains of Northern Thailand, this 250-acre haven provides lifetime care for over 80 rescued elephants, many saved from logging, street begging, and tourism exploitation. Visitors witness genuine elephant behavior as herds interact naturally, bathe in rivers, and forage through bamboo forests. The sanctuary's holistic approach extends beyond elephants to include rescued dogs, cats, and water buffalo, creating a comprehensive animal welfare ecosystem. Educational programs illuminate elephant intelligence, social structures, and conservation challenges while supporting local Karen hill tribe communities through sustainable employment.",
            elephantCount: "80+",
            area: "250 acres",
            price: 150,
            currency: "$",
            rating: 4.9,
            reviews: 2847,
            certified: true,
            featured: true,
            bestSeason: "Nov-Feb",
            highlights: [
                "No Riding Policy",
                "Rescued Elephants",
                "Natural Habitat",
                "Educational Tours",
                "Community Support",
                "Organic Farm"],

            experiences: [
                {
                    name: "Full Day Sanctuary Visit",
                    duration: "8 hours",
                    description: "Observe elephants in their natural habitat, participate in feeding, and learn about conservation efforts from expert guides.",
                    basePrice: 150,
                    icon: "Sun",
                    groupSize: "Max 15 people"
                },
                {
                    name: "Overnight Volunteer Program",
                    duration: "2 days",
                    description: "Immersive experience including elephant care, habitat maintenance, and evening educational sessions under the stars.",
                    basePrice: 280,
                    icon: "Moon",
                    groupSize: "Max 10 people"
                },
                {
                    name: "Photography Workshop",
                    duration: "6 hours",
                    description: "Capture ethical elephant photography with professional guidance while learning about wildlife documentation ethics.",
                    basePrice: 200,
                    icon: "Camera",
                    groupSize: "Max 8 people"
                }],

            conservationEfforts: [
                {
                    title: "Elephant Rescue Operations",
                    description: "Active rescue missions across Thailand to save elephants from exploitation, providing lifetime sanctuary care and rehabilitation."
                },
                {
                    title: "Habitat Restoration",
                    description: "Ongoing reforestation projects planting native species to expand elephant roaming areas and restore natural ecosystems."
                },
                {
                    title: "Community Education",
                    description: "Outreach programs educating local communities about elephant welfare and providing alternative livelihood training."
                }],

            impactMessage: "Every visit directly funds elephant rescue operations and supports 120+ local staff members from surrounding hill tribe communities.",
            facilities: [
                "Organic Restaurant",
                "Observation Platforms",
                "Educational Center",
                "Gift Shop",
                "First Aid Station",
                "Parking Area",
                "Restrooms",
                "Shaded Viewing Areas",
                "Photography Points",
                "Volunteer Accommodation"]

        },
        {
            id: 2,
            name: "Pinnawala Sanctuary",
            country: "Kegalle, Sri Lanka",
            image: "https://images.unsplash.com/photo-1606572065506-2cf9bd2881e3",
            imageAlt: "Baby elephant playing in crystal clear river water with adult elephants bathing in background at Sri Lankan sanctuary",
            description: "Home to the world's largest captive elephant herd, this sanctuary focuses on orphaned elephant rehabilitation and breeding programs in a natural riverside setting.",
            fullDescription: "Established in 1975, Pinnawala Elephant Orphanage has evolved into Sri Lanka's most significant elephant conservation facility, caring for over 90 elephants across multiple generations. The sanctuary's riverside location along the Ma Oya River provides elephants with daily bathing opportunities, creating one of nature's most spectacular wildlife viewing experiences. The breeding program has successfully raised over 30 calves, contributing vital genetic diversity to captive elephant populations. Visitors observe natural herd dynamics, from playful calves to wise matriarchs, while learning about Sri Lanka's human-elephant conflict challenges and conservation solutions. The facility's veterinary hospital treats injured wild elephants, extending conservation impact beyond sanctuary boundaries.",
            elephantCount: "90+",
            area: "180 acres",
            price: 120,
            currency: "$",
            rating: 4.7,
            reviews: 1923,
            certified: true,
            featured: true,
            bestSeason: "Dec-Mar",
            highlights: [
                "Orphan Rehabilitation",
                "Breeding Program",
                "River Bathing",
                "Multi-generational Herds",
                "Veterinary Care",
                "Research Facility"],

            experiences: [
                {
                    name: "Morning Bathing Experience",
                    duration: "4 hours",
                    description: "Witness the spectacular sight of 90+ elephants bathing in the Ma Oya River during their morning routine.",
                    basePrice: 120,
                    icon: "Waves",
                    groupSize: "Max 20 people"
                },
                {
                    name: "Elephant Care Workshop",
                    duration: "5 hours",
                    description: "Learn elephant husbandry, nutrition preparation, and health monitoring from experienced mahouts and veterinarians.",
                    basePrice: 180,
                    icon: "Heart",
                    groupSize: "Max 12 people"
                },
                {
                    name: "Conservation Lecture Series",
                    duration: "3 hours",
                    description: "In-depth educational sessions on Sri Lankan elephant ecology, human-wildlife conflict, and conservation strategies.",
                    basePrice: 80,
                    icon: "BookOpen",
                    groupSize: "Max 30 people"
                }],

            conservationEfforts: [
                {
                    title: "Orphan Elephant Rescue",
                    description: "24/7 rescue operations for orphaned and injured elephants across Sri Lanka, providing critical care and rehabilitation."
                },
                {
                    title: "Breeding Conservation",
                    description: "Scientifically managed breeding program maintaining genetic diversity and studying elephant reproductive biology."
                },
                {
                    title: "Human-Elephant Conflict Mitigation",
                    description: "Community-based programs developing solutions to reduce crop raiding and promote coexistence strategies."
                }],

            impactMessage: "Your visit supports orphaned elephant care and funds community education programs reducing human-elephant conflict across Sri Lanka.",
            facilities: [
                "Veterinary Hospital",
                "Observation Decks",
                "Visitor Center",
                "Cafeteria",
                "Souvenir Shop",
                "Photography Zones",
                "Parking Facilities",
                "Restrooms",
                "Picnic Areas",
                "Research Library"]

        },
        {
            id: 3,
            name: "Kaziranga Reserve",
            country: "Assam, India",
            image: "https://images.unsplash.com/photo-1443242476363-1fedf75aa0a0",
            imageAlt: "Wild elephant herd grazing in tall grasslands with misty Himalayan foothills visible in background at Kaziranga National Park",
            description: "UNESCO World Heritage Site protecting wild elephant populations in their natural grassland and wetland habitat. Experience elephants in truly wild conditions.",
            fullDescription: "Kaziranga National Park represents one of Asia's greatest conservation success stories, protecting over 1,200 wild elephants across 430 square kilometers of pristine grasslands, wetlands, and forests. This UNESCO World Heritage Site showcases elephants in their most authentic wild state, with herds migrating seasonally between highland forests and floodplain grasslands. The park's unique ecosystem supports incredible biodiversity, including the world's largest population of one-horned rhinoceros, creating unparalleled wildlife viewing opportunities. Elephant safaris conducted on trained elephants allow close observation of wild herds while minimizing disturbance, offering insights into natural elephant behavior, social structures, and ecological roles. Conservation efforts focus on maintaining wildlife corridors connecting Kaziranga to surrounding forests, ensuring genetic diversity and natural migration patterns.",
            elephantCount: "1200+",
            area: "430 sq km",
            price: 200,
            currency: "$",
            rating: 4.8,
            reviews: 3156,
            certified: true,
            featured: true,
            bestSeason: "Nov-Apr",
            highlights: [
                "Wild Elephant Herds",
                "UNESCO Heritage Site",
                "Biodiversity Hotspot",
                "Safari Experiences",
                "Natural Migration",
                "Research Programs"],

            experiences: [
                {
                    name: "Elephant Safari",
                    duration: "3 hours",
                    description: "Observe wild elephant herds from trained elephants, experiencing the grasslands from a unique vantage point.",
                    basePrice: 200,
                    icon: "Binoculars",
                    groupSize: "Max 4 per elephant"
                },
                {
                    name: "Jeep Safari Wildlife Tour",
                    duration: "4 hours",
                    description: "Comprehensive wildlife viewing including elephants, rhinos, and diverse bird species across multiple park zones.",
                    basePrice: 150,
                    icon: "Truck",
                    groupSize: "Max 6 people"
                },
                {
                    name: "Conservation Trek",
                    duration: "6 hours",
                    description: "Guided trek through elephant corridors learning about wildlife conservation, habitat management, and anti-poaching efforts.",
                    basePrice: 180,
                    icon: "Footprints",
                    groupSize: "Max 10 people"
                }],

            conservationEfforts: [
                {
                    title: "Wildlife Corridor Protection",
                    description: "Maintaining and expanding elephant migration corridors connecting Kaziranga to surrounding forest reserves."
                },
                {
                    title: "Anti-Poaching Operations",
                    description: "24/7 ranger patrols and advanced monitoring technology protecting elephants and other endangered species from poaching."
                },
                {
                    title: "Flood Management",
                    description: "Developing strategies to protect wildlife during annual monsoon floods while maintaining natural ecosystem processes."
                }],

            impactMessage: "Your visit supports ranger salaries, anti-poaching technology, and community development programs around the park buffer zones.",
            facilities: [
                "Safari Booking Office",
                "Visitor Information Center",
                "Multiple Viewing Towers",
                "Forest Rest Houses",
                "Cafeteria",
                "Souvenir Shop",
                "Parking Areas",
                "Restrooms",
                "Photography Hides",
                "Nature Interpretation Center"]

        },
        {
            id: 4,
            name: "Udawalawe Haven",
            country: "Sabaragamuwa, Sri Lanka",
            image: "https://images.unsplash.com/photo-1621404715237-762dac5bf2de",
            imageAlt: "Young elephant calf walking alongside protective mother elephant through golden savanna grassland at sunset in Sri Lanka",
            description: "Specialized elephant transit home focusing on orphaned calf rehabilitation and release programs. Witness the journey from rescue to wild release.",
            fullDescription: "Udawalawe Elephant Transit Home pioneered the concept of temporary elephant care with the ultimate goal of wild release, setting global standards for elephant rehabilitation. Established in 1995, this facility specializes in caring for orphaned elephant calves under five years old, providing intensive care until they're ready for wild release into Udawalawe National Park. The program's success rate exceeds 80%, with over 100 elephants successfully reintegrated into wild herds. Visitors observe feeding times where calves receive specialized milk formulas, witness veterinary care procedures, and learn about the complex process of preparing elephants for wild survival. The adjacent national park provides opportunities to observe released elephants thriving in their natural habitat, completing the conservation circle.",
            elephantCount: "35+",
            area: "120 acres",
            price: 100,
            currency: "$",
            rating: 4.6,
            reviews: 1456,
            certified: true,
            featured: false,
            bestSeason: "Jan-Apr",
            highlights: [
                "Orphan Rehabilitation",
                "Wild Release Program",
                "Veterinary Excellence",
                "Success Tracking",
                "Educational Focus",
                "National Park Access"],

            experiences: [
                {
                    name: "Feeding Time Observation",
                    duration: "2 hours",
                    description: "Watch orphaned elephant calves during feeding time and learn about specialized nutrition and care protocols.",
                    basePrice: 100,
                    icon: "Milk",
                    groupSize: "Max 25 people"
                },
                {
                    name: "Rehabilitation Journey Tour",
                    duration: "4 hours",
                    description: "Comprehensive tour covering rescue operations, rehabilitation process, and wild release preparation stages.",
                    basePrice: 140,
                    icon: "Route",
                    groupSize: "Max 15 people"
                },
                {
                    name: "National Park Safari",
                    duration: "5 hours",
                    description: "Safari in adjacent Udawalawe National Park to observe released elephants and wild herds in natural habitat.",
                    basePrice: 160,
                    icon: "TreePine",
                    groupSize: "Max 6 people"
                }],

            conservationEfforts: [
                {
                    title: "Orphan Rescue Network",
                    description: "Island-wide network rescuing orphaned elephant calves within 24 hours of distress calls from communities."
                },
                {
                    title: "Wild Release Program",
                    description: "Scientifically monitored release program tracking elephants post-release to ensure successful wild integration."
                },
                {
                    title: "Veterinary Research",
                    description: "Advancing elephant medicine through research on calf nutrition, disease prevention, and rehabilitation techniques."
                }],

            impactMessage: "Your visit funds orphan elephant care and supports the wild release program that has successfully reintegrated over 100 elephants.",
            facilities: [
                "Observation Platform",
                "Visitor Center",
                "Educational Displays",
                "Cafeteria",
                "Gift Shop",
                "Parking Area",
                "Restrooms",
                "Photography Points",
                "Safari Booking Office",
                "First Aid Station"]

        },
        {
            id: 5,
            name: "Yala Wilderness",
            country: "Southern Province, Sri Lanka",
            image: "https://images.unsplash.com/photo-1676243140176-34667b469fda",
            imageAlt: "Large elephant bull standing near waterhole with acacia trees and dramatic cloudy sky in Yala National Park wilderness",
            description: "Sri Lanka's most visited national park offering exceptional wild elephant viewing in diverse ecosystems from coastal areas to dense forests.",
            fullDescription: "Yala National Park encompasses 979 square kilometers of pristine wilderness, protecting one of Sri Lanka's largest wild elephant populations across diverse habitats ranging from coastal lagoons to dense monsoon forests. The park's unique geography creates exceptional wildlife viewing opportunities, with elephants frequently visible near waterholes, especially during dry season months. Yala's elephant population exhibits fascinating behavioral adaptations to the arid environment, including sophisticated water-finding techniques and seasonal migration patterns. The park's comprehensive conservation approach addresses human-elephant conflict through electric fencing, community education, and alternative livelihood programs. Safari experiences range from half-day excursions to multi-day wilderness camping, offering varying levels of immersion in this remarkable ecosystem.",
            elephantCount: "350+",
            area: "979 sq km",
            price: 180,
            currency: "$",
            rating: 4.7,
            reviews: 2234,
            certified: true,
            featured: false,
            bestSeason: "Feb-Jul",
            highlights: [
                "Wild Elephant Herds",
                "Diverse Ecosystems",
                "Leopard Sightings",
                "Coastal Wilderness",
                "Photography Paradise",
                "Camping Options"],

            experiences: [
                {
                    name: "Half-Day Safari",
                    duration: "4 hours",
                    description: "Morning or afternoon safari focusing on elephant congregation areas and waterhole observations.",
                    basePrice: 180,
                    icon: "Sunrise",
                    groupSize: "Max 6 people"
                },
                {
                    name: "Full-Day Wilderness Safari",
                    duration: "8 hours",
                    description: "Comprehensive safari covering multiple park zones with packed lunch and extended wildlife observation time.",
                    basePrice: 280,
                    icon: "Sun",
                    groupSize: "Max 6 people"
                },
                {
                    name: "Camping Safari Experience",
                    duration: "2 days",
                    description: "Overnight camping in designated wilderness areas with guided night walks and dawn elephant tracking.",
                    basePrice: 450,
                    icon: "Tent",
                    groupSize: "Max 8 people"
                }],

            conservationEfforts: [
                {
                    title: "Elephant Corridor Management",
                    description: "Maintaining critical wildlife corridors connecting Yala to surrounding protected areas for genetic diversity."
                },
                {
                    title: "Water Resource Management",
                    description: "Strategic waterhole management ensuring year-round water availability for wildlife during dry seasons."
                },
                {
                    title: "Community Coexistence Programs",
                    description: "Working with border communities to reduce conflict through electric fencing and crop protection strategies."
                }],

            impactMessage: "Your visit supports park ranger operations, anti-poaching efforts, and community development programs in surrounding villages.",
            facilities: [
                "Safari Booking Centers",
                "Multiple Park Entrances",
                "Camping Sites",
                "Visitor Information Centers",
                "Restaurants",
                "Souvenir Shops",
                "Parking Facilities",
                "Restrooms",
                "Photography Hides",
                "Bungalow Accommodation"]

        }];


    useEffect(() => {
        setFilteredLocations(locations);
    }, []);

    const handleViewDetails = (location) => {
        setSelectedLocation(location);
        setShowDetailsModal(true);
    };

    const handleCloseModal = () => {
        setShowDetailsModal(false);
        setTimeout(() => setSelectedLocation(null), 300);
    };

    const handleFilterChange = (filters) => {
        let filtered = [...locations];

        if (filters?.certified) {
            filtered = filtered?.filter((loc) => loc?.certified);
        }

        if (filters?.featured) {
            filtered = filtered?.filter((loc) => loc?.featured);
        }

        if (filters?.priceRange !== 'all') {
            filtered = filtered?.filter((loc) => {
                if (filters?.priceRange === 'budget') return loc?.price < 100;
                if (filters?.priceRange === 'mid') return loc?.price >= 100 && loc?.price <= 200;
                if (filters?.priceRange === 'premium') return loc?.price > 200;
                return true;
            });
        }

        if (filters?.country !== 'all') {
            filtered = filtered?.filter((loc) => loc?.country?.includes(filters?.country));
        }

        if (filters?.season !== 'all') {
            filtered = filtered?.filter((loc) => loc?.bestSeason === filters?.season);
        }

        setFilteredLocations(filtered);
    };

    const handleSort = (value) => {
        setSortBy(value);
        let sorted = [...filteredLocations];

        switch (value) {
            case 'featured':
                sorted?.sort((a, b) => (b?.featured ? 1 : 0) - (a?.featured ? 1 : 0));
                break;
            case 'rating':
                sorted?.sort((a, b) => b?.rating - a?.rating);
                break;
            case 'price-low':
                sorted?.sort((a, b) => a?.price - b?.price);
                break;
            case 'price-high':
                sorted?.sort((a, b) => b?.price - a?.price);
                break;
            case 'name':
                sorted?.sort((a, b) => a?.name?.localeCompare(b?.name));
                break;
            default:
                break;
        }

        setFilteredLocations(sorted);
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1">
                <div className="bg-gradient-to-b from-primary/10 to-transparent py-12 md:py-16 lg:py-20">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                        {/* <Breadcrumb /> */}

                        <div className="mt-6 md:mt-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                Sacred Destinations
                            </h1>
                            <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
                                Discover ethical elephant sanctuaries across Asia where conservation meets authentic wildlife encounters. Each destination represents our commitment to elephant welfare and community empowerment.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 bg-card rounded-lg px-4 py-2 border border-border">
                                    <Icon name="MapPin" size={18} color="var(--color-primary)" />
                                    <span className="text-sm text-foreground font-medium">{filteredLocations?.length} Sanctuaries</span>
                                </div>
                                <div className="flex items-center gap-2 bg-card rounded-lg px-4 py-2 border border-border">
                                    <Icon name="BadgeCheck" size={18} color="var(--color-success)" />
                                    <span className="text-sm text-foreground font-medium">All Certified</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 w-full md:w-auto">
                                <div className="flex items-center gap-2 bg-card rounded-lg border border-border overflow-hidden">
                                    <button
                                        onClick={() => setViewMode('grid')}
                                        className={`p-2 transition-colors duration-300 ${viewMode === 'grid' ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'}`
                                        }
                                        aria-label="Grid view">

                                        <Icon name="Grid3x3" size={18} />
                                    </button>
                                    <button
                                        onClick={() => setViewMode('map')}
                                        className={`p-2 transition-colors duration-300 ${viewMode === 'map' ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'}`
                                        }
                                        aria-label="Map view">

                                        <Icon name="Map" size={18} />
                                    </button>
                                    <button
                                        onClick={() => setViewMode('compare')}
                                        className={`p-2 transition-colors duration-300 ${viewMode === 'compare' ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'}`
                                        }
                                        aria-label="Compare view">

                                        <Icon name="GitCompare" size={18} />
                                    </button>
                                </div>

                                <select
                                    value={sortBy}
                                    onChange={(e) => handleSort(e?.target?.value)}
                                    className="bg-card border border-border rounded-lg px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary">

                                    <option value="featured">Featured First</option>
                                    <option value="rating">Highest Rated</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="name">Name: A to Z</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
                    {viewMode === 'grid' &&
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
                            <div className="lg:col-span-1">
                                <div className="sticky top-20">
                                    <FilterPanel onFilterChange={handleFilterChange} />
                                </div>
                            </div>

                            <div className="lg:col-span-3">
                                {filteredLocations?.length > 0 ?
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {filteredLocations?.map((location) =>
                                            <LocationCard
                                                key={location?.id}
                                                location={location}
                                                onViewDetails={handleViewDetails} />

                                        )}
                                    </div> :

                                    <div className="bg-card rounded-lg border border-border p-12 text-center">
                                        <Icon name="Search" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold text-foreground mb-2">No Sanctuaries Found</h3>
                                        <p className="text-muted-foreground mb-6">Try adjusting your filters to see more results</p>
                                        <Button variant="outline" iconName="RotateCcw" iconPosition="left">
                                            Reset Filters
                                        </Button>
                                    </div>
                                }
                            </div>
                        </div>
                    }

                    {viewMode === 'map' &&
                        <div className="space-y-8">
                            <InteractiveMap
                                locations={locations}
                                onLocationSelect={handleViewDetails}
                                selectedLocation={selectedLocation} />


                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredLocations?.map((location) =>
                                    <LocationCard
                                        key={location?.id}
                                        location={location}
                                        onViewDetails={handleViewDetails} />

                                )}
                            </div>
                        </div>
                    }

                    {viewMode === 'compare' &&
                        <ComparisonTool locations={locations} />
                    }
                </div>

                <div className="bg-gradient-to-b from-transparent to-primary/10 py-12 md:py-16 lg:py-20">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                        <div className="bg-card rounded-lg border border-primary/40 p-6 md:p-8 lg:p-12 text-center lime-glow">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                                <Icon name="Heart" size={32} color="var(--color-primary)" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                Ready to Begin Your Journey?
                            </h2>
                            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Connect with our conservation experts to plan your ethical elephant experience. Every journey supports elephant welfare and local communities.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    variant="default"
                                    size="lg"
                                    iconName="Calendar"
                                    iconPosition="left"
                                    className="breathing-cta">

                                    Book Consultation
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    iconName="Download"
                                    iconPosition="left">

                                    Download Brochure
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            {showDetailsModal && selectedLocation &&
                <LocationDetailsModal
                    location={selectedLocation}
                    onClose={handleCloseModal} />

            }
        </div>);

};

export default Locations;