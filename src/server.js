import connect from "./data-source";
import app from "./app";
import "dotenv/config";

connect().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Servidor rodando na porta ${process.env.PORT}`);
    });
}).catch(() => {
    console.log("Servidor não iniciado devido ausência de conexão com o banco de dados.");
});