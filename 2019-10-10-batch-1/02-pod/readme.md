kubectl run nginx --image nginx --restart=Never
kubectl get pods -o wide
kubectl delete pod nginx
kubectl create ns test  
kubectl get ns
kubectl run nginx-test --image nginx --port 80 --restart=Never -n test
kubectl get pods -n test
kubectl port-forward po/nginx-test 8080:80 -n test
kubectl delete pod nginx
kubectl delete pod nginx-test -n test
kubectl run nginx --image nginx --restart=Never -o yaml --dry-run > nginx-pod.yaml
kubectl describe pod nginx-test  -n test
kubectl explain pod.spec.containers.ports
kubectl exec -it  busybox --image busybox --restart=Never