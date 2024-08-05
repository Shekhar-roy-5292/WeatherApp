// import axios from "axios";
// export class MateoAPI {
//   static async fetchWeather(coords) {
//     return (
//       await axios.get(
//         `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
//       )
//     ).data;
//   }
// }
import axios from "axios";
export class MateoAPI {
  static async fetchWeather(coords) {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
    );
    return response.data;
  }

  static async fetchCity(coords) {
    const {
      address: { city, village, town },
    } = (
      await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.lat}&lon=${coords.lng}`
      )
    ).data;
    return city || village || town;
  }
}