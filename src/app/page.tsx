import Burger from '@/components/Burger';
import LifeChurch from '@/components/LifeChurch';
import Map from '@/components/Map';
import Navigation from '@/components/Navigation';

export default function Home() {
    return (
        <>
            <Navigation />
            {/* <Burger /> */}
            <LifeChurch />
            <Map />
        </>
    );
}
