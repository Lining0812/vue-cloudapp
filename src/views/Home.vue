<template>
    <h1>Home</h1>

    <div class="container">
        <div class="box1">
            <h2>Box1</h2>
        </div>
        <div class="box2">
            <h2>Box2</h2>
        </div>
        <div class="box3">
            <h2>Box3</h2>
        </div>
    </div>


</template>

<style>
.container{
    height: 700px;
    background-color: azure;
    position: relative;
    display: flex;
}

.box1{
    width: 200px;
    height: 200px;
    background-color: aquamarine;
    position: relative;
    top: 100px;
    left: 50px;
}

.box2{
    width: 200px;
    height: 200px;
    background-color:blue;
    position: absolute;
    top: 200px;
    left: 100px;
}

.box3{
    width: 200px;
    height: 200px;
    background-color:red;
}
</style>

<script>
</script>