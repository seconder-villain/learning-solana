import { createRevokeInstruction } from '@solana/spl-token';
import { Keypair, PublicKey, sendAndConfirmTransaction, Transaction } from '@solana/web3.js';
import { getConnection } from '../get-connection.mjs';

export const revokeTokenPublicly = async (
    payer: Keypair,    
    tokenAccount: PublicKey,
    owner: PublicKey,
) => {
    const connection = getConnection('confirmed');
    const tx = new Transaction().add(
        createRevokeInstruction(tokenAccount, owner),
    );

    return sendAndConfirmTransaction(connection, tx, [payer]);
}