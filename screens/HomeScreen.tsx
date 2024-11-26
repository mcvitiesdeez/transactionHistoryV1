import { View, Text, StyleSheet, Alert, Button } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

function HomeScreen({ navigation }: { navigation: any }) {

    const handleLogin = async () => {
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        if (hasHardware) {
            const authenticated = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Authenticate to access your account',
                cancelLabel: 'Cancel',
                fallbackLabel: 'Enter PIN',
            });
            if (authenticated.success) {
                navigation.navigate('TransactionHistory')
            } else {
                Alert.alert('Authentication Failed', 'Unable to authenticate.');
            }
        }
    }
    return (
        <View style={styles.appContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Welcome to the Transaction History App</Text>
            </View>
            <View style={styles.transactionContainer}>
                <Text style={styles.contentText}>This is a transaction history module for the goal of demonstrating React Native & TypeScript development.</Text>
                <View style={styles.buttonStyle}>
                    <Button title='Login' onPress={handleLogin} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 50,
        paddingHorizontal: 16,
        flex: 1
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        marginBottom: 10,
    },
    transactionContainer: {
        flex: 8,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    contentText: {
        fontSize: 18,
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    }
});

export default HomeScreen;