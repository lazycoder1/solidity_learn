import web3 from "./web3";
import WagerFactory from "./build/WagerFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(WagerFactory.interface),
    "0x08833c7d475b21f784f0ca5bf5fc7e23ce0bb7bb"
);

export default instance;
