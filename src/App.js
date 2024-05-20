import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [city, setCity] = useState("");
  let [wDetails, setWdetails] = useState();
  let getData = (event) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric appid=2022cd42a2b47b700652fae5b2911486
`)
      .then((res) => res.json())
      .then((finalRes) => {
        if (finalRes.cod == "404") {
          setWdetails(undefined);
        } else {
          setWdetails(finalRes);
        }
      });
    event.preventDefault();
    setCity("");
  };
  return (
    <div className="w-[100%] h-[100vh] bg-[#4aacb1]">
      <div className="max-w-[1320px] mx-auto">
        <div className="text-[40px] font-bold py-[50px] text-white">
          Simple weather App
        </div>
        <form action="" onSubmit={getData}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-[300px] h-[40px] pl-3"
            placeholder="City Name"
          />
          <button className="bg-[blue] m-2 p-2 h-[40px]">Submit</button>
        </form>

        <div className="w-[400px] mx-auto bg-white shadow-lg mt-[40px] p-[25px]">
          {wDetails !== undefined ? (
            <>
              <h3 className="font-bold text-[30px]">
                Jaipur <span className="bg-[yellow]">IN</span>
              </h3>
              <h2 className="font-bold text-[40px]">{wDetails.main.temp}</h2>
              <img
                src="https://openweathermap.org/img/wn/50d@2x.png"
                alt="logo"
              />
            </>
          ) : (
            "No Data Found"
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
