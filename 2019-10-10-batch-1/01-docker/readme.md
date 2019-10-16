 2532* docker run -it dialog /bin/sh
 2533* clear
 2534* docker run -it dialog /bin/sh
 2535* docker build -t dialog .
 2536* docker run -it dialog /bin/sh
 2537* docker build -t dialog .
 2538* docker run -it dialog /bin/sh
 2539* clear
 2540* docker build -t dialog .
 2541* docker run -it dialog /bin/sh
 2542* docker build -t dialog .
 2543* docker run dialog 
 2544  clear
 2545  docker container ls
 2546  docker container stop 03a444c140fc 
 2547  docker container rm 03a444c140fc 
 2548* clear
 2549* docker build -t dialog .
 2550* clear
 2551* docker run dialog 
 2552  docker container ls
 2553  docker container stop 77d487ab2509 --force
 2554  docker container stop 77d487ab2509 
 2555  docker container rm  77d487ab2509 --force
 2556* docker run -p 3000:8000  dialog 
 2557  docker container ls
 2558  docker container rm a --force
 2559  docker container rm af --force
 2560  clear
 2561* docker build -t nj93/dialog-training:v1 -t nj93/dialog-training:latest  .
 2562* docker push nj93/dialog-training:v1
 2563* clear
 2564* docker run -p 3000:8000 -v $(pwd):/app  dialog 
 2565  docker container ls
 2566  docker container rm 41 --force
 2567* docker run -p 3000:8000 -v $(pwd):/app -it  dialog  /bin/sh
 2568* docker run -p 3000:8000 -v $(pwd):/app -e type=development -it  dialog  /bin/sh