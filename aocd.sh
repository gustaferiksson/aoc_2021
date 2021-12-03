#!/bin/bash

year=${1:-$( date +%Y )}
day=${2:-$( date +%d )}
session=$AOC_SESSION
url=https://adventofcode.com/$year/day/$((10#$day))/input

curl $url -b session=$session -o day$day/input.txt
