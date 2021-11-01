import request from "../utils/request"; // 导入request中创建的axios实例

export const findWeightList = () =>
    request.get('/inyaa-admin/blog/web/list', {params: {isHot: true}})

export const findArchiveList = () =>
    request.get('/inyaa-admin/blog/web/archive/list')

export const findPostList = (typeId: number, page: number) =>
    request.get('/inyaa-admin/blog/web/list', {params: {typeId: typeId, page: page, size: 10}})

export const findPostCommentList = (blogId: number, page: number) =>
    request.get('/inyaa-web/blog/comment/list', {params: {blogId: blogId, page: page, size: 10}})

export const getPostInfo = (id: number) =>
    request.get('/inyaa-admin/blog/web/info', {params: {id: id}})
