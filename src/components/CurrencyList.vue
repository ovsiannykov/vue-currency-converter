<template>
  <div class="curency-block">
    <p class="title">Exchange rate against UAH</p>
    <ul class="list">
      <CurrencyItem />
    </ul>
  </div>
</template>

<script>
import CurrencyItem from './CurrencyItem.vue';

export default {
  name: 'CurrencyList',
  components: {
    CurrencyItem,
  },
};
</script>

<style >
  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
