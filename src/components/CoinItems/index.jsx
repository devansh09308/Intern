import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import {Text, View } from 'react-native';
import Styles from './styles';

const CoinItems = () => {
    return(
        <>
            <View style={Styles.dataContainer}>
                <Text style={Styles.title}>Bitcoin</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={Styles.rankingContainer}>
                        <Text style={{fontWeight: 'bold'}}>1</Text>
                    </View>
                    <Text style={Styles.text}>BTC</Text>
                    <AntDesign name="caretdown" size={12} color="black" style={{alignSelf: 'center', marginRight: 5}} />
                    <Text style={Styles.text}>0.5 %</Text>
                </View>
            </View>
            <View style={Styles.priceContainer}>
                <Text style={Styles.title}>45,235</Text>
            </View>
        </>
    );
}

export default CoinItems;
