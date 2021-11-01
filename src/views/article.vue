<template>
  <div class="pattern-center single-center">
    <div class="pattern-attachment-img"><img :src="store.state.postInfo.cover"
                                             :data-src="store.state.postInfo.cover"
                                             class="lazyload" onerror="imgError(this,3)"
                                             style="width: 100%; height: 100%; object-fit: cover; pointer-events: none;">
    </div>
    <header class="pattern-header single-header"><h1 class="entry-title">{{ store.state.postInfo.title }}</h1>
      <p class="entry-census"><span><a href="https://2heng.xin/author/Mashiro/"><img src="https://media.inyaa.cn/avatar.png!inyaa"></a></span><span><a
          href="https://2heng.xin/author/Mashiro/">{{ store.state.postInfo.author }}</a></span><span class="bull">·</span>{{ store.state.postInfo.createTime }}<span
          class="bull">·</span>{{ store.state.postInfo.views }} 次阅读</p></header>
  </div>
  <div id="content" class="site-content">
    <div id="primary" class="content-area">
      <main id="main" class="site-main" role="main">
        <article id="post-4491"
                 class="post-4491 post type-post status-publish format-standard has-post-thumbnail hentry category-hacking tag-graphql tag-javascript tag-wordpress">
          <div class="entry-content" v-html="store.state.postInfo.context">
          </div>
          <div class="single-reward">
            <div class="reward-open">赏
              <div class="reward-main">
                <ul class="reward-row">
                  <li class="alipay-code"><img src="https://media.inyaa.cn/cover/ece1cc3bd65c4825ab76c1d43f99284e.png">
                  </li>
                  <li class="wechat-code"><img src="https://media.inyaa.cn/cover/2731eb9af31c421da18e8742271e121c.png">
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <footer class="post-footer">
            <div class="post-lincenses"><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
                                           target="_blank" rel="nofollow"><i class="fa fa-creative-commons"
                                                                             aria-hidden="true"></i>
              知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议</a></div>
            <div class="post-tags"><i class="iconfont icon-tags"></i> <a href="https://2heng.xin/tag/graphql/"
                                                                         rel="tag">GraphQL</a> <a
                href="https://2heng.xin/tag/javascript/" rel="tag">JavaScript</a> <a
                href="https://2heng.xin/tag/wordpress/" rel="tag">WordPress</a></div>
            <div class="post-like"><a href="javascript:;" data-action="ding" data-id="4491" class="specsZan "> <i
                class="iconfont icon-like"></i> <span class="count"> 39</span> </a></div>
          </footer>
        </article>
        <div class="toc-container">
          <a-anchor>
            <a-anchor-link :href="'#' + toc.id" :title="toc.title" v-for="toc in store.state.tocList">
              <a-anchor-link :href="'#' + tocH2.id" :title="tocH2.title" v-for="tocH2 in toc.childList">
                <a-anchor-link :href="'#' + tocH3.id" :title="tocH3.title" v-for="tocH3 in tocH2.childList">
                  <a-anchor-link :href="'#' + tocH4.id" :title="tocH4.title" v-for="tocH4 in tocH3.childList">
                    <a-anchor-link :href="'#' + tocH5.id" :title="tocH5.title" v-for="tocH5 in tocH4.childList">
                      <a-anchor-link :href="'#' + tocH6.id" :title="tocH6.title" v-for="tocH6 in tocH5.childList">
                      </a-anchor-link>
                    </a-anchor-link>
                  </a-anchor-link>
                </a-anchor-link>
              </a-anchor-link>
            </a-anchor-link>
          </a-anchor>
        </div>
        <section class="post-squares nextprev">
          <div :class="store.state.postInfo.nextBlog ? 'post-nepre half previous' : 'post-nepre full previous'"
               v-if="store.state.postInfo.previousBlog"><a :href="'/article/' + store.state.postInfo.previousBlog.id" rel="prev">
            <div class="background lazyloaded" :style="'background-image: url(' + store.state.postInfo.previousBlog.cover + ');'"></div>
            <span class="label">上一篇文章</span>
            <div class="info"><h3>{{ store.state.postInfo.previousBlog.title }}</h3>
              <hr>
            </div>
          </a></div>
          <div :class="store.state.postInfo.previousBlog ? 'post-nepre half next' : 'post-nepre full next'"
               v-if="store.state.postInfo.nextBlog"><a :href="'/article/' + store.state.postInfo.nextBlog.id" rel="next">
            <div class="background lazyloaded" :style="'background-image: url(' + store.state.postInfo.nextBlog.cover + ');'"></div>
            <span class="label">下一篇文章</span>
            <div class="info"><h3>{{ store.state.postInfo.nextBlog.title }}</h3>
              <hr>
            </div>
          </a></div>
        </section>
      </main>
    </div>
  </div>
  <section id="comments" class="comments">
    <InyaaPostComment v-model:commentList="store.state.postCommentList"></InyaaPostComment>
  </section>
</template>
<script lang="ts">
import {defineComponent, inject, onBeforeMount, reactive} from 'vue';
import {CopyOutlined} from '@ant-design/icons-vue';
import InyaaPostComment from "../components/InyaaPostComment.vue";
import {useStore} from "vuex";
import '../style/github.css'
import '../style/sakura.css'
import 'font-awesome/css/font-awesome.min.css'
import { copyText } from 'vue3-clipboard'

export default defineComponent({
  components: {
    CopyOutlined,
    InyaaPostComment
  },
  setup() {
    const mes = inject('$message')
    const store = useStore()
    const data = reactive({
      page: 1,
      commentId: '',
      postInfo: {},
      postCommentList: {},
      commentShow: false
    })
    function nextPage() {
      store.commit('updateCommentPage');
      store.dispatch('findPostCommentList');
    }
    function doCopy(codeNumber) {
      copyText(document.getElementById('to-copycode-' + codeNumber).innerHTML, undefined, (error, event) => {
        if (error) {
          console.log(error)
        } else {
          mes.success("复制成功");
          console.log(event)
        }
      })
    }
    onBeforeMount (async () => {
      if(!store.state.postInfo.title){
        //window.location.href = '/404'
      }
      window.doCopy = doCopy;
    });
    return {
      store,
      data,
      doCopy,
    };
  },
  asyncData({store, route}) {
    const blogId = route.value.params.id;
    store.dispatch('findPostCommentList', blogId);
    return store.dispatch('getPostInfo', blogId);
  }
});
</script>


<style scoped>

</style>
