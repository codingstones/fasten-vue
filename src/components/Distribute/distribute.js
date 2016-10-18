var fasten = require('fasten-core');
var distribution_service = new fasten.DistributionService(new fasten.HttpClient());

export default {
  name: 'distribute',
  data () {
    const rates = distribution_service.setRates(14, [{who: 'nestor', rate: 20}, {who: 'gualis', rate: 60}, {who: 'javi', rate: 20}])

    return {
      msg: 'Foolano & Foockencio',
      other_msg: 'Stuff & Grog',
      iteration: rates.id,
      rates: rates.rates
    }
  }
}
