import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import Breadcrumb from '../../components/Breadcrumb';
import HeroSection from './components/HeroSection';
import IntelligenceFactsGrid from './components/IntelligenceFactsGrid';
import BehaviorTimeline from './components/BehaviorTimeline';
import ConservationSuccess from './components/ConservationSuccess';
import DocumentarySection from './components/DocumentarySection';
import CallToAction from './components/CallToAction';

const AboutThem = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-1">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6">
                    {/* <Breadcrumb /> */}
                </div>

                <HeroSection />
                <IntelligenceFactsGrid />
                <BehaviorTimeline />
                <ConservationSuccess />
                <DocumentarySection />
                <CallToAction />
            </main>

            <Footer />
        </div>
    );
};

export default AboutThem;