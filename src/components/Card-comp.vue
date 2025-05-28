<template>
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{ title }}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{ subtitle }}</h6>
    <p class="card-text">{{ text }}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      title: '這是一段標題',
      subtitle: '這是副標題',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    };
  },
};
</script>
