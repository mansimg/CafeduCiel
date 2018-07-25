var map;
var center;
function initMap() {
  var NewYork = {lat: 40.765511, lng: -73.969965};
  var SanFrancisco = {lat:37.787323, lng: -122.405354};
  var LosAngeles = {lat:34.016639, lng: -118.497166};
  var Dallas = {lat: 32.781268, lng: -96.800984};
  var Chicago = {lat: 41.891684, lng: -87.630803};
  var Miami = {lat: 25.794756, lng: -80.223696};
  var Seattle = {lat: 47.608026, lng: -122.339108};
  var WashDC = {lat: 38.911539, lng: -77.031622}
  center = {lat: 39.828420, lng: -98.579490};
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: center
  });
  for(var i )
  var NewYork = new google.maps.Marker({
    position: NewYork,
    animation: google.maps.Animation.DROP,
    map: map
  });
  var SanFrancisco = new google.maps.Marker({
    position: SanFrancisco,
    animation: google.maps.Animation.DROP,
    map:map
  });
  var LosAngeles = new google.maps.Marker({
    position: LosAngeles,
    animation: google.maps.Animation.DROP,
    map:map
  });
  var Dallas = new google.maps.Marker({
    position: Dallas,
    animation: google.maps.Animation.DROP,
    map: map
  });
  var Chicago = new google.maps.Marker({
    position: Chicago,
    animation: google.maps.Animation.DROP,
    map: map
  });
  var Miami = new google.maps.Marker({
    position: Miami,
    animation: google.maps.Animation.DROP,
    map: map
  });
  var Seattle = new google.maps.Marker({
    position: Seattle,
    animation: google.maps.Animation.DROP,
    map: map
  });
  var WashDC = new google.maps.Marker({
    position: WashDC,
    animation: google.maps.Animation.DROP,
    map: map
  });
  var directory = ["Los Angeles: 1450-B 3rd Street Promenade, Santa Monica, CA 90401",
                  "San Francisco: 40 Grant Ave, San Francisco, CA 94133",
                  "New York: 690 Madison Ave, New York, NY 10065",
                  "Dallas: 1400 Elm St #3750, Dallas, TX 75202",
                  "Chicago: 520 N Clark St, Chicago, IL 60654",
                  "Miami: 1720 NW 20th St, Miami, FL 33142",
                  "Seattle: 1400 1st Ave, Seattle, WA 98101",
                  "Washington DC: 1601 14th St NW, Washington, DC 20009"];
  var names = ["New York", "Los Angeles","San Francisco", "Dallas", "Chicago", "Miami", "Seattle", "Washington DC"];
  var markers = [NewYork, LosAngeles, SanFrancisco, Dallas, Chicago, Miami, Seattle, WashDC];
  for(var x = 0; x < names.length; x++){
    var name = names[x];
    var contentString = directory[x];

    var infowindow = new google.maps.InfoWindow({
        title: name
        content: contentString
    });

    google.maps.event.addListener(markers[x], 'click', function() {
      infowindow.open(map, markers[x]);
    });
  }
}
function findLocation(){
  var directory = ["Los Angeles: 1450-B 3rd Street Promenade, Santa Monica, CA 90401",
                  "San Francisco: 40 Grant Ave, San Francisco, CA 94133",
                  "New York: 690 Madison Ave, New York, NY 10065",
                  "Dallas: 1400 Elm St #3750, Dallas, TX 75202",
                  "Chicago: 520 N Clark St, Chicago, IL 60654",
                  "Miami: 1720 NW 20th St, Miami, FL 33142",
                  "Seattle: 1400 1st Ave, Seattle, WA 98101",
                  "Washington DC: 1601 14th St NW, Washington, DC 20009"];

  var zip = parseInt(document.getElementById("ziplocator").value);

  // location.replace("location.html");

  var address = document.getElementById("address");

  // var locationAddress = document.getElementById("address")
  if(zip > 00000 && zip < 99999){
    if(zip >= 00000 && zip < 12500){
      map.setCenter(new google.maps.LatLng(40.765511, -73.969965));
      map.setZoom(12);

      // map.panTo(NewYork);÷\
      //alert("Your nearest location is located in New York. The address is \n" + directory[2]);
    }
    else if(zip >= 12500 && zip < 25000){
      alert("Your nearest location is located in Washington DC. The address is \n" + directory[7]);
    }
    else if(zip >= 25000 && zip < 40000){
      alert("Your nearest location is located in Miami. The address is \n" + directory[5]);
    }
    else if(zip >= 40000 && zip < 65000){
      alert("Your nearest location is located in Chicago. The address is \n" + directory[4]);
    }
    else if(zip >= 65000 && zip < 85000){
      alert("Your nearest location is located in Dallas. The address is \n" + directory[3]);
    }
    else if (zip >= 85000 && zip < 92500){
      alert("Your nearest location is located in Los Angeles. The address is \n" + directory[0
      ]);
    }
    else if (zip >= 92500 && zip < 97000){
      alert("Your nearest location is located in San Francisco. The address is \n" + directory[1
      ]);
    }
    else if (zip >= 97000 && zip < 99999){
      alert("Your nearest location is located in Seattle. The address is \n" + directory[6
      ]);
    }
  }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
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
