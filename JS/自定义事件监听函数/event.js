
// 通用事件绑定
// function bindEvent(elem,type,fn){
//     elem.addEventListener(type,fn)
// }

// const button1 = document.getElementById('button1')
// bindEvent(button1,'click',event=>{
//     event.target // 获取事件对象
//     event.prevenDefault() // 阻止默认事件
//     event.stopProgation() // 组织冒泡
// })

// const div3 = document.getElementById('div3')
// bindEvent(div3,'click',event=>{
//     event.preventDefault()
//     const target = event.target
//     if(target.nodeName === 'A') console.log(target.innerHTML)
// })


function bindEvent(elem,type,selector,fn){
    // 当只有三个参数的时候
    if(fn == null){
        fn = selector
        selector = null
    }
    elem.addEventListener(type,event=>{
        const target = event.target
        if(selector){
            // 代理
            // matches 一个代理元素是否符合一个css选择器
            if(target.matches(selector)){
                fn.call(target)
            }
        }
        else{
            // 普通绑定
            fn.call(target)
        }
    })
}
document.addEventListener('DOMContentLoaded',function(){
    bindEvent(document.getElementById('ul1'),'click','li',function(e){
        console.log(this.innerHTML)
    })
})
