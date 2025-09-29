<template>
  <h1>Cloud-App</h1>
  <RouterView></RouterView>
  <btncomponent/>
  <cardcomponent/>
</template>

<script>
import btncomponent from './components/Test.vue'
import cardcomponent from './components/TestCard.vue'

export default{
  components:{
    btncomponent,
    cardcomponent
  }
}

</script>