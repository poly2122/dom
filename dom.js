window.dom={
    //创建节点
    create(tagName){
        return document.createElement("template")
        div2.innerHTML=String.trim()
        return container.content.firstChild
    },
//    在节点插入兄弟节点
       after(node,node2){
           node.parentNode.insertBefore(node2,node.nextSibling)
       },
    //    在节点前插入兄弟节点
    before(node,node2){
        // 在node2之前插入node
        node.parentNode.insertBefore(node2,node)
    },
    // 新增子节点
    append(parent,node){
        parent.appendChile(node)
    },
    // 新增父节点
    wrap(node,parent){
        dom.before(node,parent)
        dom.append(parent,node)
    },
    // 删除节点
    empty(node){
        const array=[]
        let x=node.firstChild
        while(x){
            array.push(dom.remove(node.firstChild))
            x=node.firstChild //直到第一个子节点不存在，即删除所有子节点，循环结束
        }
        return array
    },
    // 读写节点属性值
    attr(node,name,value){ //根据参数个数写不同代码，叫重载
        if (arguments.length===3){ //传入三个参数
            node.setAttribute(name,value)
            }else if(arguments.length===2){
                return node.getAttribute(name)
            }
        },
        //读写文本内容
        text(node, string) {
            if (arguments === 2) {
                if ("innerText" in node) {//根据不同浏览器写不同代码，叫适配
                    node.innerText = string //ie
                } else {
                    node.textContent = string  //firefox  Chrome
                }
            } else if (arguments === 1) {
                if ("innerText" in node) {//根据不同浏览器写不同代码，叫适配
                    return node.innerText  //ie
                } else {
                    return node.textContent  //firefox  Chrome
                }
            }
        },
        // 修改html内容
        html(node,string){
            if(arguments===2){
                node.innerHTML=string
            }else if(arguments===1){
                return node.innerHTML
            }
        },
        // 修改样式
        style(node,name,value){
            if(arguments.length===3){
                node.style[name]=value
            }else if(arguments.length===2){
                if(typeof name==="string"){
                    return node.style[name]
                }else if(name instanceof Object){
                    const Object=name
                    for(let key in Object){
                        node.style[key]=Object[key]
                    }
                }
            }
        },
        // 修改class属性
        class:{
            add(node,className){
                node.classList.add(className)
            },
            remove(node,className){
                node.classList.remove(className)
            },
            has(node,className){
                return node.classList.contains(className)
            }
        },
        // 添加删除事件
        on(node,eventName,fn){
            node.addEventListener(eventName,fn)
        },
        off(node,eventName,fn){
            node.removeEventListener(eventName,fn)
        },
        // 查找节点
        find(selector,scope){
            return(scope||document).querySelectorAll(selector)
        },
        // 查父节点
        parent(node){
            return node.parentNode
        },
        // 查子节点
        children(node){
            return node.children
        },
        // 查找兄弟节点
        siblings(node){
            return Array.from(node.parentNode.children).filter(n=>n!==node)
        },
        next(node){
            let x=node.nextSibling
            while(x&&x.nodeType===3){
                x=x.nextSibling
            }
            return x
        },
        // 查找一个节点
        previous(node){
            let x=node.previouSibling
            while(x&&x.nodeType===3){
                x=x.previouSibling
            }
            return x
        },
        // 遍历每个节点
        each(nodeList,fn){
            for(let i=0;i<nodeList.length;i++){
                fn.call(null,nodeList[i])
            }
        },
        // 查找前节点排第几
        index(node){
            const list=dom.children(node.parentNode)
            let i
            for(i=0;i<list.length;i++){
                if(list[i]===node){
                    break
                }
            }
            return i
        }
    }
