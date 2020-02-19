### Generate Pod
kubectl run busybox --image busybox --restart Never --dry-run -o yaml

### Generate Deployment
kubectl run busybox --image busybox --restart Always --dry-run -o yaml

### Job
kubectl run busybox --image busybox --restart OnFailure --dry-run -o yaml > busybox-job.yaml

kubectl get jobs

### CronJobs

https://crontab.guru/#*/10_*_*_*_*

kubectl run busybox --image busybox --restart OnFailure --schedule "*/5 * * * *" --dry-run -o yaml > busybox-cronjob.yaml