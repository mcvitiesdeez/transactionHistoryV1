import { View, Text, StyleSheet } from 'react-native';

function TransactionDetailsScreen() {
    return (
        <View style={styles.container}>
            <Text>Transaction Details Screen</Text>
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