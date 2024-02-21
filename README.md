# csss-site-frontend

The frontend of the [CSSS website](https://sfucsss.org) (pending deployment).

## Important Repos

- [csss-raspberry](https://github.com/csss/csss-raspberry/) - React component library.
- [csss-site-backend](https://github.com/csss/csss-site-backend/) - Backend API for csss-site-frontend.

## Prerequisites

To work on the CSSS frontend, you will need the following:

- `bash` (or an alternative shell) - for running scripts.
- `npm` - for working with the React application.
  - Please use version 9.9.2!
- (deploying) `nginx` - for serving the files after deployment from `build/`.

## Local Development

The following steps should be followed to develop the frontend on your local machine:

- `npm ci` - install dependencies
- `npm run start` - run frontend on localhost
