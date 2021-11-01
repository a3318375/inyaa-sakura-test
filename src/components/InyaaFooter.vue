<template>
  <footer id="colophon" class="site-footer" role="contentinfo">
    <div class="site-info">
      <div class="footertext">
        <div class="img-preload"><img
            src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/wordpress-rotating-ball-o.svg">
          <img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/disqus-preloader.svg"></div>
        <p class="foo-logo"
           style="background-image: url('https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sakura.svg');"></p>
        <p style="font-family: 'Ubuntu', sans-serif;"><span style="color: #666666;">Crafted with <i
            class="fa fa-heart animated" style="color: #e74c3c;"></i> by <a rel="me"
                                                                            href="https://hello.2heng.xin/@mashiro"
                                                                            target="_blank"
                                                                            style="color: #000000;text-decoration:none;">{{store.state.configInfo.WEB_ADMIN_NAME}}</a></span>
        </p>
        <p>© 2020 樱花庄的白猫 <a href="http://www.beian.miit.gov.cn" target="_blank">{{store.state.configInfo.WEB_ICP}}</a></p>
        <p>本站由 <a href="https://www.upyun.com/?utm_source=lianmeng&amp;utm_medium=referral">
          <img src="https://media.inyaa.cn/upai.png!brand"></a> 提供CDN加速/云存储服务</p>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import {useStore} from "vuex";

export default defineComponent({
  setup() {
    const store = useStore()
    return {
      store
    };
  },
});
</script>
