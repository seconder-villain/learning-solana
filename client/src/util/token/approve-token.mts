import { approve } from '@solana/spl-token';
import { Keypair, PublicKey } from '@solana/web3.js';
import { getConnection } from '../get-connection.mjs';

export const approveToken = async (
  payer: Keypair,
  tokenAccount: PublicKey,
  delegate: PublicKey,
  owner: PublicKey,
  amount = BigInt('9999999999999999999999999999999999999999999999999999999999')
) => {
  const connection = getConnection('confirmed');
  return approve(
    connection,
    payer,
    tokenAccount,
    delegate,
    owner,
    amount
  )
}