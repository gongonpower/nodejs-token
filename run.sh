docker run --name nodejs --rm -d -p 9000:9000 -v ~/nodejs:/nodejs --network mynet node node /nodejs/server.js
