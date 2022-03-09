#!/usr/bin/python3
import requests
from flask import Flask, send_from_directory, render_template, request
import json
app = Flask(__name__)

@app.route('/')
def dashboard():
    return render_template('dashboard.html')
@app.route('/js/<path:path>')
def sendJS(path):
    return send_from_directory('js', path)
@app.route('/css/<path:path>')
def sendCSS(path):
    return send_from_directory('css', path)
@app.route('/getMetric')
def getMetric():
    sensorID = request.args.get('sensorid', default = 1, type = int)
    reqdata={
        "sensorID" : sensorID
    }
    reqheaders = {
        'APIKeyID' : '5mpotdf4tmK3',
        'APISecretKey' : 'RM6s8r7BtVLJf52DKzc1hkRxiQNnA2zr',
        'Content-Type' : 'application/json'
    }
    response = requests.post('https://www.imonnit.com/json/SensorGet',  json = reqdata,headers = reqheaders)
    jsonresult = response.json()
    return jsonresult['Result']['CurrentReading']
app.run(host='0.0.0.0', port=80)
