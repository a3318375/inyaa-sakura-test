<template>
  <div class="blank" style="padding-top: 75px;"></div>
  <div id="content" class="site-content" style="height: 697.75px;">
    <div id="main">
      <header class="page-header"><h1 class="cat-title">时光轴</h1> <span class="cat-des"><p>TimeLine</p> </span></header>
      <div id="main-part">
        <article class="art">
          <div class="art-main">
            <div class="art-content">
              <a-timeline mode="alternate" v-for="(post, index) in store.state.archiveList">
                <a-timeline-item v-if="index%2 === 0">{{ post.title }} site {{ post.createTime }}</a-timeline-item>
                <a-timeline-item color="green" v-if="index%2 !== 0">{{ post.title }} site {{ post.createTime }}</a-timeline-item>
              </a-timeline>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ClockCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
import {useStore} from "vuex";
export default defineComponent({
  components: {
    ClockCircleOutlined,
  },
  setup() {
    const store = useStore()
    return {
      store,
    }
  },
  asyncData({store}) {
    return store.dispatch('findArchiveList');
  }
});
</script>

<style scoped>

</style>
