import { burn } from '@solana/spl-token';
import { Keypair, PublicKey } from '@solana/web3.js';
import { getConnection } from '../get-connection.mjs';

export const burnToken = async (
    payer: Keypair,
    tokenAccount: PublicKey,
    tokenMint: PublicKey,
    owner: PublicKey,
    amount: bigint
) => {
    const connection = getConnection('confirmed');
    return burn(
        connection,
        payer,
        tokenAccount,
        tokenMint,
        owner,
        amount
    )
}