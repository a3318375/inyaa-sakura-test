<template>
  <div class="header-user-avatar">
    <a @click="showModal">
      <img class="faa-shake animated-hover" :src="data.avatar" width="30" height="30">
    </a>
    <a-modal
        v-model:visible="visible"
        title="Basic Modal"
        @ok="handleOk"
    >
      <template #footer>
        <GithubOutlined :style="{fontSize: '32px', color: '#08c', padding: '0 0 15px 20px'}" @click="loginByGithub"/>
        <QqOutlined :style="{fontSize: '32px', color: '#08c', padding: '0 0 15px 20px'}" @click="loginByQQ"/>
      </template>
      <a-form :model="formState">
        <a-form-item label="账号">
          <a-input v-model:value="formState.username"/>
        </a-form-item>
        <a-form-item label="密码">
          <a-input v-model:value="formState.password"/>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 8 }">
          <a-button type="primary" @click="onSubmit">登陆</a-button>
          <a-button style="margin-left: 10px">注册</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
    <div class="header-user-menu" v-if="!data.isLogin">
      <div class="herder-user-name no-logged">Whether to
        <a href="https://2heng.xin/login/" target="_blank" style="color:#333;font-weight:bold;text-decoration:none">log
          in</a> now?
      </div>
    </div>
    <div class="header-user-menu" v-if="data.isLogin">
      <div class="herder-user-name">当前已登录
        <div class="herder-user-name-u">{{ username }}</div>
      </div>
      <div class="user-menu-option"><a v-on:click="logout" target="_top">退出登录</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive, ref} from 'vue';
import {GithubOutlined, QqOutlined} from '@ant-design/icons-vue';

interface FormState {
  username: string;
  passowrd: string;
}
export default defineComponent({
  components: {
    GithubOutlined,
    QqOutlined,
  },
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      username: '',
      passowrd: '',
    });
    const data = reactive({
      isLogin: false,
      avatar: 'https://media.inyaa.cn/none.png',
      username: '',
      scrollTop: '',
      loginParams: {},
    })

    const visible = ref<boolean>(false);

    const showModal = () => {
      visible.value = true;
    };

    const loginByGithub = () => {
      window.location.href = 'https://inyaa.cn/inyaa-gateway/inyaa-web/oauth2/authorization/github'
    }
    const loginByQQ = () => {
      window.location.href = 'https://inyaa.cn/inyaa-gateway/inyaa-web/oauth2/authorization/qq'
    }
    const handleOk = (e: MouseEvent) => {
      console.log(e);
      visible.value = false;
    };

    const handleCancel = (e: MouseEvent) => {
      console.log(e);
      visible.value = false;
    };
    return {
      formState,
      data,
      visible,
      showModal,
      handleOk,
      handleCancel,
      loginByGithub,
      loginByQQ,
    };
  },
});
</script>
