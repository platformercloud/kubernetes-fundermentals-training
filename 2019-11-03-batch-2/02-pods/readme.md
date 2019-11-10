Setup Kubernetes Terminal
https://medium.com/free-code-camp/how-to-set-up-a-serious-kubernetes-terminal-dd07cab51cd4

## Nodes

``` kubectl get nodes ```
```
kubectl get namespaces
kubectl get namespace
kubectl get ns
```

```kubectl create ns training-b2```
```
kubectl run nginx --image nginx --restart Never --port 80 -o yaml --dry-run > nginx-pod.yaml
```

```kubectl apply -f nginx-pod.yaml -n training-b2 ```

 ```kubectl get pods```

```kubectl logs  <pod-name> <container-name> -n <namespace> -f```

```kubectl delete pod nginx -n training-b2```

```kubectl port-forward po/nginx 3000:80```

```kubectl run bad-nginx --image nginx:200 --port 80 --restart Never -o yaml --dry-run > bad-nginx.yaml```

```kubectl describe pod <pod-name>```

```kubectl get pods --all-namespaces```

```kubectl get pod nginx --export -o yaml > exported-pod.yaml```

``` kubectl edit pod nginx ```

```kubectl get pods --show-labels```

```kubectl get pods --show-labels -l run=nginx ```

```kubectl get pods --show-labels -L run```

```kubectl explain pod.spec.containers.resources```

```kubectl run busybox --image busybox:1.27 --restart Never --dry-run -o yaml > busybox.yaml```

```kubectl get pods -o wide```

```kubectl exec -it busybox -- /bin/sh```
```wget -O- http://<ipaddress>```

```kubectl run busybox --image busybox:1.27 -it --rm -- /bin/sh```

```kubectl delete pod busybox --force --grace-period=0``` 

```kubectl exec -it busybox -n namespace -- /bin/sh ```