import { createAccount } from '@solana/spl-token';
import { Keypair, PublicKey } from '@solana/web3.js';
import { getConnection } from '../get-connection.mjs';

export const createTokenAccount = async (
    tokenMint: PublicKey, 
    payer: Keypair, 
    owner: PublicKey
) => {
    const connection = getConnection('confirmed');
    return createAccount(
        connection,
        payer,
        tokenMint,
        owner
    );
}