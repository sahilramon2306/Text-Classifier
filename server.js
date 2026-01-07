require('dotenv').config();
const express = require("express");
const classifyRoutes = require("./routes/classify.routes");

const app = express();
app.use(express.json());

app.use("/api/classify", classifyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Text Classification API running on port ${PORT}`);
});
