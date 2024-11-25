import { View, Text, StyleSheet, FlatList, RefreshControl, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import transactionData from '../data/transactionData.json';
import TransactionCard from '../components/TransactionCard';
import { useState } from 'react';

function TransactionHistoryScreen() {
    const [revealedTransaction, setRevealedTransaction] = useState<string[]>([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [refreshing, setRefreshing] = useState(false);
    const [transactions, setTransactions] = useState(transactionData);

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

    const handleRefresh = () => {
        const newTransaction = {
            transactionID: (transactions.length + 1).toString(),
            date: '2024-11-25',
            amount: Math.random() * 500,
            description: 'New Transaction',
            type: 'debit',
            category: 'Miscellaneous',
        };

        setTransactions((prev) => [newTransaction, ...prev]);
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Transaction History</Text>
            </View>
            <View style={styles.transactionContainer}>
                <FlatList
                    data={transactions}
                    keyExtractor={(item) => item.transactionID}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
                    }
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