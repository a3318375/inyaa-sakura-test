<template>
  <div class="blank" style="padding-top: 0px;"></div>
  <div id="content" class="site-content">
    <div class="notice" style="margin-top:60px">
      <div class="notice-content">Are you going to Scarborough Fair</div>
    </div>
    <div class="top-feature-row"><h1 class="fes-title" style="font-family: 'Ubuntu', sans-serif;"><i
        class="fa fa-anchor" aria-hidden="true"></i> メイン</h1>
      <div class="top-feature-v2" v-for="weight in store.state.weightList">
        <div class="the-feature square from_left_and_right">
          <a :href="'/article/' + weight.id">
            <div class="img"><img :src="weight.cover">
            </div>
            <div class="info"><h3>Sakura</h3>
              <p>{{ weight.title }}</p></div>
          </a>
        </div>
      </div>
    </div>
    <div id="primary" class="content-area">
      <main id="main" class="site-main" role="main"><h1 class="main-title" style="font-family: 'Ubuntu', sans-serif;"><i
          class="fa fa-envira" aria-hidden="true"></i> Discovery</h1>
        <article class="post post-list-thumb  post-list-show" itemscope="" itemtype="http://schema.org/BlogPosting"
                 v-for="(post,index) in store.state.postList">
          <div :class="index%2 === 0? data.left: data.right">
            <a :href="'/article/' + post.id">
              <img class="lazyload" :src="post.cover ? post.cover : 'https://media.inyaa.cn/cover/7037ade43b1e484eac903a111b7ea709.jpg'">
            </a>
          </div>
          <div class="post-content-wrap">
            <div class="post-content">
              <div class="post-date"><i class="iconfont icon-time"></i>发布于 {{ post.createTime }}</div>
              <a :href="'/article/' + post.id" class="post-title"><h3>
                {{ post.title }}</h3>
              </a>
              <div class="post-meta">
                <span><EyeOutlined/>{{ post.views }} 阅读</span>
                <span class="comments-number"><CommentOutlined/>{{ post.comments }} 条评论
                  <a :href="'/article/' + post.id + '#comments'">{{ post.comments }} 条评论</a>
                </span>
                <span><i class="iconfont icon-file"></i><FolderOpenOutlined/>
                  <a :href="'/type/' + post.typeId">{{ post.typeName }}</a>
                </span>
              </div>
              <div class="float-content"><p>{{ post.summary }}</p>
                <div class="post-bottom">
                    <i class="iconfont icon-caidan"></i>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <div id="pagination"><a @click="initPost" v-if="store.state.isNext">Previous</a></div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive} from 'vue';
import {EyeOutlined, CommentOutlined, FolderOpenOutlined} from '@ant-design/icons-vue';
import {useStore} from 'vuex'
import {PostItem} from "../api/modules/post";

export default defineComponent({
  components: {
    EyeOutlined,
    CommentOutlined,
    FolderOpenOutlined
  },
  setup() {
    const store = useStore()
    const data = reactive({
      page: 1,
      isNext: true,
      left: 'post-left post-thumb',
      right: 'post-right post-thumb',
      weightList: [] as PostItem[],
      postList: [] as PostItem[],
    })

    function initPost() {
      store.commit('updatePage');
      store.dispatch('findPostList');
    }

    return {
      store,
      data,
      initPost,
    };
  },
  asyncData({store}) {
    store.dispatch('findWeightList');
    return store.dispatch('findPostList');
  }
});
</script>

<style>
.post-left {
  float: left;
}

.post-right {
  float: right;
}

.notice {
  background-image: url(https://cdn.jsdelivr.net/gh/Fuukei/Public_Repository@latest/vision/hyouryu/announcement_bg.jpg);
  border: none;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, .3);
  text-align: center;
}

.notice i,
.notice {
  color: #ffffff;
}

h1.fes-title,
h1.main-title {
  text-align: center;
}
</style>