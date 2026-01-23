import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import Breadcrumb from '../../components/Breadcrumb';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import TeamSection from './components/TeamSection';
import TimelineSection from './components/TimelineSection';
import ImpactMetrics from './components/ImpactMetrics';
import CertificationSection from './components/CertificationSection';
import CTASection from './components/CTASection';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
                    {/* <Breadcrumb /> */}
                </div>

                <HeroSection />
                <MissionSection />
                <TeamSection />
                <TimelineSection />
                <ImpactMetrics />
                <CertificationSection />
                <CTASection />
            </main>

            <Footer />
        </div>
    );
};

export default AboutUs;