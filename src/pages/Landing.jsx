import { useState, useEffect } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom";

function Landing() {
    const location = useLocation();
    const user = location.state?.user || "Guest";  

        // State for weather data
        const [weather, setWeather] = useState({ temp: null, condition: null });

        // Fetch Weather Data
        useEffect(() => {
            const fetchWeather = async () => {
                try {
                    const apiKey = "9e2f483b43a855cabbdf6c768ba639dd"; // Replace with your OpenWeatherMap API key
                    const city = "Chennai"; // Replace with the desired city
                    const response = await fetch(
                        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9e2f483b43a855cabbdf6c768ba639dd`
                    );
                    const data = await response.json();
                    setWeather({
                        temp: data.main.temp,
                        condition: data.weather[0].description,
                    });
                } catch (error) {
                    console.error("Error fetching weather data:", error);
                }
            };
            fetchWeather();
        }, []);    

    // Get the current date
    const currentDate = new Date();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    const formattedDate = `${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}`; // Format: "Month Day, Year"
    const formattedYear = `${currentDate.getFullYear()}`

    return (
        <div className="bg-[#212E37] p-16">
        <div className="bg-[#A9E0C1] p-10 border rounded-md">
          {/* Welcome Message */}
          <h1 className="text-3xl font-medium ">Welcome {user}!</h1>
  
          {/* Header */}
          <Header />
  
          {/* Cards */}
          <div className="flex justify-between gap-4 my-5 flex-wrap">
  <Card
    bgcolor="#FF8D4E"
    title={weather.temp ? `${weather.temp}°C` : "Loading..."}
    subtitle={weather.condition ? weather.condition : "Fetching weather..."}
    className="shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
  />
  <Card
    bgcolor="#C43E5F"
    title={formattedDate}
    subtitle={<strong>{formattedYear}</strong>}
    className="shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
  />
  <Card
    bgcolor="#26C3A6"
    title="Build Using"
    subtitle="React"
    className="shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
  />
</div>

  
          {/* Todo Container */}
          <TodoContainer />
        </div>
      </div>
    );
  }
export default Landing;
