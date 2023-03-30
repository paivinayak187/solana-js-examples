import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import connection from "./utils/connectionUtil";

export default async (toPubKey: string, amountInSol: number) => {
    const signature = await connection.requestAirdrop(new PublicKey(toPubKey), amountInSol * LAMPORTS_PER_SOL);
    const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
    await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature }, "finalized");
    return signature;
}