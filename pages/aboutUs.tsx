import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const AboutUs: React.FC = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
      setLatitude(position.coords.latitude.toString());
      setLongitude(position.coords.longitude.toString());
    });
  });
  const mapData = {
    center: [parseInt(latitude), parseInt(longitude)],
    zoom: 5
  };
  //56.3287, 44.002
  const coordinates = [[parseInt('56.3287'), parseInt('44.002')]];

  return (
    <Layout>
      <div className="aboutUs container">
        <h1 className="abouttitle">aboutUs</h1>
        <div>
          <YMaps>
            <Map defaultState={mapData}>
              {coordinates.map((coordinate, i) => (
                <Placemark geometry={coordinate} key={i} />
              ))}
            </Map>
          </YMaps>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
