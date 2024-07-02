import { connect, disconnect } from "mongoose";
async function connectionToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("cannot connect to database");
    }
}
async function dissconnectFromDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("cannot connect to database");
    }
}
export { connectionToDatabase, dissconnectFromDatabase };
//# sourceMappingURL=connection.js.map