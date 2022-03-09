FROM tiangolo/uwsgi-nginx-flask:python3.6-alpine3.7
RUN pip3 install --upgrade pip
RUN pip3 install flask
RUN pip3 install requests
COPY ./iotdash.py /app.py
COPY templates /templates
COPY js /js
COPY css /css
ENTRYPOINT ["python3","/app.py"]
