<script setup lang="ts">
import { ref, onMounted } from 'vue'

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

      <textarea v-if="field.type === 'text'" v-bind="field"></textarea>
      <input type="text" v-if="field.type === 'string'" v-bind="field" />
      <input v-if="field.type === 'email'" v-bind="field" />
      <input v-if="field.type === 'password'" v-bind="field" />
      <input v-if="field.type === 'date'" v-bind="field" />
      <input type="number" v-if="field.type === 'integer'" v-bind="field" />
      <select v-if="field.type === 'enumeration'" v-bind="{ ...field, type: undefined }">
        <option v-for="option in field.enum">{{ option }}</option>
      </select>
    </div>
    <button type="submit">save</button>
  </form>
</template>
