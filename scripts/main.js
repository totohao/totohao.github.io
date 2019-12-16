let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/lg.jpg') {
      myImage.setAttribute('src', 'image/lg2.jpg');
    } else {
      myImage.setAttribute('src', 'image/lg.jpg');
    }
}
// 这里首先把 <img> 元素的引用存放在 myImage 变量里。然后将这个变量的 onclick 事件与一个匿名函数绑定。每次点击图片时：

// 获取这张图片的 src 属性值。
// 用一个条件句来判断 src 的值是否等于原始图像的路径:
// 如果是，则将 src 的值改为第二张图片的路径，并在 <img> 内加载该图片。
// 如果不是（意味着它已经修改过）, 则把 src 的值重新设置为原始图片的路径，即原始状态。

// let myButton = document.querySelector('button')
// let myHeading = document.querySelector('head')
// function setUsername (){
//     let myName = prompt('请输入你的名字')
// }
// setUsername()
