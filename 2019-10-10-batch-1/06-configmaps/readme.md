 kubectl create cm busybox-literal --from-literal foo=bar --from-literal john=doe --dry-run -o yaml > cm-busybox-literal.yaml

 kubectl get cm

 kubectl apply -f <file-name>

  kubectl create cm busybox-from-file --from-file  app.properties --dry-run -o yaml > cm-busybox-file.yaml