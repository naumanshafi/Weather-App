# Weather App

A simple and responsive weather application built with React and Vite. The app allows users to search for the current weather of any city and displays weather data such as temperature, humidity, and wind speed.

## Features

- **Current Weather**: Displays the current weather conditions including temperature, humidity, and wind speed.
- **Search Functionality**: Users can search for the weather by entering the name of any city.
- **Dynamic Backgrounds**: The background changes dynamically based on the weather condition (e.g., sunny, cloudy, rainy).
- **Loading Indicator**: A loading animation is shown while fetching the weather data.
- **Default Location**: Displays the weather of a default location (Lahore) when the app is first loaded.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For setting up the development environment.
- **OpenWeatherMap API**: For fetching weather data.
- **CSS**: For styling the application.
- **FontAwesome**: For weather-related icons.

## Installation

1. **Clone the repository**:
   \`\`\`bash
   git clone https://github.com/naumanshafi/weather-app.git
   cd weather-app
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up your environment variables**:
   - Create a \`.env\` file in the root directory of the project.
   - Add your OpenWeatherMap API key to the \`.env\` file:
     \`\`\`plaintext
     VITE_WEATHER_API_KEY=your_api_key_here
     \`\`\`

4. **Start the development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

   The app should now be running on \`http://localhost:3000\`.

## Usage

- **Search for a location**: Enter the name of a city in the search bar and press \`Enter\` or click the search icon.
- **View weather details**: The app will display the current weather, including temperature, humidity, and wind speed.
- **Default location**: If no search is performed, the app displays the weather for Lahore by default.

## Screenshots

(Add screenshots of your app here to show what it looks like.)

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Any contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
- [Vite](https://vitejs.dev/) for the fast and simple development setup.
- [FontAwesome](https://fontawesome.com/) for the icons used in the app.
"""
