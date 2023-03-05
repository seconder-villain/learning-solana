import { getBalance, selector, transferSol } from '../util/index.mjs';

const sender = await selector.selectKeypair();

const before = await getBalance(sender.publicKey);

await transferSol(sender, sender.publicKey, sender.publicKey, 1.5);

const after = await getBalance(sender.publicKey);

console.log(before);
console.log(after);