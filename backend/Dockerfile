FROM python:3.8
WORKDIR /backend
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
COPY requirements.txt /backend/
COPY . /backend/
RUN pip install -r requirements.txt 
CMD /bin/bash

# 使い方 : シェルでこのDockerfileのあるディレクトリに移動して、以下のコマンドを打ちます
# 1 イメージの作成 
# 2 イメージからコンテナを作成 
# docker image build -t backend .
# docker container run --rm --name backend -v C:/Users/Chidu/NFT-secondhand/backend -it -p 8000:8000 backend
# python manage.py runserver 0.0.0.0:8000