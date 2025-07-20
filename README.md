# PAT

This should soon be an Insomnia/Postman replacement for devs that just want to test APIs and convert them to different forms.

## Setup

1. Install `bun`

```sh
curl -fsSL https://bun.sh/install | bash
```

2. Set up [wails](https://wails.io/docs/gettingstarted/installation)

3. Install frontend dependencies

```sh
# from root directory
cd ./frontend
bun install
```

4. Run the application

```sh
# from root directory
wails dev
```

5. Building the application

```sh
wails build
```

## Why I'm building this

#### Electron is not giving ...

The first time I tried out Electron (2020), my bundle was 250MB large. Electron is bulky, and takes way too many millis to start up.

Most of my dev tools are built on ELectron, so I run out of RAM a lot

#### Inspiration

PAT stands for "Pretty good API Tool", or Patrick who specifically told me not to do this and instead find myself a girlfriend. This one's for you.

## Features

#### MVP

- [ ] REST API calls
- [ ] Request documents stored on disk
- [ ] Response previews
  - [ ] JSON
  - [ ] Text
  - [ ] Markup

#### One day

- [ ] GraphQL
- [ ] Plugin support
- [ ] Code generation (probably as a plugin)
- [ ] Cloud backup and sync (Google drive, MongoDB)
- [ ] Public API inventory
- [ ] API Documentation
- [ ] Data Presentation (tables and charts)
- [ ] JSON query (like in Insomnia)
