Create a deployment for ghost https://hub.docker.com/_/ghost/
the container port is 2368
make sure only 1 replica is running.

create  a service for this deployment mapping the pod ports to 80 on the service
and make the service of the type LoadBalancer

Save all as yamls