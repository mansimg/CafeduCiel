function initMap() {
  var NewYork = {lat: 40.765511, lng: -73.969965};
  var SanFrancisco = {lat:37.787323, lng: -122.405354};
  var LosAngeles = {lat:34.016639, lng: -118.497166};
  var center = {lat: 39.828420, lng: -98.579490};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: center
  });
  var NewYork = new google.maps.Marker({
    position: NewYork,
    map: map
  });
  var SanFrancisco = new google.maps.Marker({
    position: SanFrancisco,
    map:map
  });
  var LosAngeles = new google.maps.Marker({
    position: LosAngeles,
    map:map
  });

}

// var ourLoc;
// var view;
// var map;
//
// function init(){
//  ourLoc = ol.proj.fromLonLat([37.330813, -121.894095]);
//  view = new ol.View({
//    center: ourLoc,
//    zoom: 6
//  });
//
//  map = new ol.Map({
//    target: 'map',
//    layers: [
//      new ol.layer.Tile({
//        source: new ol.source.OSM()
//      })
//    ],
//    loadTilesWhileAnimating: true,
//    view: view
//  });
// }
// function panHome(){
//  view.animate({
//    center: ourLoc,
//    duration: 2000
//  });
// }
// window.onload = init;
