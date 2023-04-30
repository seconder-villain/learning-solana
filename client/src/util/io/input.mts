import { PublicKey } from '@solana/web3.js';
import inquirer from 'inquirer';

export const inputPubkey = async (name: string) => {
    const answer = await inquirer.prompt([
        {
            name,
            message: `input ${name}:`
        },
    ]);

    return new PublicKey(answer[name]);
}