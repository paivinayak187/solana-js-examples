import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import connection from "./utils/connectionUtil";

export default async (walletAddress: string) => {
    let balance = await connection.getBalance(new PublicKey(walletAddress));
    return balance / LAMPORTS_PER_SOL;
}