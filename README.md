# This website is being rewritten. Again.
# Starting May 2025, all new pull requests will be not be merged until the rewrite has been merged to main.
# No new updates will be made on the current codebase as well.
# Target launch is before the Fall 2025 semester.
# csss-site-frontend

The frontend of the CSSS website, currently deployed at [new.sfucsss.org](https://new.sfucsss.org).

Please check out [csss-site-backend](https://github.com/csss/csss-site-backend/) for the backend API used by this repo.

## Table of Contents

1. [Development](#development)
   - [Prereqs](#prereqs)
   - [Set-up](#set-up)
   - [Local Development](#local-development)
   - [Local Development (System Administrator / Webmaster)](#local-development-system-administrator--webmaster)
2. [Documentation](#documentation)
   - [Creating a new React App](#creating-a-new-react-app)
   - [Important Notes for React Devs](#important-notes-for-react-devs)
3. [Architecture](#architecture)
   - [Building](#building)
   - [Impacts](#impacts)

## Development

### Prereqs

You need to be in a UNIX-like environment to work on csss-site-frontend - so MacOS, Linux, or WSL.
Make sure you have `git` installed and are familiar with how to use it.
Install the following versions of `node` and `npm`:

`node`: v18.16.X

`npm`: 9.9.X

To install the correct versions of `node` and `npm`, you might want to install and setup [nvm](https://github.com/nvm-sh/nvm).

### Set-up

To set-up the csss-site-frontend repo, `git clone` it somewhere you can access, and
Run `npm ci` from within the csss-site-frontend (same directory as the `package.json` file).

### Local Development

Run `npm run start` to deploy the site locally at [localhost:8080](http://localhost:8080). (warning: if you use a port other than `8080`, it may not work with the backend)

This script starts a Webpack development server, and watches any changes made to the `src` and `public` directories.

If you start using new Tailwind classes, however, make sure to run `npm run tw` to refresh the `public/static/css/tailwind.css` file.
Otherwise, your Tailwind classes might not be compiled and ready to use.
The Webpack dev server should refresh this file after you run the tailwind script, so no need to restart the dev server.

It is recommended to run the start script in a separate terminal while you develop!
That way all changes you make can be displayed immediately upon file modification.

### Local Development (System Administrator / Webmaster)

The `webpack-bundle-analyzer` package is installed to analyze the size of created bundles.

Before deployments, you should take a look at the bundle analyzer at http://localhost:8888 and see if certain apps are exceptionally large.
The bundle analyzer interface is opened on `npm run start` and `npm run build` commands,
showing the bundle sizes as not-minimized (`start`) or minimized (`build`).

### Deploying changes to the `build` branch (System Administrator / Webmaster only)

After you've merged changes into `main`, run `./scripts/deploy_to_branch.sh` locally. Next, ssh into the server, then run `./scripts/deploy_to_nginx.sh`.

## Documentation

The documentation for this repo is lacking at the moment, aside from the architecture section.
Please read the source code for the `main` entry-point in the `src` folder for creating a new React app.

### Creating a new React App

To create a new React app, simply create a new folder under `src` and code away as if it is it's own package.
Any additional packages you might need for your app should be installed at the root of `csss-site-frontend`.

When ready to build, add a line to the `webpack.config.js` file under "entry".
You should reference the `index.js` file that is the root of your React app.
The JSON key before the path to your app's entrypoint is the name of the bundle.

You will need to create an HTML file in the `public` file that then uses the compiled React app.
Feel free to copy the `public/index.html` file to where you intend to access your app:
e.g., "public/elections.html" for "http://localhost:8080/elections.html",
or "public/my/obscure/app/index.html" for "http://localhost:8080/my/obscure/app".

Make sure to update the line:

```html
<script defer="defer" src="/static/js/main.js"></script>
```

Replacing `main.js` with the bundle name you specified in `webpack.config.js`.

Don't remove the `react.js` script tag!
This line provides necessary React code to run your React app.

### Important Notes for React Devs

Try your best to not bundle CSS or image files into your apps!

Please take advantage of the /public/static/files directory to store images,
and /public/static/css for CSS stylesheets.

For very short stylesheets, ignore this recommendation.

## Architecture

The site is served as static files.

So, how do we get from several React apps to static files that can be served?
And what about plain, static pages, that should be served alongside the React apps?

### Building

Various apps (may be React, TypeScript, JavaScript, ...) are built with [webpack](https://webpack.js.org/),
which "packs" apps starting at a given entry-point into a standalone "bundle".
This bundle can then be used in an HTML file with the `<script>` tag.
This lets you use frameworks and libraries provided by `npm` in your apps, such as React, Vue.js, TypeScript, and so on.

There are several entry-points in this repo, each being a standalone app.
The entry-points are folders in the `src` folder, except the `_shared` folder.

The `_shared` folder contains various things that may be reused between projects.
E.g., the `_shared/react` folder contains some useful React components,
and `_shared/js` contains helper functions that may be used in JS projects.

During the build process (`npm run build`), the `build` folder is emptied,
and Webpack compiles each entry-point into the `build/static/js` folder.
E.g., `src/main/**/*.js` is bundled into a single `build/static/js/main.js` file,
which contains all necessary React code, and other `npm` packages' code used.

Then, the contents of the `public` folder are copied into the `build` folder.
HTML files in `public` use the files compiled by webpack to serve the React apps;

```html
<script defer="defer" src="/static/js/main.js"></script>
```

Notice that the `build` folder is treated as the root of the application (hence the leading slash).
Thus, the `build` folder is the root of whatever host is serving the site.

### Impacts

There are some impacts this has on developing a React app.

React, under the hood, is a library for creating "single-page applications".
This is typically mitigated to create multi-page applications with something like [React Router](https://reactrouter.com/).

However, the typical use of React Router leans on browser APIs to change the URL without refreshing the page.
This breaks the continuity of the URL - it no longer uniquely identifies the actual file that React is served from.
So, there is some server-side magic used to make this work, typically with something like Express.

But for the purposes of this site, where we want to serve static files in addition to React apps, we cannot use this server-side magic.
Remember: it breaks the continuity of the URl, making the path no longer uniquely identify an actual file.

_So,_ the solution is to use Hash Routing instead of the typical Browser Routing.
That is, all React apps should route their pages not like `http://localhost:3000/this/page/is/handled/by/react/router`,
but instead like `http://localhost:3000#this/page/is/handled/by/react/router`.

This is built on the fact that the anchor of a URL (everything that follows a hashtag) is purely client-side.
That is, it doesn't trigger a page refresh, nor breaks the file continuity of a URL.

Luckily, Hash Routing is handled by React Router too, check out [this page](https://reactrouter.com/en/main/routers/create-hash-router).
Ignore the warning that "using hash URLs is not recommended" - our use case is exactly the use case for hash routing.
So yay - everything you're used to with React Router can be used with this site - just keep in mind that the URLs will look different.
