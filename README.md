# App Instructions

This directory contains the React Native code that runs the Oxford Union app.

## Initial Setup

Open a command prompt and navigate to the `App` folder from the root directory.
```
npm install -g expo-cli
```

## Building the App

Open a command prompt and navigate to the `App` folder from the root directory.
```
ln -s ../Common ./Common
npm install
npm start
```
As you make changes to the source code of the app, the app will automatically update to reflect your changes.

## Running the App on your Phone

- Once the app is running on your computer, download the [Expo](https://expo.io) app onto your phone.
- Connect your phone to the same WiFi network as your computer and open the Expo app.
- Select `Oxford Union on...` from the `Projects` tab to use the app.

## Releasing the App

- First, navigate to the `App` directory in the root directory.
- Increment the `version` field in `package.json` and `app.json`.
- Open a command prompt and navigate to the `App` directory from the root directory.
```
expo build:ios
expo build:android
```

### Publishing on iOS

- Download the `.ipa` bundle created when `expo build` finishes.
- Open Xcode and navigate to `Xcode > Open Developer Tool > Application Loader` in the title bar.
- Press `Choose` and select and upload the `.ipa` bundle..
- When this is done, sign into [iTunes Connect](https://itunesconnect.apple.com/).
- Open `My Apps` and select `Oxford Union`.
- Click on `iOS App`, scroll to `Build`, click on `Select a build before you submit your app` and select the build you uploaded. You may need to wait up to 15 minutes for the new build to appear.
- Click `Submit for Review` and follow the instructions to send the app for review. The app will be published and automatically updated when the review is successful.
