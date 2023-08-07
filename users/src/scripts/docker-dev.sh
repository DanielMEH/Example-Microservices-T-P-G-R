cd ../..
pwd
docker stop $(docker ps -a -q)
docker rmi -f $(docker images -q)
docker build . -t prueba1
docker images