# NextJS Boilerplate

I use this boilerplate as a starting point for all my React projects, feel free to use it if you find it convenient/useful.

This config supports the SSR feature provided by NextJS.

NOTE: you should use `npm` commands to install dependencies (to get the semantic installer prompt).

you can use yarn as well, but you will need to manually run gulp in the `node_modules/fomantic-ui` folder to start the installer.

## Configuration List

- Basic NextJS installation
- Semantic UI custom source (run `yarn build-semantic` to build a bundle into `/static`)
- Styled Components
- Airbnb eslint config

## Install

```bash
$ npm install

# Semantic UI Install Prompt:

# Set-up Semantic UI ==> Express
# We detected you are using NPM Nice! Is this your project folder? ==> Yes
# Where should we put Semantic UI inside your project? ==> semantic/
# What components should we include in the package? ==> Choose
# Should we set permissions on outputted files? ==> No
# Do you use a RTL (Right-To-Left) language? ==> Choose
# Where should we output Semantic UI? ==> ../static/semantic/dist
```

## Usage

```bash
$ npm run dev
```
