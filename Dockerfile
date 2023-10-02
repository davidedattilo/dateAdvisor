FROM node:14.16.0-alpine
RUN apk update
RUN apk add python3
RUN apk --no-cache add curl
RUN apk --no-cache add git
RUN pip3 --no-cache-dir install --upgrade awscli==1.22.59
RUN addgroup -g 501 -S jenkins && adduser -S -G jenkins -u 501 -s /bin/bash -h /home/jenkins jenkins\
  && mkdir -p /home/jenkins && chown -R jenkins:jenkins /home/jenkins \
  && chown -R jenkins:jenkins /usr/local/ && chmod -R a+w /usr/local/
USER jenkins
RUN npm install yarn serverless@2.65.0 -g --force
RUN npm i env-cmd@10.1.0 -g --force
WORKDIR /home/jenkins
