import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import transactionData from '../data/transactionData.json';

function TransactionHistoryScreen() {

    const handleTransactionPress = () => {
        console.log('Transaction Pressed');
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
                        <View style={styles.transactionItem}>
                            <Pressable onPress={handleTransactionPress} android_ripple={{ color: '#cccccc' }}>
                                <Text style={styles.transactionText}>{item.date}</Text>
                                <Text style={styles.transactionText}>{item.description}</Text>
                                <View style={styles.rowContainer}>
                                    <Text style={styles.transactionText}>{item.type}</Text>
                                    <Text style={styles.transactionText}>Amount: RM{item.amount.toFixed(2)}</Text>
                                </View>
                            </Pressable>
                        </View>
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