# react-native-redux-navigation-sample
Sample counter application. Includes react-native, react-navigation, react-redux, redux-logger, redux-thunk

To run this sample app, install [Expo](https://expo.io/) and create Expo project, copy App.js, package.json and src folder into the project.

go folder path and run
npm install

You can try either on your smart phone or android emulator. I use [GenyMotion](https://www.genymotion.com/fun-zone/) to emulate.

Demo: 

![alt text](./demo.gif)

This is a classical react-native redux application with navigation option. For navigation I used react-navigation StackNavigator. There are two pages in the sample application. One of them is Login and another is Home. Login page is entry of the application. When you click the "Go To Counter Page", you reach Home page. In the home page, there is a Counter component. Thanks to react-redux, Counter component reachs the global store and use counter property of store.
