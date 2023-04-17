import { clusterApiUrl } from '@solana/web3.js';
import { program } from 'commander';

program.option(
    '-c, --cluster <type>',
    'devnet | testnet | mainnet-beta',
    'devnet'
);
program.parse();

const options = program.opts();

export const getClusterApiUrl = () => {
    return clusterApiUrl(options.cluster);
};
