import { Keypair } from "@solana/web3.js";

const newKeyPair = () => {
    return Keypair.generate();
}

export default newKeyPair;