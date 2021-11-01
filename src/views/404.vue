<template>
  <a-result status="404" title="404" sub-title="对不起没有找到页面." :style="resultHeight">
    <template #extra>
      <a-button type="primary">Back Home</a-button>
    </template>
  </a-result>
</template>
<script lang="ts">
import {defineComponent, onMounted} from 'vue';

export default defineComponent({
  setup() {
    let resHeight = '800px'
    onMounted(async () => {
      resHeight = window.screen.height + 'px'
    });
    return {
      resultHeight: 'height:' + resHeight
    };
  },
});
</script>