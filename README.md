# Project Name

> Pithy project description

## Team

  - Jackson Christoffersen
  - Brandon Hadler
  - Jinxuan Lin
  - Sean Gurson

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Usage

> Some usage instructions

## Requirements

- Node 6.4.x
- Postgresql 9.1.x

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g bower
npm install
bower install
```

### Airbnb style guide with ESLint
#### Sublime:
Using Package Control:
- Install SublimeLinter
- Install SublimeLinter-config-eslint

### Environment

To set up your environoment correctly on your machine, you need to set up PostgreSQL with a database named 'locallist'.

You will also need to export the following environment variables:
- DB_USERNAME: PSQL user with access to locallist db
- DB_PASSWORD: Password for the aforementioned user
- DATABASE_URL: Production/staging only, replaces DB_USERNAME and DB_PASSWORD
- SESSION_SECRET: Production/staging only, secret sed to encrypt session token

### Roadmap

View the project roadmap [here](LINK_TO_DOC)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
