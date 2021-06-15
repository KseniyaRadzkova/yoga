"use strict"

function initMap() {
    const uluru = { lat: -37.820418, lng: 144.9451951 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }