kubectl run busybox --image busybox --dry-run -o yaml > busybox.yaml

kubectl create secret generic app-passwords --from-literal=database=1234567 --dry-run -o yaml > app-password-secret.yaml

echo "MTIzNDU2Nw==" | base64 -D

kubectl get secrets

kubectl  get pods 

kubectl logs busybox-b48949757-tcljz

kubectl exec busybox-b48949757-tcljz -- env

Better security solutions
1. Bitnami Sealed Secrets
2. Hashicorp Vault