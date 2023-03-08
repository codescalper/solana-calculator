import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { CalculatorSolanaDapp } from "../target/types/calculator_solana_dapp";

describe("calculator-solana-dapp", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.CalculatorSolanaDapp as Program<CalculatorSolanaDapp>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
