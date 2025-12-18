import { ref, reactive } from 'vue'

const selected = ref<Polygon[]>([])

const select = ref('选择国家或绘制多边形')

const state = reactive({
  started: false,
})

export function useStore() {
  return { selected, select, state }
}
