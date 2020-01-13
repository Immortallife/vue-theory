function EventEimtter () {
    this.subs = {
        // a:[]
    }
}
EventEimtter.prototype.$on = function (eventType,callback) {
    this.subs[eventType] = this.subs[eventType] || []
    this.subs[eventType].push(callback)
    console.log(this.subs[eventType])
}
EventEimtter.prototype.$emit = function (eventType,...args) {
    let subs = this.subs[eventType] 
    if (subs) {
        subs.forEach(element => {
            element()
        });
    }
}
let e = new EventEimtter()
 e.$on('a',()=>{
    console.log('a1')
})
 e.$on('a',()=>{
    console.log('a2')
})
 e.$emit('a')