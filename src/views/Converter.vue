<template>
  <div class="converter">
    <Converter />
  </div>
</template>

<script>
// @ is an alias to /src
import Converter from '@/components/Converter.vue';

export default {
  name: 'Converter',
  components: {
    Converter,
  },
};
</script>
