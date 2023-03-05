import { PublicKey } from '@solana/web3.js';
import { getConnection } from './get-connection.mjs';

export const getBalance = (address: PublicKey) => {
    const connection = getConnection('confirmed');
    return connection.getBalance(address);
};
