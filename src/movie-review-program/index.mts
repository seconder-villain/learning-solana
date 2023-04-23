import { PublicKey, sendAndConfirmTransaction, Transaction, TransactionInstruction, SystemProgram } from '@solana/web3.js';
import { address } from '../config.mjs';
import { getConnection } from '../util/index.mjs';
import { selector } from '../util/index.mjs';
import { Instruction, serializeInstruction } from './serialize.mjs';

const review = {
    title: 'he4ro, seconder',
    rating: 9,
    description: 'hero, seconder, description',
}

const connection = getConnection('confirmed');
const payer = await selector.selectKeypair('payer');
const programId = new PublicKey(address.movieReviewProgram);
const [pda] = PublicKey.findProgramAddressSync(
    [payer.publicKey.toBuffer(), Buffer.from(review.title)],
    programId
)

const transaction = new Transaction();

const data = serializeInstruction(new Instruction({
    variant: 0,
    ...review,
}));

const instruction = new TransactionInstruction({
    keys: [{
        pubkey: payer.publicKey,
        isSigner: true,
        isWritable: false,
    },{
        pubkey: pda,
        isSigner: false,
        isWritable: true,
    },{
        pubkey: SystemProgram.programId,
        isSigner: false,
        isWritable: false,
    }],
    programId,
    data
})

transaction.add(instruction);

const tx = await sendAndConfirmTransaction(
    connection,
    transaction,
    [payer]
);

console.log(tx);