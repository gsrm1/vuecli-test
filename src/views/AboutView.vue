<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Card></Card>
  </div>
</template>

<script>
import Card from '@/components/Card-comp.vue';

export default {
  name: 'cardCustomName',
  components: {
    Card,
  },
};
</script>
