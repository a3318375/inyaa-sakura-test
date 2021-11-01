<template>
  <div class="pattern-center ">
    <div class="pattern-attachment-img"><img
        src="https://2heng.xin/wp-content/uploads//2018/01/KamigamiMabors-Saenai-Heroine-no-Sodatekata-Flat-11-1080p-x265-Ma10p-AAC.mkv_20180110_201351.552.jpg"
        data-src="https://2heng.xin/wp-content/uploads//2018/01/KamigamiMabors-Saenai-Heroine-no-Sodatekata-Flat-11-1080p-x265-Ma10p-AAC.mkv_20180110_201351.552.jpg"
        class="lazyload" onerror="imgError(this,3)"
        style="width: 100%; height: 100%; object-fit: cover; pointer-events: none;"></div>
    <header class="pattern-header "><h1 class="entry-title">关于</h1></header>
  </div>
  <div id="content" class="site-content">
    <div id="primary" class="content-area">
      <main id="main" class="site-main" role="main">
        <article id="post-1109" class="post-1109 page type-page status-publish has-post-thumbnail hentry">
          <div class="entry-content">
            <p>本人为java开发，也算是工作多年</p>
            <p>第一次是用ssm + jsp + bootstrap做的，当时因为服务器很贵，所以很快就放弃了</p>
            <p>后台前端经过多次变化，比如，改用了vue + iview却不会做自适应，之后又改用了nodejs+layui</p>
            <p>前一阵用新号，买了2H8G5M的服务器，一次买了3年。</p>
            <p>前一阵用了wordpress做博客，但是及其不方便</p>
            <p>所以就有了现在的博客，后端采用了spring boot，搭建了一套oauth2，认证服务器、授权服务器和客户端。授权服务器和客户端，也切到了最新的写法。</p>
            <p>当然，目前还没完善,还在后续尝试中。比如服务器配置比较好，尝试了一键k8s，尝试用k8s的配置中心、服务注册、服务发现。</p>
            <p>前端采用了，vue3 + vite2。UI借鉴了大佬的wordpress的Sakura主题，也不断在完善中</p>
          </div>
          <footer class="entry-footer"></footer>
        </article>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({

});
</script>

<style scoped>
.moe-mashiro {
  font-size: 35px !important
}
.entry-content h4:before {
  content: "";
  margin-right: 5px;
  color: #FF6D6D;
}
</style>
