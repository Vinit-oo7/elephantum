import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "../src/components/ScrollToTop";
import ErrorBoundary from "../src/components/ErrorBoundary";
import NotFound from "../src/pages/NotFound";
import Contact from '../src/pages/contact';
import Experience from '../src/pages/experience';
import AboutThem from '../src/pages/about-them';
import AboutUs from '../src/pages/about-us';
import Locations from '../src/pages/locations';
import Homepage from '../src/pages/homepage';

const Routes = () => {
    return (
        <BrowserRouter>
            <ErrorBoundary>
                <ScrollToTop />
                <RouterRoutes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/about-them" element={<AboutThem />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/locations" element={<Locations />} />
                    <Route path="/homepage" element={<Homepage />} />
                    <Route path="*" element={<NotFound />} />
                </RouterRoutes>
            </ErrorBoundary>
        </BrowserRouter>
    );
};

export default Routes;
