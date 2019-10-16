kubectl run nginx --image nginx --restart=Always --port 80 --dry-run -o yaml > deployment-nginx.yaml

kubectl expose deploy/nginx --port 80 --target-port 80 --type ClusterIP --dry-run -o yaml > service-nginx.yaml

kubectl apply -f service-nginx.yaml

kubectl get svc

kubectl run busybox --image busybox:1.27 -it --restart=Never --rm -- /bin/sh

<service-name>.<namespace>.svc.cluster.local
nginx.default.svc.cluster.local