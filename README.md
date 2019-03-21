# Recruitment task

Based on following API: http://ontariobeerapi.ca/ write a beer application

## The task

Develop an application displaying dynamic tabular datasets using React.js and fetching data using the Github public api.

The app should render an `<input />` that is used to [search repositories](https://developer.github.com/v3/search/). Consider:

* On input change, make an API request to the Github API and get the result data
* Do not make an API request if the results are already stored
* Do not fire requests as long as the user is typing. Typically you should throttle requests so that when the user types quickly, we fire one request with the latest input value instead of many

The table itself should be of the following structure:

| ID        | Repo Title         | Owner        | Stars | Created at |
| ---------:| ------------------ | ------------ | ----: | :--------: |
| 69101782  | react-native-fbads | callstack-io |   88  | 2016-09-24 |

The resulting table should show maximum 5 rows at once. 

Apart from that, please implement the following: (locally, not using API queries):
* Pagination
* Ability to control number of rows rendered (5/10/15/20)
* Asc/desc sorting by every column
* A persistence mechanism using e.g. localStorage is required (so it remembers last search and settings when we go back to the page)

And finally:

* The row of the currently authenticated user (if any) should be highlighed. An user should be able to log in using a "Log in with GitHub" button

## So getting started

1. I used `create-react-app` template. Cleared code from react box-package.
Installed dependencies: 
    "axios": "^0.18.0" for working with `get` & `post` requests.  
    "react-redux": "^6.0.0",  "redux": "^4.0.1",  for creating redux store and binding it with react. 
    "redux-thunk": "^2.3.0" for async work with redux. 
    "react-debounce-input": "^3.2.0" this is a ready-made component for the synthetic delay of the event firing.
    "react-firebaseui": "^3.1.2", "firebase": "^5.7.3", these are ready solutions for authorization of social networks in the application through Google FireBase.
    "enzyme": "^3.8.0", "enzyme-adapter-react-16": "^1.7.1", it is a good method for Jest tests.
    "react-table": "^6.8.6" - is a lightweight, fast and extendable datagrid built for React.
2. My next step was ejection of webpack.config and adding css-modules concept - This method automatically uses BEM, isolates component styles, leaving the possibility of using global styles. Styles are used as objects in JSX.
3. I used REDUX_DEVTOOLS_EXTENSION for controlling states changes in my app. Recommend to install it in developer mode, in other way the error will be thrown.
4. The `src` folder structure contains `assets` with imgs, svg & so on. The `components` folder is filled with stateless components like buttons, inputs and so on. The `container` folder has statefull components with the main logic. I also use `higher order components (hoc)` for layout, wrapping JSX (to avoid useless nesting), and error handling purpuses. Finally in the `store` folder I have got Redux with `actions` & `reducers` folder. 
5. I procceded writing the main logic. I have created main layout for containing all components. Added header, logo. Later added input, table component.
6. Right after I created Redux store with the possibility of asynchronous code in action creators. Proceded to main reducer for the work with states which I get from action creators.
7. On successful getting search data from GitHub API I ran into necessity of errors displaying from API. For these purposes I created modal and backdrop components. At that point I implemented storing data in the localstorage.
8. The table data from reducer states I used with react table component.
9. For the purpose of Signing in with the GitHub task I used Firebase package to get auth data from GitHub and added this functionality. The data was saved to the localstorage on this stage as well.
10. I highlighted the repos of the currently authenticated user by comparising user id retained in local storage with the user id in each table row.
11. In the proccess of app creation I every now and then fixed logical errors, bugs, typos and edited css styles.
12. I finished writing simple jest tests for two components of my app.

