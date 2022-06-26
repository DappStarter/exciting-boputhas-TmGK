require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remain evil idea produce borrow season'; 
let testAccounts = [
"0x616aa308911a601ffbf821c7e40a49b062014990f933a64c31329a4704261cb7",
"0x2517ae417a24581045d92595f45304ea15142ea2e826a55b528da1fb681374e7",
"0x16e272f1fb156b36cd0c39e3d43a15569d6099d91460ec1e7c9ffdd85b72c437",
"0xf289e4795fbf75ec56b8fe648bd4922280bee9f37e1021d2cdec90a3f32da595",
"0x99de3594dca3d51acc30ae1cb9f7ab618af7ce097c81a7422be75034d606f4a4",
"0x7cb00ca88d71d4d32ea18444d5741240cd1d182e45a1b2f1942a86a56a40d999",
"0x4b7c5615fd235431124cef838144a69a65624d23bdf19c6e1eebbb21330d812a",
"0x62640c1f9312ec6e4f08f903b5b39d1bb3ff983acb6ef7b94f57b9fff3ee12f4",
"0xe191cc961a9df60f6257e2a4d9afe9eb6c99a0bd960bbec5ce79244fd2235556",
"0xd0f7dd0bcada0685320c417de5895b7ba07f8c9f0a29dd9af28badcc337fe2fe"
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

