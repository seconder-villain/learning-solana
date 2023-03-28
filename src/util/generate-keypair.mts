import { Keypair } from '@solana/web3.js';

export const generateKeypair = () => {
    return Keypair.generate();
};
