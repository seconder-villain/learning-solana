import { revoke } from '@solana/spl-token';
import { Keypair, PublicKey } from '@solana/web3.js';
import { getConnection } from '../get-connection.mjs';

export const revokeToken = async (
    payer: Keypair,
    tokenAccount: PublicKey,
    owner: PublicKey
) => {
    const connection = getConnection('confirmed');
    return revoke(connection, payer, tokenAccount, owner);
}