```kubectl run nginx --image nginx --restart Never -o yaml --dry-run > pod-nginx.yaml```

```kubectl run nginx --image nginx --restart Always -o yaml --dry-run > deploy-nginx.yaml```

#### NOTE:
kubectl explain pod.spec.containers === kubectl explain deployment.spec.template.spec.containers


```kubectl apply -f deploy-nginx.yaml```
```kubectl get deploy```
```kubectl apply -f deploy-nginx.yaml ```

```kubectl delete pod --all ```

```kubectl get rs```

```kubectl rollout history deploy/nginx```

```kubectl rollout undo deploy/nginx --to-revision 4```

```kubectl set image deployment/nginx nginx=nginx:1.9.1 --record```

``` kubectl rollout pause deploy/nginx```