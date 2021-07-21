import {
  SEED_SYMBOL,
  SEED_DECIMALS,
  SEED_ADDRESS,
} from "../constants/seedInfo";

const addToken = async (
  address: string = SEED_ADDRESS,
  symbol: string = SEED_SYMBOL,
  decimals: number = SEED_DECIMALS
) => {
  try {
    const wasAdded = await window.ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address,
          symbol,
          decimals,
        },
      },
    });

    if (wasAdded) {
      console.log("Thanks for your interest!");
    } else {
      console.log("Your loss!");
    }
  } catch (error) {
    console.log(error);
  }
};

export default addToken;
