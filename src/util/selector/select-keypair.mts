import { Keypair } from '@solana/web3.js';
import cliSelect from 'cli-select-2';
import fs from 'fs';

import { SECRET_DIR } from '../../../config.mjs';

const files = fs.readdirSync(SECRET_DIR,);
const jsonFiles = files.filter((file) => file.match(/json$/)).map((file) => SECRET_DIR + '/' + file);

const loadedKaypair = new Map<string, Keypair>();

export const selectKeypair = async (name: string) => {
    if (!loadedKaypair.has(name)) {
        console.log('select keypair of:', name);
        const selected = await cliSelect({
            values: jsonFiles,
        });

        const secret = JSON.parse(fs.readFileSync(selected.value).toString()) as number[];
        const secretKey = Uint8Array.from(secret);
        const newKeypair = Keypair.fromSecretKey(secretKey);

        loadedKaypair.set(name, newKeypair);
        console.log(name, newKeypair.publicKey);
    }

    const keypair = loadedKaypair.get(name);
    if (!keypair) throw new Error('failed selecting keypair');

    return keypair;
}