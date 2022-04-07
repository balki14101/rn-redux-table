# User Details Table

### A react native android / ios application, developed with redux saga for state management and Axios for network call and custom-built table component.

### Download the APK from:  [Github link](https://github.com/balki14101/rn-redux-table/releases/tag/v1.0.0)

## License

GNU GPL

[![React Native](https://reactnative.dev/img/oss_logo.png)](https://reactnative.dev/)

[![GithubFollow @balki14101](https://img.shields.io/github/last-commit/balki14101/rn-redux-table?)](https://github.com/balki14101/)[![GithubFollow @balki14101](https://img.shields.io/github/languages/count/balki14101/rn-redux-table?color=orange)](https://github.com/balki14101/) [![GithubFollow @balki14101](https://img.shields.io/github/languages/top/balki14101/rn-redux-table?color=blueviolet)](https://github.com/balki14101/) [![GithubFollow @balki14101](https://img.shields.io/github/languages/code-size/balki14101/rn-redux-table?color=pink)](https://github.com/balki14101/) [![GithubFollow @balki14101](https://img.shields.io/github/repo-size/balki14101/rn-redux-table)](https://github.com/balki14101/) [![GithubFollow @balki14101](https://img.shields.io/github/commit-activity/m/balki14101/rn-redux-table?color=%23DB62B2%20)](https://github.com/balki14101/)

## Screenshots

| Initially No data |Loader| Data Table
| -------| ------- | -------| 
|<img src="https://raw.githubusercontent.com/balki14101/rn-redux-table/dev/assets/screenshots/Data%20not%20available.jpg" width="200" height="300"/> | <img src="https://raw.githubusercontent.com/balki14101/rn-redux-table/dev/assets/screenshots/Loader.jpg" width="200" height="300"/> | <img src="https://raw.githubusercontent.com/balki14101/rn-redux-table/dev/assets/screenshots/Data%20table.jpg" width="200" height="300"/>  |  

## Features

- Redux saga is implemented for state management

## Technology

- React Native : For Cross platform mobile app development
- Node JS: For runtime environment
- Javascript : For application development
- VS code : Code editor IDE
- Linting: eslint

## Installation

This App requires [Node.js](https://nodejs.org/) v10+ to run.

##### Download the repo and install dependencies

```sh
git@github.com:balki14101/rn-redux-table.git
cd rn-redux-table
npm i
```

##### Start the development server

```sh
npm start
```

##### Install the app first time in Android (in Dev mode)

- Connect any Android device with USB
- Enable USB debugging in the device
- Accept to INSTALL the app when prompted during the deployment
- This command is not needed for subsequent changes made in project
- Whenever you include any package that impacts Android native, reinstall the app by issuing this command
- Alternatively the same can be achieved from Android Studio IDE by clicking "Run" button after opening "Android" project in it
- Supported Machines: Windows / Linux / Mac

```sh
npm run android
```

##### Install the app first time in iPhones (iOS) - Dev mode

- Connect any Android device with USB
- Enable USB debugging in the device
- Accept to INSTALL the app when prompted during the deployment
- This command is not needed for subsequent changes made in project
- Whenever you include any package that impacts Android native, reinstall the app by issuing this command
- Alternatively the same can be achieved from Xcode IDE by clicking "Build" & "Run" button after opening "iOS" folder in it
- Supported Machines: Mac only

```sh
cd ios && pod install && cd ..
npm run ios
```

## To generate Android APK

```bash
gradlew assembleRelease (APK file)
gradlew bundleRelease (AAB file)
```
- For more details: https://reactnative.dev/docs/signed-apk-android
Note: If you run in Linux, issue ./gradlew instead of gradlew

## Output file location

You will find the APK file in:

```bash
~PROJECT_LOCATION\android\app\build\outputs\apk\release
```

## Install the released APK

```bash
adb install app-release.apk
```

## Packages used

| Package                   | Version |
| ------------------------- | ------- |
| React                     | 17      |
| React Native              | 0.67    |
| React Navigation          | 6       |
|Redux Saga                 | 1       |
