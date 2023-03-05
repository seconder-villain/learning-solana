// @ts-check
import { Cluster, clusterApiUrl, Commitment, Connection } from '@solana/web3.js';

let connection: Connection;


export const getConnection = ({
    cluster = 'devnet',
    commitment
}: {
    cluster?: Cluster,
    commitment: Commitment
}) => {
    connection = new Connection(clusterApiUrl(cluster), commitment);
    return connection;
};

