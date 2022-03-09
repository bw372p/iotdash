#!/usr/bin/python3
import os
os.system("docker rm -f iotdash")
os.system("docker build -t tytoathene/iotdash:1.0 .")
os.system("docker run -d -p 80:80 --name iotdash tytoathene/iotdash:1.0")
