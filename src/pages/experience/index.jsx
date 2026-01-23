import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import Breadcrumb from '../../components/Breadcrumb';
import ExperienceHero from './components/ExperienceHero';
import ExperienceTypes from './components/ExperienceTypes';
import ExperienceGallery from './components/ExperienceGallery';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import ExperienceCustomizer from './components/ExperienceCustomizer';
import SeasonalGuide from './components/SeasonalGuide';

const Experience = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="">
                <div className="px-4 md:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
                    {/* <Breadcrumb /> */}
                </div>

                <ExperienceHero />
                <ExperienceTypes />
                <ExperienceGallery />
                <TestimonialsCarousel />
                <SeasonalGuide />
                <ExperienceCustomizer />
            </main>

            <Footer />
        </div>
    );
};

export default Experience;