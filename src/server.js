import connect from "./data-source";
import app from "./app";
import "dotenv/config";

(
    async () => {
        try {
            await connect();
            app.listen(process.env.PORT, () => {
                console.log(`Server is running on port ${process.env.PORT}`);
            })


        } catch (error) {
            console.log(error);
        }
    }
)()