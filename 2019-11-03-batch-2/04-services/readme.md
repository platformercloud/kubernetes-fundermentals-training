```kubectl run nginx --image nginx --restart Always --port 80

kubectl expose deploy/nginx --port 80 --target-port 80 --type ClusterIP --dry-run -o yaml > nginx-service.yaml

 kubectl get svc  

 kubectl describe svc nginx

 kubectl run busybox --image busybox:1.27 -it --rm -- /bin/sh```

 #### the service nginx is inside default namespace

 ```<service-name>.<namespace>.svc.cluster.local
 wget -O- http://nginx.default.svc.cluster.local
```

 ##### If the pod has IP 10.16.9.48 in default namespace, POD DNS WILL BE,
 10-16-9-48.default.pod.cluster.local

```kubectl port-forward svc/nginx 8080:80```