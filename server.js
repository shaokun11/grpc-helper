let grpc = require("grpc");
const {Greeter} = require("./comm");

function sayHello(call, callback) {
  callback(null, {message: "Hello " + call.request.name});
}
/**
 * 异步实现
 * @param call
 * @param cb
 */
async function test(call, cb) {
  let res = await new Promise(resolve => setTimeout(() => resolve(1), 5000));
  cb(null, {message: "res--->" + res});
}

void function main() {
  let server = new grpc.Server();
  // 注册服务
  server.addService(Greeter.service, {
    sayHello,
    test
  });
  //绑定服务
  server.bind("localhost:50051", grpc.ServerCredentials.createInsecure());
  // 启动服务
  server.start();
}();
