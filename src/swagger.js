import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentación de AdoptMe API',
            description: 'API para la gestión de adopciones de mascotas',
            version: '1.0.0'
        }
    },
    apis: [`./src/docs/**/*.yaml`]
};

export const specs = swaggerJSDoc(swaggerOptions);