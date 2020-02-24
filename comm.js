let grpc = require("grpc");
const path = require("path");
let protoLoader = require("@grpc/proto-loader");
let PROTO_PATH = path.join(__dirname, "./protos/helloworld.proto");
// protos的路径 ,可以传递多个
let packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
module.exports = grpc.loadPackageDefinition(packageDefinition);
