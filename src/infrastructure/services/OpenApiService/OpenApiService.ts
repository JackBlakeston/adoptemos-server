import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { OPENAPI_URL } from '@src/infrastructure/services/OpenApiService/OpenApiService.const';

import { getFormattedProjectName } from '@src/utils/GetFormattedProjectName/GetFormattedProjectName';

import swaggerAutogenDocument from '@src/docs/swaggerAutogen.json';
import swaggerUiOptions from '@src/docs/swaggerUiConfig.json';

const { API_URL } = process.env;

export class OpenApiService {
  static initialize = (app: express.Express) => {
    const swaggerDocument = this.getSwaggerDocument();
    app.use(OPENAPI_URL, swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerUiOptions));
  };

  private static getSwaggerInfo = () => {
    const projectName = getFormattedProjectName();

    return {
      title: `${projectName} API`,
      description: `API docs for the ${projectName} project`,
      version: '1.0.0',
    };
  };

  private static getSwaggerDocument = () => {
    return {
      info: this.getSwaggerInfo(),
      servers: [
        {
          url: API_URL,
          description: 'API url',
        },
      ],
      ...swaggerAutogenDocument,
    };
  };
}
