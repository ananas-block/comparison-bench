import * as anchor from "@coral-xyz/anchor";
import { Program, web3 } from "@coral-xyz/anchor";
import { ComparisonBench } from "../target/types/comparison_bench";

describe("comparison-bench", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.ComparisonBench as Program<ComparisonBench>;

  it("Is initialized!", async () => {
    // Add your test here.
    try {
      const tx = await program.methods.initialize()
      // .preInstructions([
      //   // web3.ComputeBudgetProgram.requestHeapFrame({bytes: 1024 * 256})
      // ])
      .rpc();
      console.log("Your transaction signature", tx);
    } catch (error) {
      console.error("Transaction failed", error);
    }
    // const tx = await program.methods.initialize().rpc();
    // console.log("Your transaction signature", tx);
  });
});
