import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return <WeatherForecast />;
}
const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json"
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error feching weather data:", error);
      }
    };
    fetchData();
  }, []);
};
return (
  <>
    <h1>天気</h1>
    <pre>{JSON.stringify(weatherData, null, 2)}</pre>
  </>
);
export default App;

// function App() {
//   // const [count, setCount] = useState(0)
//   // useEffect(()=>{
//   //   document.title=`You clicked${count} times`;
//   // }, [count,setCount])
//   const [selectedCity, setSelectedCity] = useState(""); //都市名を保存するためのuseState

//   useEffect(() => {
//     if (selectedCity !== "") {
//       //初回マウント時はアラートが出ないようにする
//       alert(`${selectedCity}を選択`);
//     }
//   }, [selectedCity]);

//   const handleChange = (e) => {
//     setSelectedCity(e.target.value);
//   };
//   return (
//     <>
//       <select onChange={handleChange}>
//         <option value="tokyo">東京</option>
//         <option value="osaka">大阪</option>
//         <option value="sapporo">札幌</option>
//       </select>
//     </>
//   );
// }

// export default App;
