import Image from 'next/image'
//import Header from './Header/Header'
import Burger from './Burger/Burger'
import Map from './Map/Map'
//import LifeChurch from './LifeChurch/LifeChurch'
export default function Home() {
  return (
    <html>
      <body>
        <Burger/>
        {/* <LifeChurch/> */}
        <Map/>
      </body>
    </html>
  )
}
