# Efishery Offline First App Tasklist

## Cara Menggunakan

#### copy environment variable
copy .env-sample melalui terminal 
```sh
cp .env-sample .env
```

#### isi environment variable
```sh
APP_PORT=2000
TZ=Asia/Jakarta

COUCHDB_URL= #your ip and port couchdb/efishery_task
USERNAME=#username couchdb
PASSWORD=#password couchdb
```

#### runing manual
menjalankan via npm
```sh
# install package
npm install

# link command
npm link .

#  menjalankan app
npm run start

# menampilkan command line yang tersedia
npm run efishery-task help

# menjalankan unit tetsing
npm run test 
```

#### run menggunakan docker-compose

```sh
docker-compose up --build
```

#### atau run menggunakan background process

```sh
docker-compose up --build -d
```
#### execution npm with container docker
```sh

# link command
docker-compose exec tasklist npm link

# menampilkan command line yang tersedia
docker-compose exec tasklist efishery-task

# menjalankan unit testing
docker-compose exec tasklist npm run test

```

## Dokumentasi API 
in file `documentation.json` export to your postman
