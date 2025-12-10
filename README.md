## 🐳 Docker

El proyecto ha sido dockerizado y la imagen está disponible públicamente en DockerHub.

### Link a DockerHub
[https://hub.docker.com/r/bautia/adoptme](https://hub.docker.com/r/bautia/adoptme)

### Cómo correr el proyecto localmente con Docker

Para correr el contenedor, necesitas pasar la variable de entorno con tu cadena de conexión real:

```bash
docker run -p 8080:8080 -e MONGO_URL="mongodb+srv://BautistA:_CONTRASEÑA_@clusterproyectofinalbd.macg1j.mongodb.net/adoptme?retryWrites=true&w=majority&appName=ClusterProyectoFinalBD" bautia/adoptme