#!/bin/sh

echo URL=$1
echo TIMEOUT=$2

while true; do
  curl -i $1
  sleep $2
done