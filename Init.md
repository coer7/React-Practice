# React - Init & JSX

## Installation/Uninstallation

```bash
npm install -g create-react-app
npx create-react-app myapp
npm uninstall -g create-react-app
```

## Run React (localhost:3000)

```bash
npm start
```
## React concept: 

- Component Nesting 
- Component Reusability 
- Component configuration 

## Question

- Whats JSX?
  - an XML/HTML-like syntax used by React that extends ECMAScript (It IS NOT HTML)
  - Browsers dont understand JSX, so we run the tool, babel to turn it into normal JS
  - JSX direct access to element (function) variables or function object: 

    ```javascript 
    const lableName = 'Age'; 
    Return <p>{lableName}</p>; 
    ```
  - JSX vs HTML
    ![alt rext](https://i.imgur.com/qcfUyva.png "JSX vs HTML")
    ![alt text](https://i.imgur.com/CA3CN70.png "Styling different")
    ![alt text](https://i.imgur.com/njctt2V.png "Styling different")
    - className vs class  |  htmlFor vs for (HTML/JSX)
    ![alt text](https://i.imgur.com/jyNXt4a.png "class/for vs className/htmlFor")
- Whats is a componenet?
  ![alt text](https://i.imgur.com/QEj8qdF.png)
  ![alt text](https://i.imgur.com/LoPdcnt.png)

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

