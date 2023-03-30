import airdrop from "./airdrop";
import balance from "./balance";

console.log("App START");

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
