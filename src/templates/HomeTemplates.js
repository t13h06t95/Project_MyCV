import React from 'react';
import {Route} from "react-router-dom"
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

export const HomeTemplates = (props) => {
    let {Component,path} = props;

    return <Route exact path={path} render={(propsRoute) => {
        return <div className="container">
            <Header />
            <Component {...propsRoute} />
            <Footer />
        </div>

    }} />
}