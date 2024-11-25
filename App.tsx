import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import WelcomeScreen from './screens/WelcomeScreen';
import TransactionHistoryScreen from './screens/TransactionHistoryScreen';
import TransactionDetailsScreen from './screens/TransactionDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen} />
          <Stack.Screen name="TransactionDetails" component={TransactionDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
