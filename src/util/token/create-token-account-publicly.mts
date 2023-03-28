import { getMint, getAccountLenForMint, TOKEN_PROGRAM_ID, createInitializeAccountInstruction } from '@solana/spl-token';
import { getConnection } from '../get-connection.mjs';
import {
    sendAndConfirmTransaction,
    PublicKey,
    Keypair,
    SystemProgram,
    Transaction
} from '@solana/web3.js';

export const createTokenAccountPublicly = async (
    tokenMint: PublicKey, 
    payer: Keypair, 
    owner: PublicKey
) => {
    const connection = getConnection('confirmed');

    const mintState = await getMint(connection, tokenMint);
    const tokenAccount = Keypair.generate();
    const space = getAccountLenForMint(mintState);
    const lamports = await connection.getMinimumBalanceForRentExemption(space);
    const programId = TOKEN_PROGRAM_ID;

    const tokenAccountInstruction = SystemProgram.createAccount({
        fromPubkey: payer.publicKey,
        newAccountPubkey: tokenAccount.publicKey,
        space,
        lamports: lamports,
        programId
    });

    const initializeTokenAccountInstruction = createInitializeAccountInstruction(
        tokenAccount.publicKey,
        tokenMint,
        owner,
        programId,
    )

    const tx = new Transaction().add(tokenAccountInstruction, initializeTokenAccountInstruction);

    return sendAndConfirmTransaction(connection, tx, [payer, tokenAccount]);
}