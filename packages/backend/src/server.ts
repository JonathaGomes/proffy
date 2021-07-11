import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/teste", (req, res) => {
  return res.json({
    message: `Essa mensagem vem do backend`
  });
});

app.listen(3333, () => {
  console.log("Server is running");
});
