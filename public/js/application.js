$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  console.log('ready!');

});

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
}
function createCustomMarker(coords,map,title){
  marker = new google.maps.Marker({
    position: coords,
    map: map,
    title: title,
    icon: createImage("/assets/icon.png")
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

initMap()

createMarker({lat: 37.7694, lng: -122.4862}, map, "Outside Lands");
// var info = createInfoWindow("Congratulations!");
//
google.maps.event.addListener(marker, 'click', function() {
  console.log(event);
  info.open(map,marker);
});
// function createInfoWindow(text){
//   var infowindow = new google.maps.InfoWindow({
//     content: text
//   });
//   return infowindow;
// }
