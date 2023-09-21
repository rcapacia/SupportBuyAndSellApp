import axios from "axios";

// Define your Google Maps Geocoding API key
const GOOGLE_MAPS_API_KEY = "AIzaSyBU0ZdYhzfCYD0SJGYK72kDdw8xXFI2RK8";

// Function to fetch coordinates using the Geocoding API
async function fetchCoordinates(address) {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json`,
      {
        params: {
          address,
          key: GOOGLE_MAPS_API_KEY,
        },
      }
    );

    const { results } = response.data;
    if (results && results.length > 0) {
      const { lat, lng } = results[0].geometry.location;
      return { lat, lng };
    } else {
      throw new Error("No results found for the address.");
    }
  } catch (error) {
    throw new Error("Error fetching coordinates: " + error.message);
  }
}

export default fetchCoordinates;
