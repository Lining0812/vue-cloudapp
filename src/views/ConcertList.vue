<template>
    <div class="concert">
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
    </div>
</template>

<script setup>
import cardcomponent from '@/components/TestCard.vue'

</script>

<style>
.concertlist{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
</style> 