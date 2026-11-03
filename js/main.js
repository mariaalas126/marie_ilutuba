const lat = 59.4370;
const lng = 24.7535;
const zoomLevel = 15;

const map = L.map('map').setView([lat, lng], zoomLevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([lat, lng]).addTo(map);
marker.bindPopup("<b>Marie ilutuba</b><br>Tule külla!").openPopup();