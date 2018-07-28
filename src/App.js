import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    var center = {lat: 40.43349025536598, lng: -79.9543333053589};
    var centerArr = [ center.lat, center.lng ];

    var L = window.L;
    var mymap = L.map('map').setView(centerArr, 14);
    window.mymap = mymap;

    Promise.all([
      { name: 'Demo1', address: '3305 ward street Pittsburgh PA' }, 
      { name: 'Demo2', address: '3309 ward street Pittsburgh PA' }, 
      { name: 'Demo3', address: '3250 ward street Pittsburgh PA' }, 
    ].map(function (person) {
      return window.fetch('https://nominatim.openstreetmap.org/search/' + encodeURIComponent(person.address) + '?format=json')
        .then(result => result.json())
        .then(body => {
          console.log({person, body: body[0]});
          return {person, body: body[0]};
        })
    })).then(function (results) {
      results = results.map(function (person) {
        person.coords = [ person.body.lat,  person.body.lon ];
        return person;
      });
      console.log(results);

      results.forEach(function (result) {
        console.log("passing options", result.person, "available", result);
        L.marker(result.coords, {person: result.person}).addTo(mymap).on('click', function() { alert(JSON.stringify(this.options.person)) });
      });
    });

    var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 20, attribution: osmAttrib});

    mymap.addLayer(osm);
  }

  render() {
    return (
      <div id="map" style={{ height: 500 }}></div>
    );
  }
}

export default App;
