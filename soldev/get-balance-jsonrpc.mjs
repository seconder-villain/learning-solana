// @ts-check
import { clusterApiUrl, PublicKey } from '@solana/web3.js';

/**
 * 
 * @param { PublicKey } address 
 * @returns 
 */
export const getBalanceUsingJSONRPC = (address) => {
    const url = clusterApiUrl('devnet');
    return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'jsonrpc': '2.0',
            'id': 1,
            'method': 'getBalance',
            'params': [
                address
            ]
        })
    })
    .then(response => response.json())
    .then(json => {
        if (json.error) {
            throw json.error;
        }

        return json['result']['value'];
    })
    .catch(error => {
        throw error;
    });
};

const publicKey = new PublicKey('ABJNWtY3bzSe1nTFGirg4GZ3BhpCC6EJV3gnJxtAWHdk');

const result = await getBalanceUsingJSONRPC(publicKey);

console.log(result);