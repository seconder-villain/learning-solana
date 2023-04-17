import { PublicKey, sendAndConfirmTransaction, Transaction, TransactionInstruction } from '@solana/web3.js';
import { getConnection } from '../util/get-connection.mjs';
import { selector } from '../util/index.mjs';

const connection = getConnection('confirmed');
const payer = await selector.selectKeypair('payer');
const programId = new PublicKey('5zaovqUigB6qBKZtzh2YDAtCJfV7ihJGQGfuqMvucs1d');
const transaction = new Transaction()

const instruction = new TransactionInstruction({
    keys: [],
    programId,
})

transaction.add(instruction)

const tx = await sendAndConfirmTransaction(
    connection,
    transaction,
    [payer]
);

console.log(tx);