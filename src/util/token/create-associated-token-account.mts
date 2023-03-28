import { createAssociatedTokenAccount as _createAssociatedTokenAccount } from '@solana/spl-token';
import { Keypair, PublicKey } from '@solana/web3.js';
import { getConnection } from '../get-connection.mjs';

// error case: 'Provided owner is not allowed' - already has own token account
export const createAssociatedTokenAccount = async (
  tokenMint: PublicKey,
  payer: Keypair,
  user: PublicKey
) => {
  const connection = getConnection('confirmed');
  return _createAssociatedTokenAccount(
    connection,
    payer,
    tokenMint,
    user,
  );
}