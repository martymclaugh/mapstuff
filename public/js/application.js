$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  console.log('ready!');

});
var myLatLng = {lat: 37.784580, lng: -122.397437};
var marker;
function createMarker(coords, map, title){
  marker = new google.maps.Marker({
    position: coords,
    map: map,
    title: title
  });
}
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 37.7694, lng: -122.4862},
    zoom: 14
  });
  //  example marker placement
  marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    animation: google.maps.Animation.DROP
  });

  //  example marker placement
  marker2 = createMarker({lat: 37.7694, lng: -122.4862}, map, "Outside Lands");

  marker3 = createCustomMarker({lat: 37.8694, lng: -122.5862}, map, "Outside Lands");
}
function createCustomMarker(coords,map,title){
  marker = new google.maps.Marker({
    position: coords,
    map: map,
    title: title,
    // icon: createImage("/assets/icon.png")
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/174-free-google-maps-pointer.png/286px-174-free-google-maps-pointer.png'
  });
}

function createImage(url){
  var image = {
    url: url,
    size: new google.maps.Size(32, 32),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 32)
  };
  return image;
}

// initMap()

marker = createMarker({lat: 37.7694, lng: -122.4862}, map, "Outside Lands");
// var info = createInfoWindow("Congratulations!");
//
google.maps.event.addListener(marker, 'click', function(event) {
  console.log(event);
  info.open(map,marker);
});
// function createInfoWindow(text){
//   var infowindow = new google.maps.InfoWindow({
//     content: text
//   });
//   return infowindow;
// }
