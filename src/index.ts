import express from "express";
import userRoute from "./routes/user.routes";

const server = express();
server.use(express.json());

const port = process.env.PORT || 5000;
server.use("/user", userRoute);
server.listen(port, () => {
  console.log(`server started on ${port}`);
});
