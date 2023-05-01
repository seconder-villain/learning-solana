import {getConnection} from "../util/index.mjs";
import {PublicKey} from "@solana/web3.js";
import { deserialize } from 'borsh';

const connection = getConnection('confirmed');

const a = await connection.getAccountInfo(new PublicKey('3oLXPJTKHWv5PNKpHMHgj1CUuJQYpX4zuvAZRwMKf4wm'));

console.log(a?.data.toString());
