<template>
    <div style="text-align: center;color: #121212; margin-bottom: 2rem;">
        <h1>Concert</h1>
    </div>

    <div class="concertlist">
        <cardcomponent/>
        <cardcomponent/>
        <cardcomponent/>
        <cardcomponent/>
        <cardcomponent/>
    </div>
</template>

<script>

import cardcomponent from '@/components/TestCard.vue'

export default{
    components:{
        cardcomponent,
    }
}
</script>

<style>

.concertlist{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

</style>