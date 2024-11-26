# Transaction History Module #


## First project with React Native and TypeScript. ##

**Details:**

This is a transaction history module which allows users to view their recent transactions.

**Features:**

1. Biometric Authentication - Upon login, the user is required to provide their biometric login to access their transactions. This is accomplished using Expo's LocalAuthentication library.
2. Sensitive data masking - On the transaction page, the amount of each transaction is masked and will only be exposed once the user provides their biometric authentication. This is built on top of the authentication feature to allow user to read sensitive information.
3. Screen Navigation - Navigate between screens using React Navigation's Stack

**Screens:**

1. Home Screen
1. Transaction History Screen
1. Transaction Details Screen

**To test the application**
Current build version is still facing some issues with Android development, in which I'd asked for the user to clone the project and run it in Visual Studio Code.

Required dependencies:
1. `npm install @react-navigation/native @react-navigation/native-stack @react-navigation/stack`
1. `npx expo install expo-local-authentication`
1. `npx expo install react-native-screens react-native-safe-area-context`

Assuming you have NodeJS installed and ExpoGo on your mobile device, you can then run `npm start` to start testing
