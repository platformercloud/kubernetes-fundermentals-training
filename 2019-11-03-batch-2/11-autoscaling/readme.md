create an nginx deployment
requests & limits
cpu: 10m
memory: 10m

port 80
expose the service as a loadbalancer


kubectl run nginx --image nginx --port 80 --dry-run -o yaml > nginx-deploy.yaml
kubectl expose deploy/nginx --port 80 --target-port 80 --type LoadBalancer -o yaml --dry-run > service.yaml

HorizontalPodAutoScaler
        v1
        v2Beta1
        v2Beta2
kubectl autoscale deploy/nginx --min 1 --max 5 --cpu-percent 50 --dry-run -o yaml > hpa-v1.yaml


kubectl get hpa

npm i -g artillery

artillery quick --count 100000 -n 10000000  http://34.67.197.89/