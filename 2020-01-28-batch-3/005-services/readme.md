kubectl run nginx --image nginx --restart Always --port 80 --replicas 3 -o yaml > nginx-deployment.yaml
kubectl expose deployment nginx --type ClusterIP --port 80 --target-port 80 --dry-run -o yaml > nginx-svc.yaml

kubectl get pods --show-labels
kubectl get pods -L run

kubectl get svc

kubectl run -it busybox --restart Never --image busybox:1.27 -n nilesh --rm -- /bin/sh

#### Inside the pod
nslookup nginx

<svc-name>.<namespace>.svc.cluster.local
nginx.default.svc.cluster.local

kubectl get pods -o wide

<ip-address-with-dashes>.<namespace>.pod.cluster.local
10-240-0-10.default.pod.cluster.local

## Service Types
1. ClusterIP
To be used only for internal traffic
2. NodePort
If you want to expose your service externally
3. LoadBalancer
Cloud Specific ONLY

Can only change type on this order. Not the reverse.
ClusterIP --> NodePort --> LoadBalancer

kubectl port-forward svc/nginx 8080:80