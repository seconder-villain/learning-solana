import * as token from '@solana/spl-token';
import { Keypair, PublicKey, sendAndConfirmTransaction, Transaction } from '@solana/web3.js';
import { getConnection } from '../get-connection.mjs';

export const burnTokenPublicly = async (
    payer: Keypair,
    tokenAccount: PublicKey,
    tokenMint: PublicKey,
    owner: PublicKey,
    amount: bigint
) => {
    const connection = getConnection('confirmed');
    const tx = new Transaction().add(
        token.createBurnInstruction(tokenAccount, tokenMint, owner, amount),
    );

    return sendAndConfirmTransaction(connection, tx, [payer]);
}