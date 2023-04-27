import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fce3eb',
    },
    title: {
        paddingTop: 130,
        color: '#20232a',
        textAlign: 'center',
        fontSize: 45,
        fontWeight: 'bold',
        marginBottom: 100
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        paddingVertical: 5
    },
    homeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 50,
        marginHorizontal: 60,
        marginBottom: 40,
        padding: 10,
        backgroundColor: '#f26f99',
        borderRadius: 7
    }
});