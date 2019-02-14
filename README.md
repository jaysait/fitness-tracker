# Fitness Tracker

Simple Angular (frontend) and Node/Express/Mongo (backend) project to create/authorize/autheticate users (bcrypt & jwt) allowing them to CRUD simple posts (title, picture, description).

Backend hosted on Heroku, frontend on Firebase, Cloud Mongo for database collections.

## Demo

https://ng-fitness-tracker-ca8ff.firebaseapp.com/training

## Technologies

### Backend

Node / Express

Controllers for RESTful api for posts and users/auth

Middleware for auth with tokens and multer for file upload

MongoDB

### Frontend

- Angular 6

- Angular Material for responsive web design

- Services

- Routing/Guards

- Modules

- Interceptors (Error & Auth)

- Subject/Subscription (rxjs) for authorization status and is loading notifications

## Todos

Extend functionality like most other social media type sites (comment on posts, like, etc)

Write more test
