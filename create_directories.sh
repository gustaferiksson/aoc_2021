#!/bin/bash

for i in $(seq -w 1 25); do
  echo $i
  mkdir "day$i"

  cp Dockerfile day$i/Dockerfile
  cp input.txt day$i/input.txt
  cp solution.js day$i/solution.js
done