// @ts-check
import { Keypair } from '@solana/web3.js';

/**
 * @returns { Keypair }
 */
export const generateKeypair = () => {
    return Keypair.generate();
};