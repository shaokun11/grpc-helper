const path = require('path');
const shell = require('shelljs');
const rimraf = require('rimraf');

// https://github.com/shelljs/shelljs/issues/469
process.env.PATH += (path.delimiter + path.join(process.cwd(), 'node_modules', '.bin'));

const PROTO_DIR = path.join(__dirname, '../protos');
const MODEL_DIR = path.join(__dirname, '../models');
const MODEL_WEB_DIR = path.join(__dirname, '../models2');
const PROTOC_GEN_TS_PATH = process.platform === 'win32'
  ? path.join(__dirname, '../node_modules/.bin/protoc-gen-ts.cmd')
  : path.join(__dirname, '../node_modules/.bin/protoc-gen-ts');

const PROTOC_GEN_TS_WEB_PATH = process.platform === 'win32'
  ? path.join(__dirname, '../node_modules/.bin/protoc-gen-grpc-web.cmd')
  : path.join(__dirname, '../node_modules/.bin/protoc-gen-grpc-web');

rimraf.sync(`${MODEL_DIR}/*`);
rimraf.sync(`${MODEL_WEB_DIR}/*`);

const protoConfig = [
  `--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" `,
  `--grpc_out="grpc_js:${MODEL_DIR}" `,
  `--js_out="import_style=commonjs,binary:${MODEL_DIR}" `,
  `--ts_out="grpc_js:${MODEL_DIR}" `,
  `--proto_path ${PROTO_DIR} ${PROTO_DIR}/*.proto`,
];
// https://github.com/agreatfool/grpc_tools_node_protoc_ts/tree/master/examples
shell.exec(`grpc_tools_node_protoc ${protoConfig.join(' ')}`);
const webProtoConfig = [
  `--plugin="protoc-gen-ts=${PROTOC_GEN_TS_WEB_PATH}" `,
  `--js_out="import_style=commonjs,binary:${MODEL_WEB_DIR}" `,
  `--grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:${MODEL_WEB_DIR} `,
  `--proto_path ${PROTO_DIR} ${PROTO_DIR}/*.proto`,
];
shell.exec(`grpc_tools_node_protoc ${webProtoConfig.join(' ')}`);
// https://github.com/dcodeIO/protobuf.js#command-line
// https://github.com/dcodeIO/protobuf.js#command-line-api
