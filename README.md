# NextJS Boilerplate

I use this boilerplate as a starting point for all my React projects, feel free to use it if you find it convenient/useful.

This config supports the SSR feature provided by NextJS.

NOTE: you should use `npm` commands to install dependencies (to get the semantic installer prompt).

## Configuration List

- Basic NextJS installation
- Semantic UI custom source (run `yarn build-semantic` to build a bundle into `/static`)
- Styled Components
- Airbnb eslint config

## Install

- Create your project folder

```bash
mkdir PROJECT_NAME # Should match your remote project name
```

- Clone the repo

```bash
git clone https://github.com/Krakcen/nextjs-boilerplate.git PROJECT_NAME
cd PROJECT_NAME
```

- Remove the `.git` folder

```bash
rm -rf .git
git init
```

- Set your project git remote

```bash
git remote add origin REMOTE_NAME
```

Commands below use npm, but using yarn also works.

```bash
$ npm install

# Semantic UI Install (if prompted):

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

# By default the server listens to port 3042, you can change this in package.json
# You should see the home page, use the links to learn more about the stack used
```

## Directory Structure

This boilerplate follows the standard nextjs structure.

The `components` folder contains ready to use components with importing / exporting suggestions.

The `semantic.json` file specifies how the semantic build should be processed.
You will probably not need to edit this file, except if you want to include only certain components to the build.

Feel free to edit the `.eslintrc.json` config file to adjust eslint to your needs

Editing `.babelrc` allows you to extend nextjs babel config so you can add transpiling functionality to your project.

```
.
├── .babelrc
├── .eslintrc.json
├── .gitignore
├── LICENSE
├── README.md
├── 📁components
├── 📁node_modules
├── package-lock.json
├── package.json
├── 📁pages
├── 📁semantic
├── semantic.json
├── 📁static
└── yarn.lock
```
