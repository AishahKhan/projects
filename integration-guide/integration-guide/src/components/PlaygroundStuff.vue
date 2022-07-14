<script setup>
import { ref } from 'vue'

const text = ref('Edit me')
const message=ref('Name has clicked')


function handleButtonClick()
{
    message.value=`${text.value} has clicked`
}


</script>

<template>
    <div>
        <h1>{{message}}</h1>
        <button @click="handleButtonClick">Click </button>
        <input v-model="text" placeholder="text here" />\
    </div>

</template>
