<script setup lang="ts">
import FormInput from '../components/formInput.vue'
import { ref, onMounted } from 'vue'
const API_URL = import.meta.env.VITE_API_URL
const schema = ref<Record<string, any>>({})

const handelSubmit = async (formData: any) => {
  try {
    const response = await fetch(`${API_URL}/api/forms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: formData,
      }),
    })
    if (response.ok) console.log('데이터 저장 성공')
    else console.log('데이터 저장 실패')
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  try {
    const response = await fetch(`${API_URL}/api/forms/schema`)
    // const data = await response.json()
    // schema.value = data.fields
    console.log(response)
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <main>
    <FormInput :schema="schema" @send="handelSubmit" />
  </main>
</template>
