function writeCode(prefix,code,fn){
	let domCode = document.querySelector('#code')
	domCode.innerHTML = prefix || ''
	let n = 0
	let id = setInterval(()=>{
	n += 1
	domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css);
	styleTag.innerHTML = prefix + code.substring(0,n)
	domCode.scrollTop = domCode.scrollHeight
	if(n >= code.length){
		window.clearInterval(id)
		fn.call()
	}
},5)
}

function writeMarkdown(markdown,fn){
	let domPaper = document.querySelector('#paper>.content')
	let n = 0
	let id = setInterval(()=>{
	n += 1
	domPaper.innerHTML = markdown.substring(0,n)
	domPaper.scrollTop = domPaper.scrollHeight
	if(n >= markdown.length){
		window.clearInterval(id)
		fn.call()
	}
},5)
}

var result = `
/*
 你好,我是高云鹏
 我将以动画的形式来介绍我自己
 但是只用文字太单调了
 我就用代码来介绍吧
 首先准备一些样式
 */
*{
	transition: all 1s;
}
html{
	background: rgb(222,222,222);
	font-size: 16px;
}
#code{
	border: 1px solid red;
	padding:16px;
}

/*旋转*/
#code{
	transform: rotate(360deg);
}
/*加一张白纸介绍一下自己*/
#code{
	position: fixed;
	left: 0;
	width: 50%;
	height: 100%
}

#paper{
	position: fixed;
	right: 0;
	width: 50%;
	height: 100%;
	background: black;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 16px;
}
#paper > .content{
	background: white;
	height: 100%;
	width: 100%;
}

	`
var result2 = 
	`
#paper{
	
}
	`
var md = `
# 自我介绍
 我叫高云鹏
 1994年6月9日出生
 学历大专
 自学前端半年 
 希望应聘前端开发
 
 #技能介绍
 熟悉javascript css
 #联系方式:
 电话:15210774923
 
`

writeCode('',result,()=>{
	createPaper(()=>{
		writeCode(result,result2,()=>{
			writeMarkdown(md)
		})
	})
})
function createPaper(fn){
	var paper = document.createElement('div')
	paper.id = 'paper'
	var content = document.createElement('pre')
	content.className = 'content'
	paper.appendChild(content)
	document.body.appendChild(paper)
	fn.call()
}

