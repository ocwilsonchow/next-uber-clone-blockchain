import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

const style = {
  wrapper: `w-full h-screen`,
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN


const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-73.990593, 40.740121],
      zoom: 3,
    });
  }, []);

  return <div className={style.wrapper} id='map'></div>;
};

export default Map;
