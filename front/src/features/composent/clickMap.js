export default function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        L.marker([lat, lng], { greenIcon }).addTo(map);
      }
    });
    return null;
  }