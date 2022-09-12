FROM node:16.15.0-alpine
WORKDIR /frontend
ENV PATH /node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
# 単純に npm i をするのではなく、npmのキャッシュを利用する
RUN --mount=type=cache,target=/.npm npm i
# RUN npm i
# COPY . /frontend/ 
CMD /bin/sh 

# 使い方 : シェルでこのDockerfileのあるディレクトリに移動して、以下のコマンドを打ちます
# 1 イメージの作成 
# 2 イメージからコンテナを作成 
# 3 コンテナ内でreact起動 (ipを0.0.0.0にすることで、ホストマシンのネットワークと繋げる)

# docker build -t frontend .
# docker container run --rm --name frontend -v $PWD:/frontend -it -p 3000:3000 frontend
# npm start 0.0.0.0:3000