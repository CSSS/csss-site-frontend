# This website is being rewritten. Again.
# Starting May 2025, all new pull requests will be not be merged until the rewrite has been merged to main.
# No new updates will be made on the current codebase as well.
# Target launch is before the Fall 2025 semester.

## Development

### Prereqs
You will need:
- `git`
- `node` v22
- `npm` v10
- Install the Angular CLI globally
```
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
```
npm run start // will run some pre-build scripts
or
ng serve // only works after building
```

4. Serve the app over your local network
```
// Access the site on a device in your local network by going to `http://<IP of serving device>:8080`
ng serve --host=0.0.0.0 // only works after building
```

To view other npm commands, look at `package.json` under the "scripts" key.
### Local development
This project uses:

### Libraries used
* **FontAwesome**
* **Material CDK**
* **GSAP**
