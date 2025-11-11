import { defineAsyncComponent } from 'vue'

// 상수
const COMPONENTS_MAP = {
  TEXT: defineAsyncComponent(() => import('../views/home/form/components/InputLongText.vue')),
  STRING: defineAsyncComponent(
    () => import('../../src/views/home/form/components/InputShortText.vue'),
  ),
  PASSWORD: defineAsyncComponent(() => import('../../src/views/home/form/components/InputPW.vue')),
  EMAIL: defineAsyncComponent(() => import('../../src/views/home/form/components/InputEmail.vue')),
  DATE: defineAsyncComponent(() => import('../../src/views/home/form/components/Date.vue')),
  ENUMERATION: defineAsyncComponent(
    () => import('../../src/views/home/form/components/SelectBox.vue'),
  ),
}

// typeof : 변수 타입 뽑아내기 (TEXT : string)
// keyof : 키만 뽑아내기 (TEXT)
export const getComponents = (key: keyof typeof COMPONENTS_MAP) => {
  console.log(key)
  return COMPONENTS_MAP[key]
}
