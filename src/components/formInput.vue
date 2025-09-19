<script setup lang="ts">
import { ref } from 'vue'
import FormButton from './formButton.vue'

const titleInput = ref('')
const memoInput = ref('')

const emit = defineEmits(['send'])

const submitForm = () => {
  const send = {
    title: titleInput.value,
    memo: memoInput.value,
  }
  emit('send', send)

  // 값 초기화 시키기
  titleInput.value = ''
  memoInput.value = ''
}
</script>

<template>
  <div>
    <div class="components-input-demo-size">
      <a-input v-model:value="titleInput" size="large" placeholder="Title" />
    </div>
    <br />
    <a-textarea v-model:value="memoInput" placeholder="Memo" :rows="4" />
  </div>
  <br />
  <FormButton @click="submitForm" />
</template>
