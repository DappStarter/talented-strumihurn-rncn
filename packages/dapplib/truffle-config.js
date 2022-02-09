require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remind hub include problem fog spell'; 
let testAccounts = [
"0x2f9387edcf0fd999bcb61a659aeccff797c90fa721c704d3890d243d7c9b61ef",
"0x51b10f668e7527493920eb61dfcbb52600ac676ac8363568c083ea4d135d75c3",
"0x7077f548cc18fd254a409416708780448592228681cbe7efafe72eb38b210211",
"0x27d9c7e1dbfeb949ff7672053103f161031c0f200845ec353af7626a63b12650",
"0x39aba67561c77c2b4dded5bc1b999cab89acd8b92aab72782d2abca933c8b159",
"0xde76861a2df6737a893625a351e7e73669c60635d116c8bacd7e1a64ebf10622",
"0x4936ee6f63837101669d3ce73c1ff64c58525643635351dcac3b2a14413dd46e",
"0x6c332119d7624a1e60af9a53b0faae744ede0a16329da1f1a1e219bcb199c81f",
"0x67052762c257c836d7b767273389b711387fd8f6bb56d7a8372548e26f546c07",
"0x393b98a01ef0e5c384b83b174339b8432184c9996cbf646f6c865848f9009ddd"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

