<script setup lang="ts">
import FormInput from '../components/formInput.vue'
const API_URL = import.meta.env.VITE_API_URL

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
</script>

<template>
  <main>
    <FormInput @send="handelSubmit" />
  </main>
</template>
