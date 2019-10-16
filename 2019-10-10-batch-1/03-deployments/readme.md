kubectl run nginx --image nginx --restart=Never --port 80 --dry-run -o yaml > pod-nginx.yaml
kubectl run nginx --image nginx --restart=Always --port 80 --dry-run -o yaml > deployment-nginx.yaml

kubectl apply -f deployment-nginx.yaml
kubectl get deploy

kubectl edit deployment nginx
kubectl delete pods --all

kubectl rollout history deploy/nginx
kubectl rollout undo deploy/nginx --to-revision 2
kubectl rollout pause deploy/nginx

kubectl get pods --show-labels