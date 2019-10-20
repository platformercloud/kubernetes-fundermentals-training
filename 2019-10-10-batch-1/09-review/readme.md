Create a deployment for Nextcloud https://hub.docker.com/_/nextcloud
Open the port 80
Create 2 PVCs for 1GB using GCP Persistent Disks and name them html and db
Mount the 2 PVCs to the pods on the paths /var/www/html and /var/lib/mysql

Make sure the deployment only has 1 replica

expose the deployment as a service of type loadbalancer

Save up all the yamls
