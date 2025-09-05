# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Weather-Now

A minimal, responsive React app to check **live weather** for any city, state, or address using the free **Open-Meteo API**.

---

## Table of Contents
- [About](#-about)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## About
Weather-Now is built on **React + Vite**.  
It provides a simple interface to search for weather in **cities, states, or full addresses** and shows:  
- Temperature  
- Humidity  
- Wind speed  
- Weather condition label  

This README also keeps info from the Vite + React template:

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh  
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

For production, TypeScript + type-aware ESLint is recommended. See [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for integration details.

---

## Features
-  Search by **City**, **State**, or **Full Address**
-  Fetches live weather via **Open-Meteo API**
-  Displays temperature, humidity, wind speed, and condition label
-  Clean UI with **Tailwind CSS**
-  Fully responsive for desktop & mobile
-  Graceful error handling ("City not found" shows in red)
-  Loading spinner while fetching data

---

## Project Structure

Weather-Now/
│
├── public/
|
├── src/
│ ├── components/
│ │ ├── Loader.jsx   # Spinner shown while fetching data
│ │ └── WeatherCard.jsx   # Displays weather info
│ │
│ ├── App.jsx   # Main app logic (search + API fetch)
│ ├── main.jsx   # React entry point
│ └── index.css   # Tailwind & global styles
│
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md



---

## Tech Stack
- **React** (Frontend)  
- **Vite** (Build Tool & Dev Server)  
- **Tailwind CSS** (Styling)  
- **Open-Meteo API** (Weather + Geocoding)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/CheapStudent/Aganitha-weather_now-assignment.git
cd Aganitha-weather_now-assignment

---

1. Clone the repository
 npm install

3. Run Development Server
  npm run dev

Access app at http://localhost:5173

Usage

1. Enter any city, state, or full address in the search bar.

2. Click Search.

3. View temperature, humidity, wind speed, and condition label.

4. If the city is not found, a red alert will show.  

Developed by -> Ravindra Gupta
E-mail -> gravindra.dev@gmail.com & rgslotan272206@gmail.com



