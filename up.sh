#!/bin/bash

yarn next build

docker-compose up -d --build
