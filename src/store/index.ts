import {createStore as _createStore} from 'vuex'
import {findArchiveList, findPostCommentList, findPostList, findWeightList, getPostInfo} from "../api/post";
import {PostItem} from "../api/modules/post";
import {fileGet, findMenuList, getConfig} from "../api/sys";
import markdown from "../utils/markdown";
import {MenuItem} from "../api/modules/sys";

export function createStore() {
    return _createStore({
        state() {
            return {
                postList: [] as PostItem[],
                postCommentList: [] as PostItem[],
                weightList: [] as PostItem[],
                archiveList: [] as PostItem[],
                menuList: [] as MenuItem[],
                tocList: [],
                postInfo: {},
                configInfo: {},
                backImgUrl: '',
                page: 1,
                commentPage: 1,
                isNext: true,
                isCommentNext: true,
            }
        },
        getters: {
            getPostListData: state => {
                return state.postList;
            },
            getPostInfoData: state => {
                return state.postInfo;
            },
            getWeightListData: state => {
                return state.weightList;
            },
            getPage: state => {
                return state.page;
            },
        },
        mutations: {
            setPostList(state, data) {
                state.postList = [...state.postList, ...data.content];
            },
            setPostCommentList(state, data) {
                state.postCommentList = [...state.postCommentList, ...data.content];
            },
            setArchiveList(state, data) {
                state.archiveList = [...state.archiveList, ...data];
            },
            updatePage(state) {
                state.page++;
            },
            updateCommentPage(state) {
                state.commentPage++;
            },
            updateNext(state, data) {
                state.isNext = data;
            },
            updateCommentNext(state, data) {
                state.isCommentNext = data;
            },
            setPostInfo(state, data) {
                state.postInfo = data;
            },
            setWeightList(state, data) {
                state.weightList = [...state.weightList, ...data.content];
            },
            setCover(state, data) {
                state.postList = data;
            },
            setWeightCover(state, data) {
                state.weightList = data;
            },
            setConfigInfo(state, data) {
                state.configInfo = data;
            },
            setMenuList(state, data) {
                state.menuList = data;
            },
            setBackImgeUrl(state, data) {
                state.backImgUrl = data;
            },
            setContentToc(state, data) {
                state.tocList = data;
            },
        },
        actions: {
            async getPostInfo({commit}, id) {
                let data = await getPostInfo(id);
                if (data) {
                    if (data.context) {
                        data.context = markdown.marked(data.context)
                        const hnumList = markdown.toTocObj(data.context)
                        commit("setContentToc", hnumList);
                    }
                    commit("setPostInfo", data);
                }
            },
            async getBackImgUrl({commit}) {
                const url = await fileGet(0)
                if (url) {
                    commit("setBackImgeUrl", url);
                }
            },
            async getConfigInfo({commit}) {
                const data = await getConfig(0)
                if (data) {
                    commit("setConfigInfo", data);
                }
            },
            async findMenuList({commit}) {
                const data = await findMenuList(true)
                if (data) {
                    commit("setMenuList", data);
                }
            },
            async findPostList({commit, getters}) {
                const postResp = await findPostList(null, getters.getPage);
                if (postResp) {
                    if (postResp.content.length === 0) {
                        commit("updateNext", false);
                    }
                    commit("setPostList", postResp);
                }
            },
            async findPostCommentList({commit, getters}, id) {
                const postResp = await findPostCommentList(id, getters.getPage);
                if (postResp) {
                    if (postResp.content.length === 0) {
                        commit("updateCommentNext", false);
                    }
                    commit("setPostCommentList", postResp);
                }
            },
            async findArchiveList({commit}) {
                const postResp = await findArchiveList();
                if (postResp) {
                    commit("setArchiveList", postResp);
                }
            },

            async findWeightList({commit}) {
                const weightResp = await findWeightList();
                if (weightResp) {
                    commit("setWeightList", weightResp);
                }
            },
        }
    })
}
