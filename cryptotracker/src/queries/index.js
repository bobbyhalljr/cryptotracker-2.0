import { gql } from 'apollo-boost';

const GET_ALL_COINS = gql`
    query GetAllCoins {
        data {
            name
        }
    }
`;

export default GET_ALL_COINS;