import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_ALL_COINS from '../queries/index';

const  GetAllCoins = () => {
    const { loading, error, data } = useQuery(GET_ALL_COINS);

    const [coins, setCoins] = useState([])

    if(loading) return <p>Loading...</p>;
    if(error) return console.log(error);

    return (
        data.map(coin => {
            return (
                <h1>{coin.name}</h1>
            )
        })
    )
}

export default GetAllCoins;