import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi, { SwaggerOptions } from "swagger-ui-express";
import { Request, Response } from "express";
import { Express } from "express-serve-static-core";

const options: SwaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: { title: "Elec lab inventory" }
    },
    apis: ["./src/v1/Routes/itemRoutes.ts", "./src/v1/Routes/categoryRoutes.ts"]
}

//docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app: Express, _port: Number) => {
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    app.get("/api/v1/docs.json", (_req: Request, res: Response) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec)
    });

    console.log(
        "V1 docs available on .../ap1/v1/docs"
    );
};

export default swaggerDocs;