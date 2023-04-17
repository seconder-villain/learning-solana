import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { selector } from '../util/index.mjs';
import { approveToken, burnToken, createAssociatedTokenAccount, createTokenMint, mintToken } from '../util/token/index.mjs';
import { transferToken } from '../util/token/transfer-token.mjs';

const payer = await selector.selectKeypair('payer');
const user1 = await selector.selectKeypair('user1');
const user2 = await selector.selectKeypair('user2');

// create token
const tokenMint = await createTokenMint(payer, 9);
console.log('tokenMint', tokenMint);

// create associatedTokenAccount
const user1TokenAccount = await createAssociatedTokenAccount(tokenMint, payer, user1.publicKey);
console.log('user1TokenAccount', user1TokenAccount);
const user2TokenAccount = await createAssociatedTokenAccount(tokenMint, payer, user2.publicKey);
console.log('user2TokenAccount', user2TokenAccount);

const minxTx = await mintToken(tokenMint, payer, user1TokenAccount, BigInt(15) * BigInt(LAMPORTS_PER_SOL));
console.log('minxTx', minxTx);

// transfer from user1 to user2
const transferTx = await transferToken(user1, user1TokenAccount, user2TokenAccount, user1, BigInt(5) * BigInt(LAMPORTS_PER_SOL));
console.log('transferTx', transferTx);

const burnTx = await burnToken(user1, user1TokenAccount, tokenMint, user1.publicKey, BigInt(5) * BigInt(LAMPORTS_PER_SOL));
console.log('burnTx', burnTx);

const approveTx = await approveToken(user1, user1TokenAccount, user2.publicKey, user1.publicKey);
console.log('approveTx', approveTx);