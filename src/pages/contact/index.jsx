import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import Breadcrumb from '../../components/Breadcrumb';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import LocationMap from './components/LocationMap';
import FAQ from './components/FAQ';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-1 ">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
                    {/* <Breadcrumb /> */}
                </div>

                <ContactHero />
                <ContactForm />
                <ContactInfo />
                <LocationMap />
                <FAQ />
            </main>

            <Footer />
        </div>
    );
};

export default Contact;