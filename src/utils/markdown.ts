import marked from "inyaa-marked";
import hljs from "highlight.js";
import clipboard from 'clipboard';

class MarkUtils {
    constructor() {
        marked.setOptions({
            renderer: new marked.Renderer(),
            highlight: function (code) {
                return hljs.highlightAuto(code).value;
            },
            langPrefix: 'hljs ',
            pedantic: false,
            gfm: true,
            tables: true,
            breaks: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false
        })
    }

    marked(data: string) {
        if (data) {
            let content = marked(data); // 文章内容
            return content;
        } else {
            return '';
        }
    }

    toView() {
        const preList = window.document.getElementsByTagName('pre');
        if (preList) {
            Array.prototype.slice.call(preList).forEach((item) => {
                const codes = item.getElementsByTagName('code');
                const codeClass = codes[0].className;
                const classNameArr = codeClass.split(" ");
                let lang: string | undefined = "";
                classNameArr.some((className: any) => {
                    if (className && className.indexOf("language-") > -1) {
                        lang = className.substring(className.indexOf("-") + 1, className.length);
                        return true;
                    }
                });

                // 检测语言是否存在，不存在则自动检测
                const language = hljs.getLanguage(lang.toLowerCase());
                if (language == undefined) {
                    // 启用自动检测
                    const autolanguage = hljs.highlightAuto(codes[0]?.textContent);
                    codes[0]?.classList.remove("language-" + lang);
                    lang = autolanguage.language;
                    if (lang == undefined) {
                        lang = "text";
                    }
                    codes[0]?.classList.add("language-" + lang);
                } else {
                    lang = language.name;
                }
                item.classList.add("highlight-wrap");
                item.setAttribute("autocomplete", "off")
                item.setAttribute("autocorrect", "off")
                item.setAttribute("autocapitalize", "off")
                item.setAttribute("spellcheck", "off")
                item.setAttribute("autocomplete", "false")
                item.setAttribute("contenteditable", "false")
                item.setAttribute("design", "by LIlGG")
                codes[0]?.setAttribute("data-rel", lang.toUpperCase());
                codes[0].classList.add(lang.toLowerCase());
                // 启用代码高亮
                hljs.highlightBlock(codes[0]);

                item.addEventListener("dblclick", (e) => {
                    if (e.target !== this) return;
                    item.classList.toggle("code-block-fullscreen");
                    const htmlEl = item.getElementsByTagName('html');
                    htmlEl.classList.toggle("code-block-fullscreen-html-scroll");
                })
                Array.prototype.slice.call(codes).forEach((codeChild, i) => {
                    codeChild.setAttribute("id", "hljs-" + i)
                    codeChild.parentNode.innerHTML += '<a class="copy-code" href="javascript:" data-clipboard-target="#hljs-' + i +
                        '" title="拷贝代码"><CopyOutlined /></a>'
                    new clipboard(".copy-code");
                })
                item.innerHTML = item.innerHTML.replace('copyOutlined', 'CopyOutlined');
            })
        }
    }

    getTopObj(tocObj, newObj, number) {
        if (tocObj.num) {

        }
    }

    toTocObj(context: string) {
        const regex = new RegExp(/<([^\s]+).*?id="([^"]*?)".*?>(.+?)<\/\1>/gi);
        const matches = context.match(regex);
        const hnumList = [];
        for (const i in matches) {
            const parts = regex.exec(matches[i]);
            const num = parseInt(parts[1].substr(1))
            const topObj = {}
            topObj.num = parts[1]
            topObj.id = parts[2]
            topObj.title = parts[3]
            topObj.childList = []

            let saveStatus = true
            //h6  >  h1
            if (hnumList.length > 0 && num > parseInt(hnumList[hnumList.length - 1].num.substr(1))) { //取h1子节点，h2如果小于或者等于h6，则加入h1
                const childh1 = hnumList[hnumList.length - 1];
                //h6 比 h2
                if (childh1.childList.length > 0 && num > parseInt(childh1.childList[childh1.childList.length - 1].num.substr(1))) {  //h6 比 h2
                    const childh2 = childh1.childList[childh1.childList.length - 1];
                    if (childh2.childList.length > 0 && num > parseInt(childh2.childList[childh2.childList.length - 1].num.substr(1))) {  //h6 比 h3
                        const childh3 = childh2.childList[childh2.childList.length - 1];
                        if (childh3.childList.length > 0 && num > parseInt(childh3.childList[childh3.childList.length - 1].num.substr(1))) {  //h6 比 h4
                            const childh4 = childh3.childList[childh3.childList.length - 1];
                            if (childh4.childList.length > 0 && num > parseInt(childh4.childList[childh4.childList.length - 1].num.substr(1))) {  //h6 比 h5
                                const childh5 = childh4.childList[childh4.childList.length - 1];
                                if (childh5.childList.length === 0 || num <= parseInt(childh5.childList[childh5.childList.length - 1].num.substr(1))) {  //h6 比 h5
                                    childh5.childList.push(topObj)
                                    saveStatus = false
                                }
                            }
                            if (saveStatus) {
                                childh4.childList.push(topObj)
                                saveStatus = false
                            }
                        }
                        if (saveStatus) {
                            childh3.childList.push(topObj)
                            saveStatus = false
                        }
                    }
                    if (saveStatus) {
                        childh2.childList.push(topObj)
                        saveStatus = false
                    }
                }
                if (saveStatus) {
                    childh1.childList.push(topObj)
                    saveStatus = false
                }
            }
            if (saveStatus) {
                hnumList.push(topObj)
                saveStatus = false
            }
            regex.lastIndex = 0
        }
        return hnumList;
    }
}

const markdown = new MarkUtils();

export default markdown;
