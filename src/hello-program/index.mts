import { PublicKey, sendAndConfirmTransaction, Transaction, TransactionInstruction } from '@solana/web3.js';
import { getConnection } from '../util/index.mjs';
import { selector } from '../util/index.mjs';
import { address } from "../config.mjs";

const connection = getConnection('confirmed');
const payer = await selector.selectKeypair('payer');
const programId = new PublicKey(address.helloProgram);
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