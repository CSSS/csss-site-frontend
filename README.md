# csss-site-frontend

The frontend of the CSSS website, currently deployed at [new.sfucsss.org](https://new.sfucsss.org).

Please check out [csss-site-backend](https://github.com/csss/csss-site-backend/) for the backend API used by this repo.

## Development

### Prereqs

You need to be in a UNIX-like environment to work on csss-site-frontend - so MacOS, Linux, or WSL.
Make sure you have `git` installed and are familiar with how to use it.
Install the following versions of `node` and `npm`:

`node`: v18.16.X

`npm`: 9.9.X

### Set-up

To set-up the csss-site-frontend repo, `git clone` it somewhere you can access, and
Run `npm ci` from within the csss-site-frontend (same directory as the `package.json` file).

### Local Deployment

Run `npm run start` to deploy the site locally at [localhost:3000](http://localhost:3000).

The `npm run start` script runs `npm run build` and then `npm run serve`.
Please see the section on the site architecture for information about what these scripts do.

## Documentation

The documentation for this repo is lacking at the moment, aside from the architecture section.
Please read the source code for the `main` and `test` entry-points in the `src` folder for creating a new React app.

### Creating a new React App

To create a new React app, simply create a new folder under `src` and code away as if it is it's own package.
Any additional packages you might need for your app should be installed at the root of `csss-site-frontend`.

When ready to build, add a line to the `webpack.config.js` file under "entry".
You should reference the `index.js` file that is the root of your React app.

### Serving Local Changes

For serving local changes during development, I recommend running `npm run serve` in a separate terminal,
and running `npm run build` whenever you've modified enough files to view your changes.
Refreshing your browser will load the newly built files.

Alternatively, you can just run `npm run start` whenever you want to see your changes, and enter CTRL+C to stop serving.

## Architecture

The site is served as static files.

So, how do we get from several React apps to static files that can be served?
And what about plain, static pages, that should be served alongside the React apps?

### Building

React apps are built to static files with [webpack](https://webpack.js.org/),
which "packs" JavaScript starting at a given entry-point into a standalone "bundle".
This bundle can then be used in an HTML file with the `<script>` tag.

There are several entry-points in this repo, each being a standalone React app.
The entry-points are folders in the `src` folder, except the `_shared` folder.
The `_shared` folder contains components and helper functions that can be used by any of the React apps in this site.

During the build process (`npm run build`), the `build` folder is emptied,
and Webpack compiles each entry-point into the `js` folder inside of the `build` folder.
E.g., `src/main/**/*.js` is bundled into a single `build/js/main.js` file,
which contains all necessary React code, and other `npm` packages' code used.

Then, the contents of the `public` folder are copied into the `build` folder.
HTML files in `public` use the files compiled by webpack to serve the React apps;
e.g., `public/index.html` imports the `build/js/main.js` file like so:

```html
<script defer="defer" src="/js/main.js"></script>
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
