Create a deployment for ghost https://hub.docker.com/_/ghost/
the container port is 2368
make sure only 1 replica is running.

create  a service for this deployment mapping the pod ports to 80 on the service
and make the service of the type LoadBalancer

Save all as yamls

https://medium.com/free-code-camp/how-to-set-up-a-serious-kubernetes-terminal-dd07cab51cd4


Answer:

 kubectl run ghost --image ghost --port 2368 --restart Always --dry-run -o yaml > deployment-ghost.yaml

  kubectl apply -f deployment-ghost.yaml 

   kubectl expose deploy/ghost --port 80 --target-port 2368 --type LoadBalancer -o yaml --dry-run > ghost-service.yaml

   kubectl apply -f ghost-service.yaml