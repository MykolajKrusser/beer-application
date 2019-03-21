# Recruitment task

Based on following API: http://ontariobeerapi.ca/ write a beer application

## The task

It should consist of:

1. Three column layout, where each column is a list of beers (Beer endpoint) by Brewer (example Molson, Kompania Piwowarska S.A. etc).
2. Initially lists are empty, and there’s a drop-down on top of each one with all possible brewers.
3. After selecting brewer, list is being populated with 15 beers sorted by name. If there’s more than 15 beers of given brewer, there’s “Load more” button in the bottom, which loads another 15 and so on (until all beers are loaded).
4. The selection should be persisted in given , i.e. after refreshing site, application should remember which brewers were used in which columns.
5. Each beer entry consist of Name, Type,  Price per litre and image thumbnail.
6. Image thumbnail should be in a form of circle (radius) with 40px diameter. After clicking on it, full size picture should be visible on overlay centred to the window.
7. There should be settings modal upon clicking on “Options” button somewhere. Options:
1. possibility to change layout theme from light to dark,
2. specifying number of elements loaded in one go (from 15 to 30 for example),
3. sorting by given field, selected from drop-down: name, price, type; after change it should sort already loaded beers.
8. All Options should be cached in the browser, for future reuse.

## So getting started

1. I used `create-react-app` template. Cleared code from react box-package.
Installed dependencies: 
    "axios" for working with `get` & `post` requests.  
    "react-redux",  "redux",  for creating redux store and binding it with react. 
    "redux-thunk" for async work with redux.
    "material-ui"  for use ready style solutions.
2. My next step was ejection of webpack.config and adding css-modules concept - This method automatically uses BEM, isolates component styles, leaving the possibility of using global styles. Styles are used as objects in JSX.
3. I used REDUX_DEVTOOLS_EXTENSION for controlling states changes in my app. Recommend to install it in developer mode, in other way the error will be thrown.
4. The `src` folder structure contains `assets` with imgs, svg & so on. The `components` folder is filled with stateless components like buttons, inputs and so on. The `container` folder has statefull components with the main logic. I also use `higher order components (hoc)` "Wrap" for wrapping JSX (to avoid useless nesting), and error handling purpuses. Finally in the `store` folder I have got Redux with `actions` & `reducers` folder. Folder `common` for different functions. 
5. I procceded writing the main logic. I have created main layout for containing all components. Added header, logo.
6. Right after I created Redux store with the possibility of asynchronous code in action creators. Proceded to main reducer for the work with states which I get from action creators.
7. On successful getting search data from API I ran into necessity of errors displaying from API. For these purposes I created modal and backdrop components.
8. Fixed Access-Control-Allow-Origin error by using "axios.get(`${'https://cors-anywhere.herokuapp.com/'}http://ontariobeerapi.ca/products/`)"
9. Provided drop-down menu with brewery list, and selecting brewery nam to state for filtering
10. Added load more button, beers sorting
11. In the proccess of app creation I every now and then fixed logical errors, bugs, typos and edited css styles.
12. Added beerCard and its styles
13. Created three columns of a list of beers. Added localstorage memory for users selection.
14. Upgraded Header component to statefull, and prepared it for options to fill in.
15. Added theme change option, rows switcher, sort options.

## Project unbundl git pack
```
git init
git pull Mykolaj-Krusser-contelizer-task2.bundle master
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

### Compiles and minifies for production
```
npm run build
```
