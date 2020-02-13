kubectl explain pod.spec.volumes

kubectl run busybox --image busybox --dry-run -o yaml > busybox-deploy.yaml

kubectl logs <pod-name> <container-name>

kubectl exec -it busybox-77696ff885-bhj4p -c hello-app -- /bin/sh
kubectl exec -it busybox-77696ff885-8qzzb  -c read-hello -- /bin/sh

kubectl delete pod busybox-77696ff885-bhj4p

kubectl logs busybox-595bd6cf6b-l5xdv --previous

NAME                       READY   STATUS             RESTARTS   AGE
busybox-595bd6cf6b-l5xdv   1/1     Running              3          60s

kubectl get storageclasses
kubcetl get sc

kubectl apply -f pvc.yaml 

kubectl get pvc
kubectl get pv

kubectl describe pvc pvc-bad 
kubectl delete pvc pvc-bad

kubectl get pv pvc-7c02857b-2bc7-46d7-bfa9-b13d6174efe3  -o yaml

### Access Modes
1. ReadWriteOnce (RWO)
2. ReadOnly (ROX)
3. ReadWriteMany (RWX)

kubectl explain pod.spec.volumes.nfs