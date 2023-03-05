import { sendAndConfirmTransaction, SystemProgram, Transaction } from '@solana/web3.js';
import { getConnection } from './get-connection.mjs';

const transaction = new Transaction();

const connection = getConnection();

const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: sender,
    toPubkey: recipient,
    lamports: LAMPORTS_PER_SOL * amount
})

transaction.add(sendSolInstruction);

const signature = sendAndConfirmTransaction(
    connection,
    transaction,
    [senderKeypair]
)