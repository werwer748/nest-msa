# 어떤 이미지를 사용할지
##  AS deveplopment : 개발환경에서 사용할 이미지
FROM node:alpine AS development

# 작업 디렉토리 설정 - 이미지 내부에서 작업할 디렉토리를 설정
WORKDIR /usr/src/app

# package.json 파일을 이미지 내부로 복사
## package 관련 모든 파일을 WORKDIR로 복사
COPY package*.json ./
## pnpm-lock.yaml 파일을 WORKDIR로 복사
COPY pnpm-lock.yaml ./

# pnpm 설치
RUN npm install -g pnpm

# Dependencies 설치
RUN pnpm i

# 소스코드 복사
COPY . .

# 명령어 실행
CMD [ "pnpm", "start:dev", "user" ]