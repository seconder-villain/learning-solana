import { createMint } from '@solana/spl-token';
import { Keypair } from '@solana/web3.js';
import { getConnection } from '../get-connection.mjs';

export const createTokenMint = async (
    payer: Keypair,
    decimals: number
) => {
    const connection = getConnection('confirmed');
    return createMint(
        connection,
        payer,
        payer.publicKey,
        payer.publicKey,
        decimals,
    );
}