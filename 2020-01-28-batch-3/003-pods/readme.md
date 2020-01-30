kubectl get pods
kubectl run demo-app --image nj93/batch3-demo:v1 --port 8000 --restart Never
kubectl delete pod demo-app
kubectl describe pod demo-app
kubectl logs demo-app
kubectl logs <pod-name>
kubectl exec -it demo-app -- /bin/sh
kubectl port-forward demo-app 8000:8000
kubectl delete pod demo-app   --force --grace-period=0

kubectl run demo-app --image nj93/batch3-demo:v1 --port 8000 --restart Never --dry-run -o yaml > demo-app-pod.yaml
kubectl get pods -o wide
kubectl explain pod.spec
kubectl explain pod.spec.containers

kubectl run busybox --image busybox -n nilesh --restart Never
kubectl get pods -n nilesh

kubectl run busybox --image busybox -n nilesh --restart Never --dry-run -o yaml > busybox-pod.yaml
kubectl apply -f busybox-pod.yaml 
kubectl get pods --show-labels
kubectl get pods -l run=busybox
kubectl delete pods -l run=busybox
kubectl delete pods --all

kubectl top pods