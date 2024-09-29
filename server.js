const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const app = express();
const port = 3000;

app.use(express.json());

var swaggerDefinition = {
  info: {
    title: "API Serial",
    version: "1.0.0",
    description: "Documentação da API Serial.",
  },
  components: {
    schemas: require("./schemas.json"),
  },
};

var options = { swaggerDefinition, apis: ["./src/routes/*.js"] };

var swaggerSpec = swaggerJsDoc(options);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get("/", (req, res) => {});

app.listen(port, () => {
  console.log(`Serial API listening on port ${port}`);
});
