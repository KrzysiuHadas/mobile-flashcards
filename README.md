### Mobile flashcards project

## Running the project

In order to run the project, clone it first, then ensure you have node.js installed on your system.

From the terminal execute these two commands: 
* install all project dependencies with `npm install`. Alternatively, you may use `yarn`.
* start the development server with `npm start` or `yarn start`.
* enter the server address into expo on a device

Also, you can use `react-native run-ios` command if you have iOS simulator on your system.

## Technologies used to develop the App

The app is developed using React Native.
`AsyncStorage` takes care of persisting the data on the device. Redux is not being used here.
`react-native-flip-card` `npm` library (under MIT license) is being used to show the card flipping animation.
App requests push notifications to send reminders to the user.
For navigation Tab navigation and Stack navigation are used from `react-navigation` library.

## Platforms

The app currently runs bug-free (hopefully) on iOS.
There are problems with the card flipping library which I will try to tackle in the future.