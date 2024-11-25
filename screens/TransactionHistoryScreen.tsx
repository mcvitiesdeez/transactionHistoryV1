import { View, Text, StyleSheet, FlatList, Pressable, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import transactionData from '../data/transactionData.json';
import TransactionCard from '../components/TransactionCard';
import { useState } from 'react';

function TransactionHistoryScreen() {
    const [revealedTransaction, setRevealedTransaction] = useState<string[]>([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const handleTransactionPress = () => {
        console.log('Transaction Pressed');
    }

    const handleRevealAmount = async (transactionID: string) => {
        if (isAuthenticated) {
            setRevealedTransaction((prev) => [...prev, transactionID]);
        } else {
            const hasHardware = await LocalAuthentication.hasHardwareAsync();
            if (hasHardware) {
                const authenticated = await LocalAuthentication.authenticateAsync({
                    promptMessage: 'Authenticate to access your account',
                    cancelLabel: 'Cancel',
                    fallbackLabel: 'Enter PIN',
                });
                if (authenticated.success) {
                    setIsAuthenticated(true);
                    setRevealedTransaction((prev) => [...prev, transactionID]);
                } else {
                    Alert.alert('Authentication Failed', 'Unable to authenticate.');
                }
            }
        }
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Transaction History</Text>
            </View>
            <View style={styles.transactionContainer}>
                <FlatList
                    data={transactionData}
                    keyExtractor={(item) => item.transactionID}
                    renderItem={({ item }) => (
                        <TransactionCard
                            item={item}
                            revealedTransaction={revealedTransaction}
                            onRevealAmount={handleRevealAmount}
                        />
                    )}
                />
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
    titleText: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'black',
    },
    transactionContainer: {
        flex: 8,
    },
    transactionItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        fontWeight: 'bold',
    },
    transactionText: {
        color: 'white',
        paddingVertical: 4,
        paddingHorizontal: 8,
        fontWeight: 'bold',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    masked: {
        color: '#888',
        fontStyle: 'italic',
    },
});

export default TransactionHistoryScreen;