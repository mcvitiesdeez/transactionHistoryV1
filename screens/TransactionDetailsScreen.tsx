import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '../types';
import { StackScreenProps } from '@react-navigation/stack';

type DetailsScreenProps = StackScreenProps<RootStackParamList, 'TransactionDetails'>;

const TransactionDetailsScreen: React.FC<DetailsScreenProps> = ({ route }) => {
    const { item } = route.params;
    return (
        <View style={styles.appContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Transaction Details #{item.transactionID}</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>{item.date}</Text>
                </View>
                <Text style={styles.contentText}>Description: {item.description}</Text>
                <Text style={styles.contentText}>Type: {item.type}</Text>
                <Text style={styles.contentText}>Category: {item.category}</Text>
                <Text style={styles.amountText}>Amount: RM{item.amount.toFixed(2)}</Text>
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
    dateContainer: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#003049',
        fontWeight: 'bold',

    },
    dateText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fdf0d5',
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    contentContainer: {
        flex: 8,
    },
    contentText: {
        fontSize: 26,
    },
    amountText: {
        marginTop: 16,
        fontSize: 26,
        color: '#c1121f',
        borderTopWidth: 1,
        borderTopColor: '#cccccc',
    }
});

export default TransactionDetailsScreen;