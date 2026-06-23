<script setup >

defineProps({
    msg: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="card">
        {{ msg }}
    </div>
</template>


<style scoped>

.card{
    border: 1px solid black;
    padding: 10px;
    font-size: 20px;
    width: 300px;
    height: 100px;
    background-color: rgb(22, 144, 184);
    border-radius: 10px;
}
</style>