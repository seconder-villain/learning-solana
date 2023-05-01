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

export const addReview = async (review: AddMovieReviewInstruction) => {
    const payer = await selector.selectKeypair('payer');
    const programId = new PublicKey(address.movieProgram);
    const [pda_review] = PublicKey.findProgramAddressSync(
        [payer.publicKey.toBuffer(), Buffer.from(review.title)],
        programId
    )
    let [pda_counter] = PublicKey.findProgramAddressSync(
        [pda_review.toBuffer(), Buffer.from("comment")],
        programId
    )

    const transaction = new Transaction();

    const data = serializeAddMovieReviewInstructionData(review);
    const instruction = new TransactionInstruction({
        keys: [
            {
                pubkey: payer.publicKey,
                isSigner: true,
                isWritable: false,
            },
            {
                pubkey: pda_review,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: pda_counter,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: SystemProgram.programId,
                isSigner: false,
                isWritable: false,
            }
        ],
        programId,
        data
    })

    transaction.add(instruction);

    const connection = getConnection('confirmed');
    const tx = await sendAndConfirmTransaction(
        connection,
        transaction,
        [payer]
    );

    console.log(tx);
}