import { createApproveInstruction } from '@solana/spl-token';
import { Keypair, PublicKey, sendAndConfirmTransaction, Transaction } from '@solana/web3.js';
import { getConnection } from '../get-connection.mjs';

export const approveTokenPublicly = async (
    payer: Keypair,
    tokenAccount: PublicKey,
    delegate: PublicKey,
    owner: PublicKey,
    amount = BigInt('9999999999999999999999999999999999999999999999999999999999')
) => {
    const connection = getConnection('confirmed');
    const tx = new Transaction().add(
        createApproveInstruction(tokenAccount, delegate, owner, amount),
    );

    return sendAndConfirmTransaction(connection, tx, [payer]);
}