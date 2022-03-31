import React, { useEffect, useContext } from "react";
import mapboxgl from "mapbox-gl";
import { UberContext } from "../context/uberContext";

const style = {
  wrapper: `w-full h-screen`,
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [114.17, 22.315],
      zoom: 14,
    });
  }, []);

  return <div className={style.wrapper} id="map"></div>;
};

export default Map;
