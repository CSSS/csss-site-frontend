# csss-site-frontend

The frontend of the [CSSS website](https://sfucsss.org) (pending deployment).

## Prerequisites

To work on the CSSS frontend, you will need the following:

- `bash` (or an alternative shell); for running scripts.
- `make`; for compiling the websites into `build/`.
- `nginx`; for serving the files after deployment from `build/`.
- `npm`; for working with the React applications under `src/`.
  - Please use version 9.9.2!

## Local Deployment Instructions

The following steps should be followed to deploy the frontend on your local machine:

- Double check your working directory reflects the changes you want to deploy.
- `make all` or `make X` where X is a specific application you intend to deploy.
  - If you are making a new application, please create a recipe for it in the `Makefile`.
- `./deploy.sh` to deploy the built files in `build/`.
  - If `nginx` is serving files from a directory other than `/var/www/html`, then type `o` at the prompt and specify the alternative path.
- Restart `nginx` if necessary.

## Production Deployment Instructions

The same steps for Local Deployment should be followed after running the `config/update_config.sh` script.
