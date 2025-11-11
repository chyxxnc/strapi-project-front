<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getComponents } from '../../../utils'

const API_URL = import.meta.env.VITE_API_URL
const schema = ref<Record<string, any>>({})

onMounted(async () => {
  try {
    const response = await fetch(`${API_URL}/api/forms/schema`)
    const data = await response.json()
    schema.value = data.fields
    console.log(schema.value)
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <h1>This is Form Page</h1>
  <form action="">
    <div v-for="[key, field] in Object.entries(schema)" :key="key">
      <label :for="key">{{ key }}</label>

      <!-- {{ getComponents(field.type) }} -->
      <component :is="getComponents(field.type.toUpperCase())" v-bind="field"></component>
    </div>
    <button type="submit">save</button>
  </form>
</template>
