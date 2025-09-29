<template>
  <h1>Cloud-App</h1>
  <RouterView></RouterView>
  <btncomponent/>
  <cardcomponent/>
  <TestButton/>
</template>

<script>
import btncomponent from './components/Test.vue'
import cardcomponent from './components/TestCard.vue'
import TestButton from './components/TestButton.vue';

export default{
  components:{
    btncomponent,
    cardcomponent,
    TestButton
  }
}

</script>