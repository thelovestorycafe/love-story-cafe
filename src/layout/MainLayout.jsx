import React from 'react';
import Header from "./header/Header";
import AppRoutes from "../routs/AppRoutes";
import Footer from "./footer/Footer";

const MainLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <AppRoutes />
            <Footer />
        </React.Fragment>
    )
}

export default MainLayout
