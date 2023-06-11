import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import PopularClass from '../PopularClass/PopularClass';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sunshine Academy || Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;