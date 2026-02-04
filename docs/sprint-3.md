# Sprint Three - Frontend Setup

**Author:** Sylvia Martin  
**Project:** Reproductive Health Application  
**Sprint:** 3 
**Week:** 3

## Overview
Sprint 3 focused on setting up the frontend of the application. This involved implementing a start screen, log component, dashboard screen to display logs, stats screen to contain basic statistics on the logs, and a logging screen with a form component on which users can input details to create a log.

## Project Structure
- repro-health-app: the root directory of the project containing all its files and folders.
- backend: contains the Node.js server and all of its dependencies and config files.
- middleware: contains the Express server, database, and authentication functionality.
- mobile-app: contains the React Native and Expo server. 
- docs: contains project documentation, including sprint reports. 

## Implementation
- Implemented colour theme.
- Created a log component which outputs the properties date and cycle length for now.
- Created a form component which contains text inputs for users to input data.
- Created a start screen with buttons which redirect to the login and register screens.
- Created a dashboard screen which contains the logs.
- Created a logging screen which contains the form.
- Created a stats screen to contain basic statistics on the data in the context file.
- Created a context file called 'logsContext.jsx' to provide shared logic for all screens.
- Added script in package.json to allow frontend to be ran in tunnel mode using 'npm run tunnel'.

## Testing
- Ran npm web to view the app in browser and npm run tunnel to view the app on mobile and ensured the correct results were outputted for both.

## Running the Application
### Backend
- Clone the repository to your machine.
- Install the necessary dependencies to run the application.
- Create a .env file containing environment variables like node environment, port, and host.
- Ensure MongoDb is running locally.
- Navigate to the middleware folder.
- Start the application using npm run dev. 

### Frontend
- Ensure you have Expo app.
- Navigate to the 'mobile-app' folder.
- Scan QR code using Expo app if you have Android device and camera if you have iOS device.
- Wait for application to download in Expo app.

## Issues/Notes
- Issues with uuid version I learned not being compatible with React Native.
- Difficulty getting data from one screen to another. 
- Articles and Supplements screens yet to be implemented.

## Images/Screenshots
**Start Screen**
![Start Screen](images/sprint-3/start-screen.png)

**Register Screen**
![Register Screen](images/sprint-3/register-screen.png)

**Login Screen**
![Login Screen](images/sprint-3/login-screen.png)

**Dashboard Screen**
![Dashboard Screen](images/sprint-3/dashboard-screen.png)

**Stats Screen**
![Stats Screen](images/sprint-3/stats-screen.png)

**npm run tunnel command working**
![Stats Screen](images/npm-run-tunnel/stats-screen.png)

**Sprint 3 application structure**
![Sprint 3 application structure](images/sprint-3/sprint3-application-structure.png)

