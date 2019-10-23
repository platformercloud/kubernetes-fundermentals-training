kubectl top nodes
kubectl top pods

kubectl autoscale deploy/nginx --cpu-percent 50 --min 2 --max 10 --dry-run -o yaml > nginx-hpa.yaml

kubectl apply -f nginx-hpa.yaml

kubectl get hpa

kubectl api-resources -o wide
kubectl api-versions