import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Replace 'path-to-your-marker-image.png' with the actual path to your custom marker image
const customMarkerIcon = new L.Icon({
  iconUrl: require('./../img/location.png'),
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35]
});

const RestaurantsNearby = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [location, setLocation] = useState({ latitude: 36.8601, longitude: 10.1934 }); // Default to Ariana, Tunisia
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchRestaurants(location.latitude, location.longitude);
  }, [location]);

  const fetchRestaurants = async (latitude, longitude) => {
    const overpassUrl = 'https://overpass-api.de/api/interpreter';
    const query = `
      [out:json];
      (
        node["amenity"="restaurant"](around:1000,${latitude},${longitude});
        way["amenity"="restaurant"](around:1000,${latitude},${longitude});
        relation["amenity"="restaurant"](around:1000,${latitude},${longitude});
      );
      out center;
    `;

    try {
      const response = await axios.get(overpassUrl, {
        params: { data: query },
      });
      setRestaurants(response.data.elements);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    const nominatimUrl = 'https://nominatim.openstreetmap.org/search';
    try {
      const response = await axios.get(nominatimUrl, {
        params: {
          q: search,
          format: 'json',
          limit: 1
        },
      });

      if (response.data && response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setLocation({ latitude: parseFloat(lat), longitude: parseFloat(lon) });
        setSearch(''); // Clear the search input
      } else {
        alert('Location not found.');
      }
    } catch (error) {
      console.error('Error during geocoding:', error);
      alert('Error searching for location.');
    }
  };

  return (
    <div>
      <h2>Restaurants Near Me</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a location"
        />
        <button type="submit">Search</button>
      </form>
      <MapContainer center={[location.latitude, location.longitude]} zoom={15} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {restaurants.map((restaurant, index) =>
          restaurant.lat && restaurant.lon ? (
            <Marker key={index} position={[restaurant.lat, restaurant.lon]} icon={customMarkerIcon}>
              <Popup>{restaurant.tags && restaurant.tags.name ? restaurant.tags.name : 'Restaurant'}</Popup>
            </Marker>
          ) : null
        )}
      </MapContainer>
      <div className="cards">
      <Row xs={1} md={3} className="g-3">
        {restaurants.map((restaurant, index) =>
          restaurant.lat && restaurant.lon ? (
            <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={'https://th.bing.com/th/id/R.11e615426ae5e806ffb8ac962c51e062?rik=FnmVnQd8AG0XwA&pid=ImgRaw'} />
                            <Card.Body>
                                <Card.Title>{restaurant.tags && restaurant.tags.name ? restaurant.tags.name : 'Restaurant'}</Card.Title>
                                <hr/>
                                <Card.Text>({restaurant.lat}, {restaurant.lon})</Card.Text>
                                <hr/>
                            </Card.Body>
                        </Card>
              </Col>
          ) : null
        )}
      </Row>
      </div>

    </div>
  );
};

export default RestaurantsNearby;
