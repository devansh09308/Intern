import { FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import CoinItems from '../components/CoinItems'

const SocketUSe = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const ws = new WebSocket('wss://ws.coincap.io/prices?assets=ALL')
        ws.onopen = () => {
            // connection opened
            ws.send('something'); // send a message
        };
        
        ws.onmessage = e => {
            // a message was received
            console.log(e.data);
            const response = JSON.parse(e.data);
            let arr = [];
            const keys = Object.keys(obj)
            for (let i = 0; i < keys.length; i++) {
                let temp = {}
                let key = keys[i]
                let value = obj[key]
                temp['bitcoin_name'] = key
                temp['bitcoin_price'] = value
                arr.push(temp)
            }
            console.log(response);
            
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