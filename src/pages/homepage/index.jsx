import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import Breadcrumb from '../../components/Breadcrumb';
import HeroSection from './components/HeroSection';
import WhyElephantumSection from './components/WhyElephantumSection';
import FeaturedLocationsSection from './components/FeaturedLocationsSection';
import UniqueExperiencesSection from './components/UniqueExperiencesSection';
import CallToActionSection from './components/CallToActionSection';

const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1 ">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
                    {/* <Breadcrumb /> */}
                </div>

                <HeroSection />
                <WhyElephantumSection />
                <FeaturedLocationsSection />
                <UniqueExperiencesSection />
                <CallToActionSection />
            </main>

            <Footer />
        </div>
    );
};

export default Homepage;