# React - Init & JSX

## Installation/Uninstallation

- npm install -g create-react-app
- npx create-react-app myapp
- npm uninstall -g create-react-app

## Run React

- npm start (localhost:3000)

## Question

- Whats JSX?
  - an XML/HTML-like syntax used by React that extends ECMAScript (It IS NOT HTML)
  - Browsers dont understand JSX, so we run the tool, babel to turn it into normal JS
  - JSX vs HTML
    ![alt rext](https://i.imgur.com/qcfUyva.png "JSX vs HTML")
    ![alt text](https://i.imgur.com/CA3CN70.png "Styling different")
    ![alt text](https://i.imgur.com/njctt2V.png "Styling different")
    - className vs class  |  htmlFor vs for (HTML/JSX)
    ![alt text](https://i.imgur.com/jyNXt4a.png "class/for vs className/htmlFor")
- Whats is a componenet?
  - it can be a function or a class
  - it produces HTML using JSX
  - it handles feedback from the user using Event Handlers
- import vs require
  - ES2015 Modules   => import
  - CommonJS Modules => require
- Project Directory

  | Folder/File         | Explanation                                                 |
  | --------------------|:------------------------------------------------------------|
  | src                 | Folder where we put all the source code we write            |
  | public              | Folder that stores static files, like images                |
  | node_modules        | Folder that contains all of our project dependencies        |
  | package.json        | Records our project dependencies and configures our project |
  | package-lock.json   | Records the exact version of packages that we install       |
  | README[]().md       | Instructions on how to use this project                     |

