import { MongoClient, ServerApiVersion } from "mongodb";
const uri =
  "mongodb+srv://liordani444555:cdhdhp55@cluster1.dqj9tef.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server	(optional starting in v4.7)
  await client.connect();
  // Send a ping to confirm a successful connection
} catch (e) {
  console.error(e);
} finally {
  // Ensures that the client will close when you finish/error
}

export const db = client.db("facebook");
export const userCollection = db.collection("users");
export const postCollection = db.collection("posts");
export const registerCollection = db.collection("registers");
