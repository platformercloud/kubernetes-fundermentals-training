## Heirachy of services


Headless  --> ClusterIP --> NodePort --> LoadBalancer

kubectl get sts
kubectl get statefulsets

PVCs created doesn't automatically delete even though statefulset was deleted
kubectl get pvc --show-labels
kubectl delete pvc -l app=nginx