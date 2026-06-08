<script setup lang="ts">

import { reactive, ref } from "vue"

let persons = reactive([
  {
  id: 1 as number,
  name: "cente" as string,
  age: 24 as number
},
{
  id: 2 as number,
  name: "pedro" as string,
  age: 12 as number
},
{
  id: 3 as number,
  name: "ketlyn" as string,
  age: 27 as number
}
])
persons[0]!.name = "centera"

</script>

<template>
  <h2>MY FIRST VUE APP WITH TS</h2>

  <ul>
    <li v-for="(person, index) in persons" :key="person.id"> 
        {{ index }} - {{person.name}}
    </li>
  </ul>
</template>

<style scoped></style>
