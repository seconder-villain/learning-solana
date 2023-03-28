import { getAssociatedTokenAddress, createAssociatedTokenAccountInstruction } from '@solana/spl-token';
import { getConnection } from '../index.mjs';
import { Keypair, PublicKey, sendAndConfirmTransaction, Transaction } from '@solana/web3.js';

export const getOrCreateAssociatedTokenAccountPublicly = async (
    tokenMint: PublicKey,
    payer: Keypair,
) => {
    const connection = getConnection('confirmed');
    const associatedTokenAddress = await getAssociatedTokenAddress(
        tokenMint,
        payer.publicKey,
        false,
    );


    const inst = createAssociatedTokenAccountInstruction(
        payer.publicKey,
        associatedTokenAddress,
        payer.publicKey,
        tokenMint,
    );
    const tx = new Transaction().add(inst);

    return sendAndConfirmTransaction(connection, tx, [payer]);

}