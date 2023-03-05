import { PublicKey } from '@solana/web3.js';
import { getClusterApiUrl } from './get-cluster-api-url.mjs';

export const getBalanceUsingJSONRPC = (address: PublicKey) => {
    const url = getClusterApiUrl();
    return fetch(
        url, 
        {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            jsonrpc: '2.0',
            id: 1,
            method: 'getBalance',
            params: [address],
        }),
    })
        .then((response) => response.json())
        .then((json) => {
            if (json.error) {
                throw json.error;
            }

            return json['result']['value'];
        })
        .catch((error) => {
            throw error;
        });
};
