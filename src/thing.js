import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import L from 'leaflet'

import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

class App extends Component {
  // componentDidMount() {
  //   const position = [51.505, -0.09]
  //   const map = L.map('map').setView(position, 13)

  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  //   }).addTo(map)

  //   L.marker(position)
  //     .addTo(map)
  //     .bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/*<div id="map" style={{ height: 400, width: 400 }}></div>*/}
        <Map center={[51.505, -0.09]} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default App;
