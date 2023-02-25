import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import {Text, View } from 'react-native';
import Styles from './styles';

const CoinItems = ({ marketCoin }) => {
    const {name, priceUsd} = marketCoin;

    return(
        <>
            <View style={Styles.dataContainer}>
                <Text style={Styles.title}>{name}</Text>
                {/* <View style={{ flexDirection: 'row' }}>
                    <View style={Styles.rankingContainer}>
                        <Text style={{fontWeight: 'bold', color:'white'}}>{rank}</Text>
                    </View>
                    <Text style={Styles.text}>{symbol.toUpperCase()}</Text>
                    <AntDesign name={changePercent24Hr < 0 ? 'caretdown' : 'caretup' } size={12} color={percentageColor} style={{alignSelf: 'center', marginRight: 5}} />
                    <Text style={{color:percentageColor}}>{parseFloat(changePercent24Hr).toFixed(2)}%</Text>
                </View> */}
            </View>
            <View style={Styles.priceContainer}>
                <Text style={Styles.priceTitle}>{parseFloat(priceUsd).toFixed(2)}$</Text>
            </View>
        </>
    );
}

export default CoinItems;
