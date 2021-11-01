<template>
  <header :class="data.topClass" role="banner" @mouseover="mouseOver" @mouseleave="mouseLeave">
    <div class="site-top">
      <div class="site-branding"><span class="site-title"></span></div>
      <Login></Login>
      <div class="searchbox"><i :class="data.searchCss" v-on:click="search"></i></div>
      <div class="lower">
        <nav>
          <ul id="menu-new" class="menu">
            <li v-for="menu in store.state.menuList">
              <a :href="menu.path">
                <span class="faa-parent animated-hover">
                  <i :class="menu.icon" aria-hidden="true"></i>
                  {{ menu.name }}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import {defineComponent, onMounted, reactive} from 'vue';
import {findMenuList} from "../api/sys";
import {MenuItem} from "../api/modules/sys";
import Login from "./Login.vue";
import {useStore} from "vuex";

export default defineComponent({
  components: {
    Login,
  },
  setup(props) {
    const store = useStore()
    const data = reactive({
      searchCss: 'iconfont js-toggle-search iconsearch icon-search',
      topClass: 'site-header no-select',
      lowerCantiner: 'display:none',
      toUpdate: true,
      isLogin: false,
      toLogin: false,
      avatar: 'https://media.inyaa.cn/none.png',
      username: '',
      scrollTop: '',
      menuList: [] as MenuItem
    })

    function jump(menu) {
      if (menu.code !== 'type') {
        this.$router.push(menu.path)
      }
    }

    function mouseOver() {
      this.lowerCantiner = ''
    }

    function mouseLeave() {
      if (this.toUpdate) {
        this.lowerCantiner = 'display:none'
      }
    }

    function handleScroll() {
      if (document.body.clientWidth > 860) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        const downHight = document.getElementById("banner_wave_1");
        if (scrollTop > downHight.offsetTop) {
          this.topClass = 'site-header no-select yya'
          this.toUpdate = false
          this.lowerCantiner = ''
        } else {
          this.topClass = 'site-header no-select'
          this.toUpdate = true
          this.lowerCantiner = 'display:none'
        }
      }
    }

    onMounted(async () => {
      window.addEventListener('scroll', handleScroll)
    });
    return {
      store,
      props,
      data,
      jump,
      mouseOver,
      handleScroll,
      mouseLeave,
    };
  },
});
</script>
<style scoped>
.site-top .lower nav {
  display: block !important;
}
</style>

