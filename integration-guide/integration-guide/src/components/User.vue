<script setup>
import { ref } from 'vue'

const input = ref('Edit me')
const results=ref([]);

function capsInput() {
    const result = input.value.toUpperCase()
    input.value = result
    results.value.push(result)

}

function lowerCase() {
    const result = input.value.toLowerCase()
    input.value = result
    results.value.push(result)
}

</script>



<template>
    <input v-model="input" placeholder="text here" />
    <button id="capitalizeButton" @click="capsInput">Click to put input in caps</button>
    <button id="lowercaseButton" @click="lowerCase">Click to put input in lowercase</button>
    
    <ul>
        <li v-for="(result) in results">
        {{result}}
        </li>

     </ul>

<!-- <table>
    <thead>
<tr>
    <th>Input</th>
    <th>Result</th>
</tr>
</thead>
<tbody>
<tr v-for="(result) in results">
<td>{{input}}</td>
<td>{{result}}</td>
</tr>
</tbody>
</table> -->



<!-- Show results?
<input type="checkbox" id="checkbox" v-model="checked"> -->
<button @click="resultsdisplay = !resultsdisplay">Show results?</button>
<h1 v-if="resultsdisplay">{{results}} test?</h1>
<h1 v-else>click button to display results</h1>




</template>