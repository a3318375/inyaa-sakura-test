<template>
  <div class="headertop filter-dot" :style="$route.path === '/' ? 'height: auto;' : 'height: auto;display: none;'">
    <div id="banner_wave_1"></div>
    <div id="banner_wave_2"></div>
    <figure id="centerbg" class="centerbg" style="background: rgba(0, 0, 0, 0); height: 100vh;">
      <div class="focusinfo">
        <div class="header-tou"><a href="https://asuhe.jp" data-pjax-state=""><img src="https://media.inyaa.cn/99db72d3abaaef4beece7e9f94b3623.jpg"></a></div>
        <div class="header-info"><p>ありふれたあの日々をただ思い返す</p></div>
        <div class="top-social">
          <li id="bg-pre" @click="pre"><img src="https://cdn.jsdelivr.net/gh/Fuukei/Public_Repository@latest/vision/display_icon/muh2/pre.png"></li>
          <li class="qq"><a href="tencent://message/?uin=184608371" title="Initiate chat ?" data-pjax-state=""><img src="https://cdn.jsdelivr.net/gh/Fuukei/Public_Repository@latest/vision/display_icon/fluent_design/qq.png"></a></li>
          <li id="bg-next" @click="next"><img src="https://cdn.jsdelivr.net/gh/Fuukei/Public_Repository@latest/vision/display_icon/muh2/next.png"></li>
        </div>
      </div>
    </figure>
    <div id="video-container" style="">
      <video id="bgvideo" class="video" video-name="" src="" width="auto" preload="auto" style="min-height: 1298px;"></video>
      <div id="video-btn" class="loadvideo videolive"></div>
      <div id="video-add"></div>
      <div class="video-stu"></div>
    </div>
    <div class="headertop-down faa-float animated" onclick="headertop_down()"><span> <i class="fa fa-chevron-down" aria-hidden="true"></i> </span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    function pre() {

    }

    function next() {
    }

    return {
      pre,
      next
    };
  },
});
</script>