<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  enum: {
    type: Array,
    required: true, // 부모 컴포넌트가 prop을 무조건 넘겨줘야 함
  },
})
</script>

<template>
  <select name="" id="">
    <option v-for="option in props.enum">{{ option }}</option>
  </select>
</template>
