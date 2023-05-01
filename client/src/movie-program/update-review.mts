import {
    PublicKey,
    sendAndConfirmTransaction,
    Transaction,
    TransactionInstruction,
    SystemProgram
} from '@solana/web3.js';
import { address } from '../config.mjs';
import { getConnection } from '../util/index.mjs';
import { selector } from '../util/index.mjs';
import {AddMovieReviewInstruction, serializeAddMovieReviewInstructionData} from './serialize.mjs';

export const updateReview = async (review: AddMovieReviewInstruction) => {
    const payer = await selector.selectKeypair('payer');
    const programId = new PublicKey(address.movieProgram);
    const [pda_review] = PublicKey.findProgramAddressSync(
        [payer.publicKey.toBuffer(), Buffer.from('movie-title')],
        programId
    )

    console.log(pda_review);
}

await updateReview({} as any);