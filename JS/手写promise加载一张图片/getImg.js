function getImg(src){
    return new Promise((resolve,reject)=>{
        let img = document.createElement('img')
        img.src = src
        img.onload = function(){
            document.body.appendChild(img)
            resolve(img)
        }
        img.onerror = function(){
            reject('图片加载失败')
        }
    })
}

const url1 = 'https://tvax4.sinaimg.cn/crop.0.0.750.750.180/007YL9Fqly8gd4u3l1y6aj30ku0kujs2.jpg?KID=imgbed,tva&Expires=1587090863&ssig=98z23YxQqT'
const url2 = 'https://wx2.sinaimg.cn/orj360/006Tfn2gly1gdwe5fjz71j30u0140gxv.jpg'

getImg(url1).then(img1=>{
    console.log(img1.width)
    return img1
}).then(img1=>{
    console.log(img1.height)
    return getImg(url2)
}).then(img2=>{
    console.log(img2.width)
}).catch(error=>{
    console.log(error)
})