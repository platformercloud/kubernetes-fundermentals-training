### Question:
create namespace ghost
Deploy the docker image ghost on port 2368 as a deployment inside ghost namespace with only 1 replica

expose the deployment as a service of LoadBalancer on port 80

Save up the yamls

### Solution:
```
kubectl create ns ghost
kubectl run ghost --image ghost --port 2368 --restart Always -n ghost -o yaml --dry-run > ghost-dep.yaml

kubectl expose deploy/ghost --port 80 --target-port 2368 --type LoadBalancer -o yaml --dry-run > ghost-svc.yaml
```


#### Question

default namespace

docker image nextcloud 
docker image port 8080

service should run on port 80 pointing to nextcloud deployment
