import web3, { Keypair } from '@solana/web3.js';
import {
    getMinimumBalanceForRentExemptMint,
    createInitializeMintInstruction,
    TOKEN_PROGRAM_ID,
    MINT_SIZE
} from '@solana/spl-token';
import { sendAndConfirmTransaction } from '@solana/web3.js';

import { getConnection } from '../get-connection.mjs';

export const createTokenMintPublicly = async (
    payer: Keypair,
    decimals: number
) => {
    const connection = getConnection('confirmed');
    const tokenMintAccount = web3.Keypair.generate();
    const programId = TOKEN_PROGRAM_ID;
    const tokenMintAccountInstruction = web3.SystemProgram.createAccount({
        fromPubkey: payer.publicKey,
        newAccountPubkey: tokenMintAccount.publicKey,
        space: MINT_SIZE,
        lamports: await getMinimumBalanceForRentExemptMint(connection),
        programId
    });

    const initializeTokenMintInstruction = createInitializeMintInstruction(
        tokenMintAccount.publicKey,
        decimals,
        payer.publicKey,
        payer.publicKey,
        programId,
    );

    const tx = new web3.Transaction().add(
        tokenMintAccountInstruction,
        initializeTokenMintInstruction
    );

    return sendAndConfirmTransaction(connection, tx, [payer, tokenMintAccount]);
}
