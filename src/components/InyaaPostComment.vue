<template>
  <a-list
      class="comment-list"
      :header="`${commentList.length} replies`"
      item-layout="horizontal"
      :data-source="commentList"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <a-comment author="回复1号" avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png">
          <template #actions>
            <span>Reply to</span>
          </template>
          <template #content>
            <p>
              {{ item.content }}
            </p>
          </template>
          <template #datetime>
            <a-tooltip :title="item.createTime">
              <span>{{ dayjs(item.createTime).fromNow() }}</span>
            </a-tooltip>
          </template>
          <a-comment v-if="item.childList?.length > 0" v-for="child in item.childList">
            <template #actions>
              <span>Reply to</span>
            </template>
            <template #author>
              <a>{{ child.author }}</a>
            </template>
            <template #avatar>
              <a-avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
              />
            </template>
            <template #content>
              <p>{{ child.content }}</p>
            </template>
          </a-comment>
        </a-comment>
      </a-list-item>
    </template>
  </a-list>
  <a-comment>
    <template #avatar>
      <a-avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
      />
    </template>
    <template #content>
      <a-form-item>
        <a-textarea :rows="4" v-model:value="data.content" />
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit" type="primary" @click="handleSubmit">
          Add Comment
        </a-button>
      </a-form-item>
    </template>
  </a-comment>
</template>
<script lang="ts">
import dayjs from 'dayjs';
import {defineComponent, reactive} from 'vue';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export default defineComponent({
  props: {
    commentList: Object
  },
  setup(props) {
    const data = reactive({
      content: '',
    });
    function handleSubmit() {

    }
    return {
      data,
      handleSubmit,
      commentList: props.commentList,
      data: [
        {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
              '这个是假的，正在开发中.',
          datetime: dayjs().subtract(1, 'days'),
          children: [{
            actions: ['Reply to'],
            author: '回复1号',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content:
                '测试,测试,测试,测试,NMD，我回复你了.',
            datetime: dayjs().subtract(2, 'days'),
          }],
        },
        {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
              'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: dayjs().subtract(3, 'days'),
        },
      ],
      dayjs,
    };
  },
});
</script>
