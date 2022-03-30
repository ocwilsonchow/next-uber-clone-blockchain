import LocationSelector from '../components/LocationSelector'
import Map from '../components/Map'
import Navbar from '../components/Navbar'

const style ={
  wrapper: `h-95 w-90 flex flex-col`,
  main: `h-full w-full flex-1 z-10`,
  mapContainer: `flex-1 w-full h-full`,
  rideRequestContainer: `h-full w-[400px] ml-[1rem] py-[3rem] absolute top-0 left-0 flex flex-col justify-end z-20`,
  rideRequest: `h-full max-h-[700px] bg-white rounded-lg flex flex-col`
}


export default function Home() {
  return (
    <div className={style.wrapper} >
      <Navbar />
      <div className={style.main}>
        <div className={style.mapContainer}><Map /></div>
      </div>
      <div className={style.rideRequestContainer}>
          <div className={style.rideRequest}>
            <LocationSelector />
            {/* confirm ride */}
          </div>
      </div>
    </div>
  )
}
