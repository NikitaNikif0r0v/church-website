import Burger from '@/components/Burger';
import LifeChurch from '@/components/LifeChurch';
import Map from '@/components/Map';
import Navigation from '@/components/Navigation';
//import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import History from '@/components/History';

export default function Home() {
    return (
        <>
            <Navigation />

            {/* <Switch> */}
        {/* Other routes */}
            {/* <Route path='/history' component={History} /> */}
            {/* </Switch> */}

            {/* <Routes> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/history" element={<History />} /> */}
          {/* Other routes */}
        {/* </Routes> */}
      {/* </Router> */}

            {/* <Burger /> */}
            <LifeChurch />
            <Map />
        </>
    );
}
