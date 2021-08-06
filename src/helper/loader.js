let grpc = require("grpc");
const path = require("path");
let protoLoader = require("@grpc/proto-loader");
const klawSync = require('klaw-sync')
let PROTO_PATH = path.join( "protos");
const paths = klawSync(PROTO_PATH,{
  nodir:true,
})
// protos的路径 ,可以传递多个
let packageDefinition = protoLoader.loadSync(paths.map(item=>item.path), {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
module.exports = grpc.loadPackageDefinition(packageDefinition);
