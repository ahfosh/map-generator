<template>
  <Button size="sm" squared :disabled title="导出为 JSON" @click="handleExport">
    <FileExportIcon class="w-5 h-5" />
  </Button>
</template>

<script setup lang="ts">
import Button from './Elements/Button.vue'
import FileExportIcon from '@/assets/icons/file-export.svg'

const props = defineProps<{
  data: Polygon[]
  disabled?: boolean
}>()

function handleExport() {
  let data: Panorama[] = []
  props.data.forEach((polygon) => (data = data.concat(polygon.found)))
  const dataUri =
    'data:application/json;charset=utf-8,' +
    encodeURIComponent(JSON.stringify({ customCoordinates: data }))

  const name =
    props.data.length === 1 && props.data[0].feature.properties.name
      ? props.data[0].feature.properties.name
      : '生成的地图'

  const fileName = `${name} (${data.length} 个位置).json`

  const linkElement = document.createElement('a')
  linkElement.href = dataUri
  linkElement.download = fileName
  linkElement.click()
}
</script>
