import { MongoClient } from "https://deno.land/x/mongo@v0.24.0/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

// Mongo Atlas specific environment variables
const MONGO_ATLAS_USERNAME = config()["MONGO_ATLAS_USER"];
const MONGO_ATLAS_PASSWORD = config()["MONGO_ATLAS_PASSWORD"];
const MONGO_ATLAS_CLUSTER = config()["MONGO_ATLAS_CLUSTER"];
const MONGO_ATLAS_DATABASE = config()["MONGO_ATLAS_DATABASE"];
const MONGO_ATLAS_AUTH_MECHANISM = config()["MONGO_ATLAS_AUTH_MECHANISM"];
const MONGO_ATLAS_COLLECTION = config()["MONGO_ATLAS_COLLECTION"];

const client = new MongoClient();
await client.connect(
  `mongodb+srv://${MONGO_ATLAS_USER}:${MONGO_ATLAS_PASSWORD}@${MONGO_ATLAS_CLUSTER}/${MONGO_ATLAS_DATABASE}?authMechanism=${MONGO_ATLAS_AUTH_MECHANISM}`
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
