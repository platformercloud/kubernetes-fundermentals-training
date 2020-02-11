kubectl run busybox --image busybox:1.27 --dry-run --restart Always -o yaml > busybox-deploy.yaml
kubectl exec -it <podname> -- /bin/sh

kubectl exec -it busybox-6c795486cc-5tld6 -- /bin/sh -c 'echo "hello world"'
kubectl exec -it busybox-6c795486cc-5tld6 -- env

kubectl explain deployment.spec.template.spec.containers
kubectl explain deployment.spec.template.spec.containers.env


kubectl create configmap org-config --from-literal=organization=platformer --from-literal=country=Sri --dry-run -o yaml > org-cm.yaml
kubectl apply -f org-cm.yaml 

kubectl get cm

kubectl create cm env-example --from-env-file=.env --dry-run -o yaml > env-example-cm.yaml

kubectl explain pod.spec.containers.envFrom
kubectl explain pod.spec.containers.envFrom.configMapRef

kubectl create cm config-json --from-file=./config.json --dry-run -o yaml > config-json.yaml

kubectl explain pod.spec.volumes
kubectl explain pod.spec.volumes.configMap 
kubectl explain pod.spec.containers.volumeMounts
