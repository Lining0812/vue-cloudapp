<template>
    <div class="origins">
        <h1 style="text-align: center;">起源</h1>
        <div class="card" v-for="(data,index) in datas" :key="index">
            <div class="content">
                <p>{{ data.title }}</p>
                <p>{{ data.dec }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const datas = ref([
    {
    title:"aaaa",
    dec:"Desc aaaaa"
    },
    {
    title:"bbbb",
    dec:"Desc bbbbb"
    },
    {
    title:"cccc",
    dec:"Desc ccccc"
    },
])
</script>

<style>
.card{
    width: 100vw;
    height: 100vh;
    background-color: beige;
    
    display: flex;
    justify-content: center;
    align-items: center;
}

.card .content{
    justify-content: center;
    align-items: center;
}

</style>