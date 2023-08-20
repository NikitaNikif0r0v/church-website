//import Burger from '@/components/Burger';
import LifeChurch from '@/components/LifeChurch';
import Map from '@/components/Map';
import Navigation from '@/components/Navigation';
//import { Route, Switch } from 'react-router-dom';
//import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


export default function Home() {
    return (
        <>
            {/* <Navigation /> */}
            <LifeChurch />
            <Map />
        </>
    );
}
