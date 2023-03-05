import { Keypair } from '@solana/web3.js';
import cliSelect from 'cli-select-2';
import fs from 'fs';

import { SECRET_DIR } from '../../config.mjs';

const files = fs.readdirSync(SECRET_DIR, );
const jsonFiles = files.filter((file) => file.match(/json$/)).map((file) => SECRET_DIR + '/' + file);

export const selectKeypair = async () => {
    const selected = await cliSelect({
        values: jsonFiles,
    });

    const secret = JSON.parse(fs.readFileSync(selected.value).toString()) as number[];
    const secretKey = Uint8Array.from(secret);
    return Keypair.fromSecretKey(secretKey);
}