import request from "../utils/request"; // 导入request中创建的axios实例

export const findMenuList = (enable: boolean) =>
    request.get('/inyaa-admin/menu/findMenuList', {params: {enable: enable}})

export const getConfig = (type: number) =>
    request.get('/inyaa-admin/config/findAll', {params: {type: type}})

export const fileGet = (type: number) =>
    request.get('/inyaa-picture/file/image', {params: {type: type}})
