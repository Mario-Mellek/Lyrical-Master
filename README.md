# Lyrical Master

[![Netlify Status](https://api.netlify.com/api/v1/badges/99640e77-e844-40c6-abc2-f82195731224/deploy-status)](https://app.netlify.com/sites/lyrical-master/deploys)

Table of Contents

- [About](#about)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [APIs](#apis)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [License](#license)
- [Contributing](#contributing)

## About

Lyrical Master is a web app built using React.js and bundled by Vite.js. React.js is a popular JavaScript library for building user interfaces, while Vite.js is a build tool that provides fast and efficient development and production builds.”.
The app allows users to search for a specific song or artist, and displays matched results with full song titles. Users can select the right match to find the song's lyrics. The app also supports playing the selected song on YouTube and conditionally renders a SoundCloud link if available. It's fully responsive on all devices.

The App's Logo was Created for free on [Canva](https://www.canva.com/).

## Installation

To install, run `npm i`.
To run the app, run `npm run dev`.

## Dependencies

Some of the important dependencies used in this app are:

- axios: A promise-based HTTP client for the browser and Node.js.
- react: A JavaScript library for building user interfaces.
- react-dom: Provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to.
- react-router-dom: DOM bindings for React Router.
- react-toastify: A React-based toast notification system.

## APIs

This app uses the LyricsGenuis API from RapidAPI to fetch song lyrics.

## Environment Variables

The following environment variables should be set in a `.env.local` file in the main directory containing the necessary API keys:

- `VITE_API_KEY`: Your RapidAPI API key.
- `VITE_G_API_KEY`: Your YouTube Data API (Google Cloud) key.
- `VITE_SONG_API`: The LyricsGenuis song search API URL.
- `VITE_LYRICS_API`: The LyricsGenuis lyrics API URL.
- `VITE_INFO_API`: The LyricsGenuis song info API URL.
- `VITE_VID_URL`: The YouTube Data API URL.

## Deployment

The app is hosted for free on Netlify: https://lyrical-master.netlify.app/

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
