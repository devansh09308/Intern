import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    text: {
        marginRight: 7
    },
    dataContainer: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 15,

    },
    priceContainer: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 15,
        marginLeft: 'auto'
    },
    rankingContainer: {
        fontWeight: 'bold',
        marginRight: 5,
        backgroundColor: 'grey',
        paddingHorizontal: 3,
        borderRadius: 5
    },

});

export default Styles;