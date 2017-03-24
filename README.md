# Local Lettering

## Adding posts from GitHub

TODO

If you’re making more significant development changes than just updating content, you can also run the project locally.

## Running the project locally

Clone this project locally by running the following command in your terminal:

```
# Clone the project into a directory call “locallettering.com”
git clone https://github.com/alannamun/Locale locallettering.com

# Move into the locallettering.com/ directory
cd locallettering.com/
```

Running this static site locally will require [Node.js v6](https://nodejs.org) installed. There’s usually two options on the site, you want the “Recommended for most users” version. Node.js isn’t used server-side to run the site, and you don’t really need to know much about it to contribute to the site. Rather, [Harp](http://harpjs.com) is built with Node.js and is used as the static site generator that compiles the site’s Sass, Markdown, metadata, and templates into HTML, CSS, and JavaScript.

Node.js comes with [npm](https://npmjs.org), the package manager for JavaScript. Use it to install the project’s dependencies (the other JavaScript libraries and tools listed in the `package.json` file) by running the following command:

```sh
# Install dependencies
npm install
```

**Note** The web fonts are not included within this repository because the source is public.

## Serving the site

To run the site locally, run the following commands in your terminal:

```sh
# Start the project
npm start

# Now available at http://localhost:9000
```

## Compiling the site

You can compile the site to static HTML, CSS, and JavaScript at any point using the following command:

```sh
npm run build
```

This will compile the site to a `./www` directory using Harp.

You can stop the server with <kbd>Control</kbd>+<kbd>C</kbd> (you use control even if you’re using OS X).

## Compile the project to HTML, CSS, and JavaScript

```
npm run build
```

Turns the site into static HTML, CSS, & JS, and puts it in the `www/` directory.

## Deploying the site

The deployment process for publishing the site to [Surge.sh](https://surge.sh) is already set up.

Whenever you make a change on GitHub or push to the `master` (default) branch, [Travis CI](https://travis-ci.org) runs the command that publishes the site to [Surge](https://surge.sh). The best way to update the site is to make a change on GitHub everything else will deployed automatically.

If you are running the project locally, you can also deploy using the following options.

### Deploy to staging

Running the following command will automatically compile the site, add a `robots.txt` file and publish it to the staging domain, so the site can be previewed in the production environment:

```sh
npm run stage
```

### Deploy to production manually

Running the following command will automatically compile the site and deploy to the production domain:

```sh
npm run deploy
```

You’ll need an [invitation](https://surge.sh/help/adding-collaborators) from [@kennethormandy](https://github.com/kennethormandy) to publish the site on Surge. The domain is managed by [@alannamun](https://github.comalannamun).
