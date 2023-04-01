import { Keypair } from "@solana/web3.js";
import airdrop from "./airdrop";
import balance from "./balance";
import newKeyPair from "./utils/Keypair";

console.log("App START");

/**
 * Create a new key pair
 */
const keyPair = newKeyPair();
const pubKey = keyPair.publicKey.toString();
console.log(`Keypair public key is ${pubKey}`);
console.log(`Keypair secret key is ${keyPair.secretKey}`);

/**
 * Get balance of the account
 */
(async () => {
    const pubKey = "GzA5vfkjptJSAxA6JbCraxrzEfVwGGiRFL9JRS71p7ry";
    let amount = await balance(pubKey);
    console.log(`Balance of account ${pubKey} is ${amount}`);
})();


/**
 * Airdrop SOL to the account
 */
(async () => {
    const toPubKey = "GzA5vfkjptJSAxA6JbCraxrzEfVwGGiRFL9JRS71p7ry";
    const amount = 1;
    let signature = await airdrop(toPubKey, amount);
    console.log(`Airdropped ${amount} SOL to ${toPubKey}. Signature is ${signature}`);
    console.log(`New balance of ${toPubKey} is ${await balance(toPubKey)}`);
})();