#!/bin/bash
set -eou pipefail

git fetch
git reset --hard @{u}

docker build -t denon-proxy -t localhost:5000/denon-proxy --network=host .
docker push localhost:5000/denon-proxy
