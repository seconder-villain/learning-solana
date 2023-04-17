import { Commitment, Connection } from '@solana/web3.js';
import { getClusterApiUrl } from './get-cluster-api-url.mjs';

let connection: Connection;

export const getConnection = (commitment: Commitment) => {
    const clusterApiUrl = getClusterApiUrl();
    connection = new Connection(clusterApiUrl, commitment);
    return connection;
};
