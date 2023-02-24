import { FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import CoinItems from '../components/CoinItems'

const SocketUSe = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const ws = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin')
        ws.onopen = () => {
            // connection opened
            ws.send('something'); // send a message
        };
        
        ws.onmessage = e => {
            // a message was received
            console.log(e.data);
            setCoins(e.data)
        };
        
        ws.onerror = e => {
            // an error occurred
            console.log(e.message);
        };
        
        ws.onclose = e => {
            // connection closed
            console.log(e.code, e.reason);
        };
        return () => {
            ws.close();
        };
    }, []);

    
    return (
        <FlatList data={coins} renderItem={({ item }) => <CoinItems marketCoin={item} />} />
    )
};



export default SocketUSe;