kubectl run busybox --image busybox --restart OnFailure --dry-run -o yaml > job-busybox.yaml

kubectl run busybox --image busybox --restart OnFailure --schedule "*/2 * * * *" --dry-run -o yaml > cronjob-busybox.yaml

kubectl get cronjobs

https://crontab.guru