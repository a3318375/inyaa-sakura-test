<template>
  <div class="pattern-center ">
  </div>
  <a-menu id="leftmenu" style="float:left;padding:150px 0 0 20px;">
    <a-menu-item>菜单项1</a-menu-item>
    <a-menu-item>菜单项2</a-menu-item>
    <a-menu-item>菜单项3</a-menu-item>
  </a-menu>
  <div id="content" class="site-content">
    <div id="primary" class="content-area">
      <main id="main" class="site-main" role="main">
        <header class="page-header">
          <h1 class="cat-title">分类 [{{ typeName }}] 的文章</h1> <span class="cat-des"></span>
        </header>
            <article class="post post-list" itemscope="" itemtype="http://schema.org/BlogPosting"
                     v-for="post in postList">
              <div class="post-entry">
                <div class="feature"><a href="https://2heng.xin/2018/03/07/freedom-and-bread/">
                  <div class="overlay"><i class="iconfont icon-text"></i></div>
                  <img width="150" height="150"
                       src="https://2heng.xin/wp-content/uploads//2018/03/gato_mirando_el_amanecer___cat_looking_to_sunset_by_franletadesing-d657km1-150x150.jpg"
                       class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""></a></div>
                <h1 class="entry-title"><a href="https://2heng.xin/2018/03/07/freedom-and-bread/">{{ post.title }}</a>
                </h1>
                <div class="p-time"><i class="iconfont icon-time"></i>发布于 2018-03-07</div>
                <p>亚洲神话的破灭与亚洲价值观</p>
                <footer class="entry-footer">
                  <div class="post-more"><a href="https://2heng.xin/2018/03/07/freedom-and-bread/"><i
                      class="iconfont icon-caidan"></i></a></div>
                  <div class="info-meta">
                    <div class="comnum"><span><i class="iconfont icon-mark"></i><a
                        href="https://2heng.xin/2018/03/07/freedom-and-bread/#comments">24 条评论</a></span></div>
                    <div class="views"><span><i class="iconfont icon-attention"></i>6,868 热度</span></div>
                  </div>
                </footer>
              </div>
              <hr>
            </article>
        <div class="clearer"></div>
      </main>
      <div id="pagination"></div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  setup() {
    return {
      postList: [
        {
          title: '标题111'
        }
      ],
    };
  },
});
</script>

<style scoped>
#leftmenu {
  background-color: rgba(255, 255, 255, 0);
}

#leftmenu li {
  background-color: rgba(255, 255, 255, 0);
}
</style>