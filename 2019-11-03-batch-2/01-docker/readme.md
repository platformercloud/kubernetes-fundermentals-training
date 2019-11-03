## Commands

docker build -t training-demo .
docker image ls
docker run training-demo
docker container ls -a
docker ps -a

### ssh into the container
docker run -it training-demo /bin/sh

#### inside the running container
ls -ll
node -v
npm i -g typescript ts-node
ts-node


docker container ls
docker container stop <id>
docker container rm <id>
docker container rm <id> --force

#### Bind port
docker run -p 3000:8000 training-demo

#### Pass Environment Variables
docker run -p 3000:8000 -e type=DEV training-demo

#### Bind Volumes
docker run -p 3000:8000 -e type=DEV -it -v $(pwd):/app  training-demo /bin/sh

docker login

docker build -t <docker-username>/training-docker:<version-tag> .
docker push <docker-username>/training-docker:<version-tag> 