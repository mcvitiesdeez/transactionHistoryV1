import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';

interface TransactionCardProps {
    item: {
        transactionID: string;
        date: string;
        amount: number;
        description: string;
        type: string;
        category: string;
    };
    revealedTransaction: string[];
    onRevealAmount: (transactionID: string) => void;
}

const TransactionCard: React.FC<TransactionCardProps> = ({ item, revealedTransaction, onRevealAmount }) => {

    const handleTransactionPress = () => {
        console.log('Transaction Pressed');
    }

    return (
        <View style={styles.transactionItem}>
            <Pressable onPress={handleTransactionPress} android_ripple={{ color: '#cccccc' }}>
                <Text style={styles.transactionText}>{item.date}</Text>
                <Text style={styles.transactionText}>{item.description}</Text>
                <View style={styles.rowContainer}>
                    <Text style={styles.transactionText}>{item.type}</Text>
                    <TouchableOpacity onPress={() => onRevealAmount(item.transactionID)}>
                        <Text style={styles.transactionText}>
                            Amount:
                            {revealedTransaction.includes(item.transactionID) ? (
                                ` RM${item.amount.toFixed(2)}`
                            ) : (
                                <Text style={styles.masked}> ****</Text>
                            )}
                        </Text>
                    </TouchableOpacity>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
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

export default TransactionCard;