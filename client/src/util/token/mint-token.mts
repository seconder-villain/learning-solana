import { mintTo } from '@solana/spl-token';
import { Keypair, PublicKey } from '@solana/web3.js';
import { getConnection } from '../get-connection.mjs';

// error case: 'invalid account data for instruction' destination is not user, but token account
export const mintToken = async (
    tokenMint: PublicKey,
    payer: Keypair,
    destination: PublicKey,
    amount: number | bigint
) => {
    const connection = getConnection('confirmed');
    return mintTo(
        connection,
        payer,
        tokenMint,
        destination,
        payer,
        amount,
    );
}