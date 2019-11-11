kubectl run busybox --image busybox --restart OnFailure -o yaml --dry-run > job.yaml

kubectl get jobs

kubectl run busybox --image busybox --restart OnFailure --schedule "*/1 * * * *"  -o yaml --dry-run > cron-job.yaml

https://crontab.guru/