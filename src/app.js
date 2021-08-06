
let grpc = require("grpc");
const {Greeter} = require("./helper/loader");
const {Test} = require("./handler/test")
void function main() {
  let server = new grpc.Server();
  // 注册服务
  server.addService(Greeter.service, new Test);
  //绑定服务
  server.bind("localhost:50051", grpc.ServerCredentials.createInsecure());
  // 启动服务
  server.start();
}();
