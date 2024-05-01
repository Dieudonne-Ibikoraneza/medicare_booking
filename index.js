let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 1.9, lng: 30.04 },
    zoom: 8,
  });
}

initMap();