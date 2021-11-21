<template>
  <li class="currency-item card" v-bind:id="value.ccy" v-for="value in stock" :key="value.stock">
    <div>
      <div class="name current">{{value.ccy}}</div>
    </div>
    <div>
      <div class="valut card-titile">BUY</div>
      <div class="name">{{Math.round(parseFloat(value.buy) * 100) / 100}}</div>
    </div>
    <div>
      <div class="valut card-titile">SALE</div>
      <div class="name">{{Math.round(parseFloat(value.sale) * 100) / 100}}</div>
    </div>
    <div>
      <button @click="Follow(value.ccy, 'need')" class="like-btn btn btn-primary"> &#10084;</button>
    </div>
  </li>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CurrencyItem',
  data() {
    return {
      stock: [],
      errors: [],
    };
  },
  created() {
    axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then((responce) => {
        const result = responce.data;
        this.stock = result;
        this.stock.id = this.stock.ccy;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    Follow(index) {
      const id = index;
      const arr = this.stock;
      const element = arr.find((item) => item.ccy === id);
      const i = arr.indexOf(element);
      arr.splice(i, 1);
      arr.unshift(element);
    },
  },
};
</script>

<style lang="scss">
.currency-item {
  display: flex;
  width: 320px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
}
.card-titile {
  font-size: 10px;
}
.current {
  font-size: 25px;
  font-weight: 500;
}
</style>
