#!/bin/bash

echo Setting up replset
# sleep 2 | echo Sleeping
mongo mongodb://mongo-rs-01:27017 replset.js