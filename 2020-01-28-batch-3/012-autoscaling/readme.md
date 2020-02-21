there are 3 versions of the API

only the first 2 versions.


Version 1: you can only test for average CPU utilization
Version 2: you can only test for average CPU utilization, and Average Memory Utilization
Version 3: Custom Metrics can be used

kubectl run nginx --image nginx --port 80
kubectl autoscale deploy/nginx --min 1 --max 10 --cpu-percent=80 --dry-run -o yaml > hpa-v1.yaml 

https://artillery.io/