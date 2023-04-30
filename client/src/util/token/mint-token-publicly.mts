import { Keypair, PublicKey, sendAndConfirmTransaction, Transaction } from '@solana/web3.js';
import { createMintToInstruction } from '@solana/spl-token';
import { getConnection } from '../index.mjs';

export const mintTokenPublicly = async (
    tokenMint: PublicKey,
    payer: Keypair,
    destination: PublicKey,
    amount: number
) => {
    const connection = getConnection('confirmed');
    const inst = createMintToInstruction(tokenMint, destination, payer.publicKey, amount);
    const tx = new Transaction().add(inst);

    return sendAndConfirmTransaction(connection, tx, [payer]);
}