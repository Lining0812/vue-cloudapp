<template>
    <div style="text-align: center;color: #121212; margin-bottom: 2rem;">
        <h1>Album</h1>
    </div>

    <div class="albumlist">
        <AlbumCard v-for="album in testalbumlist" 
        :key="album.id" 
        :album="album"/>
    </div>
</template>

<script setup>

import AlbumCard from '@/components/AlbumCard.vue'
import { ref } from 'vue'

const testalbumlist = ref([
    {id:1,title:'没语季节',description:'个人首张专辑'},
    {id:2,title:'没语季节2',description:'个人第二张专辑'},
    {id:3,title:'没语季节3',description:'个人第三张专辑'},
    {id:4,title:'没语季节4',description:'个人第四张专辑'},
    {id:5,title:'没语季节5',description:'个人第五张专辑'},
]);
</script>

<style>

.albumlist{
    margin: 0 2rem;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 2rem;

}

</style>