let grpc = require("grpc");
const {Greeter} = require("./comm");

function main() {
  //实例化service
  let client = new Greeter(
    "localhost:50051",
    grpc.credentials.createInsecure()
  );

  let user = "shaokun";
  // 调用 service暴露出来的接口
  client.sayHello({name: user}, function (err, response) {
    console.log("Greeting:", response.message);
  });
  // 调用 service暴露出来的接口
  client.test({name: user}, function (err, response) {
    console.log("Greeting:", response.message);
  });

}

main();
