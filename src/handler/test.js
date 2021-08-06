exports.Test = class Test {
    sayHello(call, callback) {
      console.log(call.request)
     callback(null, {message: "Hello " + call.request.name});
   }
   /**
    * 异步实现
    * @param call
    * @param cb
    */
   async  test(call, cb) {
     let res = await new Promise(resolve => setTimeout(() => resolve(1), 5000));
     cb(null, {message: "res--->" + res});
   }
 }
