import {deserialize} from "borsh";
import {getConnection} from "../util/index.mjs";
import {PublicKey} from "@solana/web3.js";

const connection = getConnection('confirmed');
const info = await connection.getAccountInfo(new PublicKey('3oLXPJTKHWv5PNKpHMHgj1CUuJQYpX4zuvAZRwMKf4wm'));
console.log(info);
// const b = Buffer.from(data, 'base64');
// const schema = new Map(
//     [
//         [
//             Review,
//             {
//                 kind: 'struct',
//                 fields: [
//                     ['discriminator', 'string'],
//                     ['is_initialized', 'boolean'],
//                     ['reviewer', 'string'],
//                     ['rating', 'u8'],
//                     ['title', 'string'],
//                     ['description', 'string']
//                 ]
//             }
//         ]
//     ]);
//
// const de = deserialize(schema, Review, b);
// console.log(de);
//
