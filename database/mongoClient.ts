import { MongoClient } from "https://deno.land/x/mongo@v0.24.0/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

// Mongo Atlas specific environment variables
const {
  MONGO_ATLAS_USERNAME,
  MONGO_ATLAS_PASSWORD,
  MONGO_ATLAS_CLUSTER,
  MONGO_ATLAS_DATABASE,
  MONGO_ATLAS_AUTH_MECHANISM,
  MONGO_ATLAS_COLLECTION,
} = config();

console.log(MONGO_ATLAS_USERNAME);
console.log(MONGO_ATLAS_PASSWORD);
console.log(MONGO_ATLAS_CLUSTER);
console.log(MONGO_ATLAS_DATABASE);
console.log(MONGO_ATLAS_AUTH_MECHANISM);
console.log(MONGO_ATLAS_COLLECTION);

const client = new MongoClient();
await client.connect(
  `mongodb+srv://${MONGO_ATLAS_USERNAME}:${MONGO_ATLAS_PASSWORD}@${MONGO_ATLAS_CLUSTER}/${MONGO_ATLAS_DATABASE}?authMechanism=${MONGO_ATLAS_AUTH_MECHANISM}`
);

// Defining schema interface
interface NeighborhoodSchema {
  _id: { $oid: string };
  name: string;
}

const db = client.database(MONGO_ATLAS_DATABASE);
export const neighborhoods = db.collection<NeighborhoodSchema>(
  MONGO_ATLAS_COLLECTION
);
