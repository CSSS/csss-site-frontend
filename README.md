## Development
If you'd like to contribute, the wiki is the best place to start
https://github.com/CSSS/csss-site-frontend/wiki

### Prereqs
You will need:
- `git`
- `node` v24
- `npm`
- Install the Angular CLI globally
```sh
# use Angular v21.0.6
npm install -g @angular/cli
```
- SSH keys

To install the correct versions of `node` and `npm`, you might want to install and setup [nvm](https://github.com/nvm-sh/nvm).

### Set-up
1. Clone the repo (use SSH):
```
git clone git@github.com:CSSS/csss-site-frontend.git
```
2. Install the node modules:
```
npm ci
```

3. Start the frontend server:
```sh
npm run start # will run some pre-build scripts
or
ng serve # only works after building
```

4. Serve the app over your local network
```sh
# Access the site on a device in your local network by going to `http://<IP of serving device>:8080`
ng serve --host=0.0.0.0 // only works after building
```

To view other npm commands, look at `package.json` under the "scripts" key.
### Local development
If you'd like to contribute, you can start reading here https://github.com/CSSS/csss-site-frontend/wiki/Contributing

### Libraries used
* **FontAwesome 6.7.1** https://fontawesome.com/v6/icons
* **Material CDK** https://material.angular.dev/cdk/categories
* **NGXUI** https://ngxui.com/
