import { MongoProtocol } from "./protocol/mod.ts";

const socket = await Deno.connect({ port: 27017, transport: "tcp" });
console.log("Connected");

const protocol = new MongoProtocol(socket);

const res = await protocol.executeOpMsg(
  [{ kind: 0, body: { count: "profiles", "$db": "juanportal" } }],
);
console.log(res);

protocol.close();
console.log("Closed");
