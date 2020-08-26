# Grillo & Co: Custom Furniture Designers

This repository is for the website for my client Grillo & Co, Custom Furniture Designers. Grillo and Co creates beautiful bespoke furniture for your home or workplace. If you have happened here by mistake and wish to see the wonderful and innovative furniture designs, please visit:

https://www.grilloandco.com

## Table of Contents

- [About](#about)
- [Functionality](#functionality)
- [Technical Features](#technical-features)
- [Requirements](#requirements)
- [Build Tools](#build-tools)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## About

This is a full-stack deployed website using React with Express JS that is intended to be a marketing website for a small company. The MVP of this website is to allow clients to view gallery of photos, get more information about the company and product, and contact the company to purchase a product.

## Functionality

A few highlights for the user:

1. The home page has a carousel so that multiple pictures can be seen
2. Connected to Instagram feed through Curator.io
3. Gallery information stored in MongoDB for easy updating
4. Back-end admin page allows admin to upload new photos and organize gallery
5. Hovering over gallery will enlarge the photo
6. Contact us page uses SendGrid to email owner of any contacts

## Technical Features

- This application utlizes a MERN stack - MongoDB, Express, React, and Node.js
- Back-end MongoDB storage is on Atlas: MongoDB
- This application is deployed on Heroku and redirected to a GoDaddy domain

## Requirements

If you are running from the deployed Heroku site, then there are no requirements to use. You can access directly at https://www.grilloandco.com.

If you would like to fork this application and run directly, then you will need to run:
`npm install`
in the local root folder. Note: you'll want to ensure that the command `cd client && npm install` runs as well as there is a `package.json` in both the root
folder and the client React folder.

In order to run, you will need to prime your database:

- Step One: Ensure you have mongodb installed on your local machine. Open an instance allowing you to add a database.

- Step Two: Run `use grillo-co`. This will initialize an empty database that this code can use.

Then run `npm start` in the command line in the root folder. If successful, the console will confirm the PORT that it is running. You will need to visit `http://localhost:3000` to test the functionality. Note: the back-end server is set to run on `http://localhost:3001`. This application utilized `nodemon` to run two ports
simulaneously.

## Build Tools

- Node.js v10.16.3
- Node packages (Server):

* axios v0.19.2 (https://www.npmjs.com/package/axios)

* body-parser v1.19.0 (https://www.npmjs.com/package/body-parser)
* concurrently v5.1.0 (npmjs.com/package/concurrently)
* cors v.2.8.5 (https://www.npmjs.com/package/cors)
* dotenv v8.2.0 (https://www.npmjs.com/package/dotenv)
* express v4.17.1 (https://www.npmjs.com/package/express)
* mongoose v5.9.3 (https://www.npmjs.com/package/mongoose)
* multer v1.4.2 (https://www.npmjs.com/package/multer)
* nodemon v2.0.2 (https://www.npmjs.com/package/nodemon)
* path v0.12.7 (https://www.npmjs.com/package/path)

* Node packages (Client, unless already specified above):

  - @fortawesome/fontawesome-svg-core v1.2.28 (https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core)
  - @fortawesome/free-solid-svg-icons v.5.13.0 (https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons)
  - @testing-library/jest-dom v4.2.4 (https://www.npmjs.com/package/@testing-library/jest-dom)
  - @testing-library/react v9.4.1 (https://www.npmjs.com/package/@testing-library/react)
  - @testing-library/user-event v7.2.1 (npmjs.com/package/@testing-library/user-event)
  - availity-reactstrap-validation v.2.6.1
  - bootstrap v4.4.1 (https://www.npmjs.com/package/bootstrap)
  - google-map-react v1.1.7 (https://www.npmjs.com/package/google-map-react)
  - react v16.13.0 (https://www.npmjs.com/package/react)
  - react-animated-slider v2.0.0 (https://www.npmjs.com/package/react-animated-slider)
  - react-animations v1.0.0 (https://www.npmjs.com/package/react-animations)
  - react-bootstrap v1.0.1 (https://www.npmjs.com/package/react-bootstrap)
  - react-dom v16.13.1 (https://www.npmjs.com/package/react-dom)
  - react-draggable-list v4.0.3 (https://www.npmjs.com/package/react-draggable-list)
  - react-fontawesome v1.7.1 (https://www.npmjs.com/package/react-fontawesome)
  - react-instafeed v1.0.0 (https://www.npmjs.com/package/react-instafeed)
  - react-list-drag-and-drop v0.9.2 (https://www.npmjs.com/package/react-list-drag-and-drop)
  - react-motion v0.5.2 (https://www.npmjs.com/package/react-motion)
  - react-responsive v8.1.0 (https://www.npmjs.com/package/react-responsive)
  - react-responsive-carousel v3.2.8 (https://www.npmjs.com/package/react-responsive-carousel)
  - react-router-dom v5.1.2 (https://www.npmjs.com/package/react-router-dom)
  - react-scripts v3.4.3 (https://www.npmjs.com/package/react-scripts)
  - reactstrap v8.4.1 (https://www.npmjs.com/package/reactstrap)
  - styled-components v5.1.1 (https://www.npmjs.com/package/styled-components)

* MongoDB (Atlas: MongoDB)
* Bootstrap 4.4.1
* Font Awesome
* Google Maps
* Deployed on Heroku

## Acknowledgements

- Thanks to all of the authors of Node.js packages - they are invaluable.
- Thank you to Bishop Content Studio for your help in editing content and getting SEO ready.

## License

- Licensed under the [MIT License](./LICENSE).
