// Initialize and add the map
function initMap() {
  // Your location. გრძედს და განედს ვეძებთ https://www.latlong.net/-ზე
  const loc = { lat: 42.361145, lng: -71.057083 };
  // Centered map on location. map - არის div-ის კლასი, რომელშიც მოთავსდება რუკა
  const map = new google.maps.Map(document.querySelector('.map'), {
    // ზუმი
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location. ვქმნით მარკერს (“წვეთს”) ობიექტის მისათითებლად
  const marker = new google.maps.Marker({ position: loc, map: map });
}
