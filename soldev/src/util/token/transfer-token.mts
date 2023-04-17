import { transfer } from '@solana/spl-token';
import { Keypair, PublicKey } from '@solana/web3.js';
import { getConnection } from '../get-connection.mjs';

export const transferToken = async (
    payer: Keypair,
    source: PublicKey,
    destination: PublicKey,
    owner: Keypair | PublicKey,
    amount: number | bigint
) => {
    const connection = getConnection('confirmed');
    return transfer(
        connection,
        payer,
        source,
        destination,
        owner,
        amount,
    );
}