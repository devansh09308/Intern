import { FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import CoinItems from '../components/CoinItems'

const HookEffect = () => {
    const [coins, setCoins] = useState([]);

    const fetchCoins = async () => {
        try {
            const response = await fetch("https://api.coincap.io/v2/assets");
            const myData = await response.json();

            setCoins(myData.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchCoins();
    }, []);
    return (
        <FlatList data={coins} renderItem={({ item }) => <CoinItems marketCoin={item} />}  />
    )
};



export default HookEffect;