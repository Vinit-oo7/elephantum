import { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ExperienceGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('all');

    const galleryImages = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1647829157289-e8d3531d7358",
            imageAlt: "Close-up portrait of adult elephant with detailed wrinkled skin texture and wise eyes looking directly at camera in natural forest habitat",
            category: "wildlife",
            title: "Gentle Giants",
            location: "Thailand Sanctuary"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1606572065506-2cf9bd2881e3",
            imageAlt: "Baby elephant joyfully playing in shallow river water creating splashes with trunk raised high surrounded by green vegetation",
            category: "moments",
            title: "Pure Joy",
            location: "Sri Lanka Reserve"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1634662058926-3da6fb6d7617",
            imageAlt: "Elephant herd of six individuals walking in single file across golden savanna during golden hour with dramatic cloudy sky",
            category: "wildlife",
            title: "Family Bonds",
            location: "Kenya Conservancy"
        },
        {
            id: 4,
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a651086d-1768148645003.png",
            imageAlt: "Tourist group of four people standing at safe distance observing elephant feeding on bamboo with professional guide explaining behavior",
            category: "travelers",
            title: "Learning Together",
            location: "India Sanctuary"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1605982151110-13562ccc3307",
            imageAlt: "Dramatic black and white photograph of elephant silhouette against bright backlit sky showing detailed ear and trunk outline",
            category: "photography",
            title: "Artistic Vision",
            location: "Botswana Delta"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1712299501886-5e1297512177",
            imageAlt: "Mother elephant with baby elephant walking side by side through tall grass with baby\'s trunk touching mother\'s leg showing protective bond",
            category: "moments",
            title: "Maternal Love",
            location: "Thailand Sanctuary"
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1664892378887-be566a4cc963",
            imageAlt: "Elephant bathing in muddy waterhole with trunk spraying water over back creating dramatic water droplet spray in sunlight",
            category: "wildlife",
            title: "Bath Time",
            location: "Sri Lanka Reserve"
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1650936374671-6d6f95c0bbb7",
            imageAlt: "Sunset silhouette of three elephants walking across horizon line with vibrant orange and pink sky reflecting in water puddles",
            category: "photography",
            title: "Golden Hour",
            location: "Kenya Conservancy"
        },
        {
            id: 9,
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b6f6daed-1768148644129.png",
            imageAlt: "Young elephant calf playfully interacting with conservation staff member in khaki uniform showing trust and comfort in sanctuary environment",
            category: "travelers",
            title: "Building Trust",
            location: "India Sanctuary"
        }];


    const categories = [
        { value: 'all', label: 'All Experiences', icon: 'Grid' },
        { value: 'wildlife', label: 'Wildlife', icon: 'Leaf' },
        { value: 'moments', label: 'Special Moments', icon: 'Heart' },
        { value: 'travelers', label: 'Travelers', icon: 'Users' },
        { value: 'photography', label: 'Photography', icon: 'Camera' }];


    const filteredImages = filter === 'all' ?
        galleryImages :
        galleryImages?.filter((img) => img?.category === filter);

    const openLightbox = (image) => {
        setSelectedImage(image);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const navigateImage = (direction) => {
        const currentIndex = filteredImages?.findIndex((img) => img?.id === selectedImage?.id);
        const newIndex = direction === 'next' ?
            (currentIndex + 1) % filteredImages?.length :
            (currentIndex - 1 + filteredImages?.length) % filteredImages?.length;
        setSelectedImage(filteredImages?.[newIndex]);
    };

    return (
        <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Visual Chronicles
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Authentic moments captured by our travelers and conservation partners
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
                    {categories?.map((category) =>
                        <button
                            key={category?.value}
                            onClick={() => setFilter(category?.value)}
                            className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 ${filter === category?.value ?
                                'bg-primary text-primary-foreground' :
                                'bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary'}`
                            }>

                            <Icon name={category?.icon} size={18} />
                            <span className="text-sm md:text-base">{category?.label}</span>
                        </button>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {filteredImages?.map((image) =>
                        <div
                            key={image?.id}
                            onClick={() => openLightbox(image)}
                            className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3]">

                            <Image
                                src={image?.image}
                                alt={image?.imageAlt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                                        {image?.title}
                                    </h3>
                                    <p className="text-sm text-gray-300 flex items-center gap-2">
                                        <Icon name="MapPin" size={14} />
                                        {image?.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {selectedImage &&
                    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                            aria-label="Close lightbox">

                            <Icon name="X" size={24} />
                        </button>

                        <button
                            onClick={() => navigateImage('prev')}
                            className="absolute left-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                            aria-label="Previous image">

                            <Icon name="ChevronLeft" size={24} />
                        </button>

                        <button
                            onClick={() => navigateImage('next')}
                            className="absolute right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                            aria-label="Next image">

                            <Icon name="ChevronRight" size={24} />
                        </button>

                        <div className="max-w-5xl w-full">
                            <img
                                src={selectedImage?.image}
                                alt={selectedImage?.imageAlt}
                                className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />

                            <div className="mt-6 text-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    {selectedImage?.title}
                                </h3>
                                <p className="text-base md:text-lg text-gray-300 flex items-center justify-center gap-2">
                                    <Icon name="MapPin" size={18} />
                                    {selectedImage?.location}
                                </p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </section>);

};

export default ExperienceGallery;