docker build -t demo-app .
docker images list
docker run  -it  demo-app /bin/sh

docker run  demo-app 

docker container list
docker container stop <container-id>
docker container rm <container-id>
docker container rm <container-id> --force

docker run -p <host-port>:<container-port>  demo-app
docker run -p 3000:8000  demo-app

docker run -p 3000:8000  -it -v $(pwd):/app  demo-app  /bin/sh
docker run -p 3000:8000 -e app=demo-app -e author=nilesh -it -v $(pwd):/app  demo-app  /bin/sh


docker build -t <repo-name>:v1 .
docker push <repo-name>:v1

docker run -p 3000:8000 nj93/batch3-demo:v1

docker-compose up
docker-compose down