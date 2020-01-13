// 创建一个模板编译器
function Compiler (el,vm) {
    this.Compile(document.querySelector(el))
    console.log(document.querySelector(el))
  }
  Compiler.prototype.Compile = function (el) {
    console.log(el.childNodes)
    el.childNodes.forEach(node => {
        console.log(node.nodeType)
        if(node.nodeType === 1){
            console.log('element')
            this.compileElement(node)
        }else{
            console.log('text')
            this.compileText(node)
        }
    });
  }
Compiler.prototype.compileElement = function (node) {
    console.log('元素',node)
}  
Compiler.prototype.compileText = function (node) {
    console.log('文本',node)
}
function Vue(options){
    // this.message = options.data.message
    // this.foo = options.data.foo
    const { data } = options
    for ( let key in data ) {
        Object.defineProperty( this,key,{
            get () {
                console.log(`${key}被访问了`)
                return data[key]
            },
            set (newVal) {
                if(newVal !== data[key]){
                    console.log(`${key}被修改了`)
                    data[key] = newVal
                    // 对外发布一个通知，通知订阅者属性被修改了
                }
            }
        })
    }
    // this.message = '李四'
    // this.foo = '李四'
    this.foo
    new Compiler(options.el,this)
}


