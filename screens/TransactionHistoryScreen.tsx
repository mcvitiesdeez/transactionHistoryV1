import { View, Text, StyleSheet } from 'react-native';

function TransactionHistoryScreen() {
    return (
        <View style={styles.container}>
            <Text>Transaction History Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});