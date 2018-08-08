import web3 from "./web3";
import WagerFactory from "./build/WagerFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(WagerFactory.interface),
    "0x75e456b49758eb72f6e5f327309a31e817e1f603"
);

export default instance;
