import mongoose from "mongoose";
import "dotenv/config";

const connect = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const connection = mongoose.connection;
    connection.on("error", () => console.error("Conexão ao banco de dados mal sucedida."));
    connection.once("open", () => console.log("Conexão ao banco de dados bem sucedida."));
};

export default connect;