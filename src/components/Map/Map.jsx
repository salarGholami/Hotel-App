import { useHotel } from "../context/HotelProvider";

function Map() {
  const { isLoading, hotels } = useHotel();
  return <div>Map</div>;
}

export default Map;
