import {
    Keypair,
    LAMPORTS_PER_SOL,
    PublicKey,
    sendAndConfirmTransaction,
    SystemProgram,
    Transaction,
} from '@solana/web3.js';
import { getConnection } from './get-connection.mjs';

export const transferSol = (
    keypair: Keypair,
    from: PublicKey,
    to: PublicKey,
    amount: number
) => {
    const transaction = new Transaction();

    const connection = getConnection('confirmed');

    const sendSolInstruction = SystemProgram.transfer({
        fromPubkey: from,
        toPubkey: to,
        lamports: LAMPORTS_PER_SOL * amount,
    });

    transaction.add(sendSolInstruction);

    return sendAndConfirmTransaction(connection, transaction, [keypair]);
};
