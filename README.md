# KeyStroke
KeyStroke is a **serverless** credential manager, that stores your keys
using **Web Storage** technologies.

## Prerequisites
You must have some things before you can run this:
- [NodeJS](https://nodejs.org/en/download/)
- [Angular CLI](https://github.com/angular/angular-cli)

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.

## Build
Run `ng build` to build the project. The build artifacts will be stored
in the `dist/` directory. Use the `-prod` flag for a production build.

## Running the tests
To execute the *unit* tests (via [Karma](https://karma-runner.github.io)),
you should run:
```sh
ng test
```

To execute the *end-to-end* tests (via [Protractor](http://www.protractortest.org/)),
you should run:
```sh
ng e2e
```

## Deployment
This project includes a *Dockerfile* to easily build [Docker](https://www.docker.com/) images.
So, you can get a working container with:
```sh
docker build -t keystroke .
docker run --rm -it -p 8080:80 keystroke
```

## Built With
* [Yarn](https://yarnpkg.com/docs/install) - Package Manager
* [Angular](https://angular.io/) - JavaScript Framework
* [Angular Material](https://material.angular.io/) - Material Design Components

## Versioning
I use [SemVer](http://semver.org/) for versioning.
For the versions available, see the tags on this repository.

## Authors
* **Gustavo Paulo** - [gpaulo00](https://github.com/gpaulo00)
