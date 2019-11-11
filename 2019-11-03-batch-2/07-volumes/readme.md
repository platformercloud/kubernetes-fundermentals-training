kubectl run busybox --image busybox --dry-run -o yaml --restart Always > emptydir.yaml

kubectl logs <pod-name> --previous

kubectl run busybox --image busybox --dry-run -o yaml --restart Always > host.yaml

kubectl get sc

kubectl run busybox --image busybox --dry-run -o yaml --restart Always > pvc-mount.yaml

kubectl explain pod.spec.volumes.persistentVolumeClaim

kubectl run busybox --image busybox --dry-run -o yaml --restart Always > configmap-mount.yaml

kubectl create cm storage-cm --from-file config.json --dry-run -o yaml > storage-cm.yaml

kubectl apply -f storage-cm.yaml