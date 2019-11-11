kubectl get sts


kubectl apply -f https://k8s.io/examples/application/cassandra/cassandra-service.yaml

kubectl delete --all sts,svc,deploy,pod,cm,secret
