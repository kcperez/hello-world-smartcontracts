var contractABI = [
  {
    constant: true,
    inputs: [],
    name: "hello",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
];
var contractAddress = "0x4e51D102c47742342d43291BAefCA6D4a8f58b41";
var web3 = new Web3("http://localhost:9545");
var helloWorld = new web3.eth.Contract(contractABI, contractAddress);

document.addEventListener("DOMContentLoaded", () => {
  helloWorld.methods
    .hello()
    .call()
    .then((result) => {
      document.getElementById("hello").innerHTML = result;
    });
});
