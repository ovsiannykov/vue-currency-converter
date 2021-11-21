<template>
  <div>
    <h2>Converter</h2>
    <div class="container convertr-block">
      <div class="what">
        <label class="currency-label">What</label>
        <select class="form-select" v-model="fourValue" @change="onChange2(fourValue)">
          <option :value="uah_value">UAH</option>
          <option :value="usd_value">USD</option>
          <option :value="eur_value" selected>EUR</option>
          <option :value="rur_value">RUR</option>
          <option :value="bts_value">BTC</option>
        </select>
        <label class="currency-label">To</label>
          <select class="form-select" v-model="firstValue" @change="onChange(firstValue)">
          <option :value="uah_value">UAH</option>
          <option :value="usd_value" >USD</option>
          <option :value="eur_value">EUR</option>
          <option :value="rur_value">RUR</option>
          <option :value="bts_value">BTC</option>
        </select>
        <label class="currency-label">Number</label>
        <input class="form-control input" type="number" v-model="post.title1" />
      </div>
      <div class="tilda">
        <button class="btn btn-primary btn-lg conver-button" @click="Calc()">Convert</button>
      </div>
      <div class="to to-tilda">
        RESULT: {{ this.post.result }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Convereter',
  data() {
    return {
      usd_value: 0,
      eur_value: 0,
      rur_value: 0,
      bts_value: 0,
      uah_value: 1,
      errors: [],
      post: {
        title1: 1,
        title2: 0,
        val1: 0,
        val2: 0,
        result: 0,
      },
    };
  },
  created() {
    axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then((responce) => {
        const result = responce.data;
        const usd = result.find((item) => item.ccy === 'USD');
        this.usd_value = usd.buy;
        const eur = result.find((item) => item.ccy === 'EUR');
        this.eur_value = eur.buy;
        const rur = result.find((item) => item.ccy === 'RUR');
        this.rur_value = rur.buy;
        const btc = result.find((item) => item.ccy === 'BTC');
        this.bts_value = btc.buy;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    Calc() {
      const result = (this.post.title1 / this.val1) * this.val2;
      this.post.result = result.toFixed(3);
    },
    onChange(value) {
      this.val1 = value;
    },
    onChange2(value) {
      this.val2 = value;
    },
  },
};
</script>

<style>
.convertr-block {
  display: flex;
  justify-content: center;
  align-items: center;
}
.what, .to {
  display: flex;
  flex-direction: column;
}
.tilda {
  margin-left: 50px;
  margin-right: 25px;
  font-size: 40px;
}

.to-tilda {
  margin-left: 25px;
  margin-right: 25px;
  font-size: 40px;
}

.input {
  margin-top: 10px;
}

.currency-label {
  margin-bottom: 10px;
  margin-top: 10px;
}

.conver-button {
  font-weight: 500;
}

@media (max-width: 600px) {
  .convertr-block {
    flex-direction: column;
  }
  .to, .what {
    margin-top: 30px;
  }
  .conver-button {
    margin-top: 40px;
  }
}

</style>
