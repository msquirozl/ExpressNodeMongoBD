//que imprima  conectivdad
console.log (" Bievenido  a MongodbConnect.js");
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://michelquiroz229:rkj6UTzKdK7y34vm@cluster0.0f4bh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Cree un MongoClient con un objeto MongoClientOptions para configurar la versión de API estable
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function main() {
  try {
    // Conecte el cliente al servidor (opcional a partir de v4.7)
    await client.connect();
    // Enviar un ping para confirmar una conexión exitosa
    await client.db("admin").command({ ping: 1 });
    //imprime un mensaje en la consola si la conexion fue exitosa.
    console.log("¡Conexion exitosa a MongoDB Se valida comunicacion");
    //Define la base de datos a la que se conectara al cliente
    const db = client.db ("mibasedeprueba");
    const collection =db.collection ("micollecion");
    //insetar documento en la coleccion
    collection.insertOne({mensaje: "¡Hola mongodb!"});
    console.log("Mensaje guardado exitosamente");
    //consultar todo los ducumentos de la coleccion .
    const docs = await collection.find ({}).toArray();
  } finally {
    // Asegura que el cliente se cerrará cuando termine/erro
    await client.close();
  }
}
main().catch(console.dir);