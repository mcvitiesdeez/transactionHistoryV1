import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './types';

//Screens
import HomeScreen from './screens/HomeScreen';
import TransactionHistoryScreen from './screens/TransactionHistoryScreen';
import TransactionDetailsScreen from './screens/TransactionDetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <NavigationContainer linking={{
        prefixes: ['myapp://'],
        config: {
          screens: {
            Welcome: 'welcome',
            TransactionHistory: 'history',
            TransactionDetails: 'details/:transactionID',
          },
        },
      }}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen} />
          <Stack.Screen name="TransactionDetails" component={TransactionDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
