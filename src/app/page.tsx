//import Burger from '@/components/Burger';
import Communication from '@/components/Tailwind_youtube';
//import LifeChurch from '@/components/Slider_foto';
import Map from '@/components/Map';
import Form from '@/components/Form';
//import Navigation from '@/components/Navigation';
//import { Route, Switch } from 'react-router-dom';
//import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


export default function Home() {
    return (
        <>
            <Communication/>
            {/* <LifeChurch /> */}
            <Map />
            <Form/>
        </>
    );
}
