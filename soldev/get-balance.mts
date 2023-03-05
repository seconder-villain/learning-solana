import { PublicKey } from '@solana/web3.js';
import { getConnection } from '../get-connection.mjs';

export const getBalance = (address: PublicKey) => {
    const connection = getConnection({ commitment: 'confirmed' });
    return connection.getBalance(address);
};

const publicKey = new PublicKey('ABJNWtY3bzSe1nTFGirg4GZ3BhpCC6EJV3gnJxtAWHdk');

const result = await getBalance(publicKey);

console.log(result);