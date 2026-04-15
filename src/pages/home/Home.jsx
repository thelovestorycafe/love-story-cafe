import React from "react"
import HeroSection from "../../components/hero-section/HeroSection"
import SignatureSection from "../../components/signature/SignatureSection"
import OurStory from "../../components/our-strory/OurStory"
import MenuPreview from "../../components/menu-preview/MenuPreview"
import WhyChooseUs from "../../components/why-choose-us/WhyChooseUs"
import Testimonials from "../../components/testimonials/Testimonials"
import ReservationCta from "../../components/reservation-cta/ReservationCta"

const Home = () => {

    return (
        <React.Fragment>
            <HeroSection />
            <SignatureSection />
            <OurStory />
            <MenuPreview />
            <WhyChooseUs />
            <Testimonials />
            <ReservationCta />
        </React.Fragment>
    )
}

export default Home
