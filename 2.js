var Person = {name:'张三',age:25}
let p = new Proxy (Person,  {
  set: function (target,prop,value) {
    console.log(target,prop,value)
  },
  get: function (a,b) {
  } 
}) 
p.age = 15
p.name = '李四'

function observer (data) {
  if(!data || typeof data !== 'object'){
    return 
  }
}