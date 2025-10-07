<template>
  <router-link :to="{name:'albuminfo',params:{id:album.id}}">
    <div class="card">
      <img src="@/assets/test.jpg" alt="测试图片" class="card__image">
      <div class="card__content">
        <p class="card__title">{{ album.title }}</p>
        <p class="card__description">{{ album.description }}</p>
      </div>
    </div>
  </router-link>
</template>

<script setup>
const props=defineProps({
  album:{
    type:Object
  }
})

</script>

<style scoped>
  .card {
    position: relative;
    width: 100%;
    height: auto;
    /* margin: 10px; */
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #333;
    font-weight: 700;
  }

  .card:hover .card__image {
    scale: 0;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #777;
    line-height: 1.4;
  }
</style>