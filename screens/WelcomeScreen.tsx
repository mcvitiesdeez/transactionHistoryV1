import { View, Text, StyleSheet } from 'react-native';

function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Welcome!</Text>
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

export default WelcomeScreen;