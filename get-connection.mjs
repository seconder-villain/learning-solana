// @ts-check
import { clusterApiUrl, Connection } from '@solana/web3.js';

/**
 * @type { Connection }
 */
let connection;


/**
 * @typedef { object } ConnectionInfo
 * @property { import('@solana/web3.js').Commitment } commitment
 * @property { import('@solana/web3.js').Cluster } cluster
 */
/**
 * @param { object } ConnectionInfo
 * @returns 
 */
export const getConnection = ({
    cluster = 'devnet',
    commitment
}) => {
    connection = new Connection(clusterApiUrl(cluster), commitment);
    return connection;
};

