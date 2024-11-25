import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '../types';
import { StackScreenProps } from '@react-navigation/stack';

type DetailsScreenProps = StackScreenProps<RootStackParamList, 'TransactionDetails'>;

const TransactionDetailsScreen: React.FC<DetailsScreenProps> = ({ route }) => {
    const { item } = route.params;
    return (
        <View style={styles.appContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Transaction Details</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.contentText}>Transaction ID: {item.transactionID}</Text>
                <Text style={styles.contentText}>Date: {item.date}</Text>
                <Text style={styles.contentText}>Amount: RM{item.amount.toFixed(2)}</Text>
                <Text style={styles.contentText}>Description: {item.description}</Text>
                <Text style={styles.contentText}>Type: {item.type}</Text>
                <Text style={styles.contentText}>Category: {item.category}</Text>
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
    contentContainer: {
        flex: 8,
    },
    contentText: {
        fontSize: 26,
    }
});

export default TransactionDetailsScreen;