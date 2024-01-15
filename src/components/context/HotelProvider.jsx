import { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const hotelContext = createContext();

function HotelProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const destination = searchParams.get("destination");
  const room = JSON.parse(searchParams.get("options"))?.room;

  const { isLoading, data: hotels } = useFetch(
    "http://localhost:5000/hotels",
    `name_like=${destination || ""}&accommodates_gte=${room || 1} `
  );

  return (
    <hotelContext.Provider value={{ isLoading, hotels }}>
      {children}
    </hotelContext.Provider>
  );
}

export default HotelProvider;

export function useHotel() {
  return useContext(hotelContext);
}
