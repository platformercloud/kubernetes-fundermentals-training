kubectl run busybox --image busybox --dry-run -o yaml > busybox.yaml

kubectl exec -it <pod name> -- env


organization = platformer
country = sri lanka

kubectl create cm org-details --from-literal organization=platformer --from-literal country=srilanka --dry-run -o yaml > org-cm.yaml

kubectl apply -f org-cm.yaml 

kubectl get cm
 kubectl get cm org-details  -o yaml

 kubectl create cm js-config --from-file config.json --dry-run -o yaml > js-configmap.yaml


 create a cm

organization = platformer
country = sri lanka

Mount the variables into a busybox

