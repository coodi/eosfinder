import Eos from 'eosjs'
let config = {
    httpEndpoint: 'http://192.168.122.100:8033',
    mockTransactions: () => 'pass', // or 'fail'
    transactionHeaders: (expireInSeconds, callback) => {
      callback(null/*error*/, headers)
    },
    expireInSeconds: 60,
    broadcast: true,
    debug: true,
    sign: true
  }


  let eos = Eos.Localnet(config)

  export {eos}
