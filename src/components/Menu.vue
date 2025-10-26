<template>
    <div id="menubox">
        <div class="menubox_menu">
            <div class="menubox_menu_content">
                <div class="mmu_link">
                    <p>a×a</p>
                    <p>AAA</p>
                </div>
                <div class="mmu_link">
                    <p>b×b</p>
                    <p>BBB</p>
                </div>
                <div class="mmu_link">
                    <p>c×c</p>
                    <p>CCC</p>
                </div>
                <button @click="emits('update:modelValue', false)">Close Nav</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';
import { onMounted, watch } from 'vue';

// 父子组件参数传递
const props = defineProps({
    modelValue:Boolean
})
const emits = defineEmits(['update:modelValue'])
// 侦听参数WQ
watch(()=>props.modelValue,(newVal)=>{navAnimation(newVal);});

// 定义动画时间线
const tl = gsap.timeline({ paused:true});

function navAnimation(bool){
      if(bool){
        tl.play();
      }else{
        tl.reverse();
      }
      console.log("参数是:"+bool)
}

onMounted(()=>{
    tl.set('body',{overflow:'hidden'})
      .set('#menubox',{zIndex:1000})
      .fromTo('.menubox_menu',{yPercent:100},{duration:1.5,yPercent:0,ease:'power3.inOut'})
})

</script>

<style scoped>
#menubox{
    position: fixed;
    z-index: -1000;
}
.menubox_menu{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: antiquewhite;
}
.menubox_menu_content{
    position: relative;
    font-size: 4.5rem;
    width: 450PX;
}
.mmu_link{
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 1rem;
}

.mmu_link p:first-child {
    font-size: 1rem;
    writing-mode: vertical-lr;
}
</style>
