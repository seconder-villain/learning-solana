import { PublicKey, sendAndConfirmTransaction, Transaction, TransactionInstruction } from '@solana/web3.js';
import { getConnection } from '../util/get-connection.mjs';
import { selector } from '../util/index.mjs';
import { Instruction, serializeInstruction } from './serialize.mjs';

const connection = getConnection('confirmed');
const payer = await selector.selectKeypair('payer');
const programId = new PublicKey('APktHvVTBGG8oj57vejtQjxhTpUqLKJYWCAtavJe6iWv');
const transaction = new Transaction();

const data = serializeInstruction(new Instruction({
    variant: 0,
    name: 'seconder',
    message: 'hello'
}));

const instruction = new TransactionInstruction({
    keys: [],
    programId,
    data
})

transaction.add(instruction)

const tx = await sendAndConfirmTransaction(
    connection,
    transaction,
    [payer]
);

console.log(tx);