# IndustryConnect Frontend

IndustryConnect (<https://iconnect.comp.nus.edu.sg/>) is a platform for students from the School of Computing to learn about internships, jobs and future career opportunities in various industries, developed in the School of Computing at the National University of Singapore. This repository houses the sources for the frontend of IndustryConnect, written in ReactJS with Redux.

## Features
- Announcements for students to catch up on the latest news regarding the tech industry
- Industry articles from partnered companies for students to view and find out more about the companies

## Getting Started

### Installation
1. Install a stable version of NodeJS. The active LTS or current version should work fine.
1. Clone this repository and navigate to it using "cd" in your command line or shell tool.
1. Run `yarn install` to install dependencies.
1. Copy the `.env.example` file as `.env` and set the necessary variables (refer below for more information)
1. Run `yarn run start` to start the server at `localhost:3000`. **It might take a couple of minutes for the server to start.**

### Setting up your environment

The project requires some environment variables to be set to work properly. In the `.env` file a few things need to be set up:

#### Backend configuration

1. `REACT_APP_DEV_BASE_URL`: The base URL of the backend in the development stage. If you are testing with a local backend, the value in `.env.example` matches the default development configuration of the backend.
1. `REACT_APP_DEV_BASE_URL`: The base URL of the backend in the production stage. Set to your own if not running together with the [backend](https://github.com/NUS-IndustryConnect/SOC_IR_API).

#### Authentication provider configuration

Your backend engineer should provide you with the configuration for the development and/or production stages of the backend.

1. `REACT_APP_DEV_AUTH_CLIENT_ID`: The provider ID of the authentication provider at development stage. This must match the backend configuration.
1. `REACT_APP_DEV_AUTH_REDIRECT`: The redirected link for the authentication provider to route back at development stage.
1. `REACT_APP_DEV_AUTH_ENPOINT`: The authentication endpoint of the authentication provider at development stage.
1. `REACT_APP_PROD_AUTH_CLIENT_ID`: The provider ID of the authentication provider at production stage. This must also match the backend configuration.
1. `REACT_APP_PROD_AUTH_REDIRECT`: The redirected link for the authentication provider to route back at production stage.
1. `REACT_APP_PROD_AUTH_ENPOINT`: The authentication endpoint of the authentication provider at production stage.

#### Other configuration

1. `REACT_APP_ENV`: Whether to build the project with the configurations of the development or production stage. Set "development" if it is in the development stage.

### Application Structure

1. `admin` contains components related to admin users.
1. `common` contains components or other code common to more than one page.
1. `industry` contains components related to company/industry users.
1. `redux` contains action creators, reducers and type declarations for specific functions.
1. `server` contains function calls to backend API.
1. `student` contains components related to student users.
