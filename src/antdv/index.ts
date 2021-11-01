import type { App } from "vue"

import { message, Timeline, Anchor, Tooltip, Modal, List, Comment, Result, Button, Menu, Form, Input, Avatar } from 'ant-design-vue';

const antdComponents = [
    Timeline,
    List,
    Tooltip,
    Modal,
    Comment,
    Result,
    Button,
    Menu,
    Form,
    Input,
    Avatar,
    Anchor,
]

// 应用组件
export function useAntd(app: App) {
    // 循环应用
    antdComponents.forEach(com => {
        app.use(com)
    })
    app.provide('$message', message)
}
