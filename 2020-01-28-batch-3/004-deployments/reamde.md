kubectl run demo-app --image nj93/batch3-demo:v1 --port 8000 --restart Never --dry-run -o yaml > demo-app-pod.yaml
kubectl run demo-app --image nj93/batch3-demo:v1 --port 8000 --restart Always --dry-run -o yaml > demo-app-deployment.yaml

kubectl get deploy
kubectl get pods -o wide
kubectl get rs

kubectl edit deploy demo-app
kubectl rollout history deploy/demo-app
kubectl rollout undo deploy/demo-app --to-revision=3

kubectl explain deployment.spec.template.spec === kubectl explain pod.spec

ACTIVITY 

run nginx as a deployment and expose port 80 3 replicas
save the yamls
port forward one of the pods using kubectl

ANSWER

