# App Navigation
- APP CHALLENGES
1. Need to navigate around separate pages in app (React-Router library)
2. Need to allow user to login/logout (make use of google oauth)
3. Need to handle forms in Redux
4. Need to master CRUD ops in React/Redux (Real goal of this application, every app is simplified down to CRUD)
5. Errors will likely occur, need to handle errors

- [x] Install React-Router library
  - Import properties of React-Router(dom) library: BrowserRouter, Route

- Navigate with React Router
  - one way frequently used for changing routes is to manually change the route in the address bar
  - Need to easily navigate between different routes inside application
  - DO NOT navigate with anchor `<a />` tags
  - [x] Import Link from `react-router-dom`

- Temporarily use different React Router types
  - [x] BrowserRouter
  - [x] HashRouter
  - [x] MemoryRouter

- Scaffold multiple components and hook them up to React-Router instance
- New DIR for all the Streams-related components to help separate
- [x] StreamList: index page and shows list of streams
- [x] StreamShow: show page that gives detail on specific stream
- [x] StreamCreate: when a user decides they want to create a new stream, a form will be present
- [x] StreamEdit: when a user wants to edit a specific stream, a different form will be present
- [x] StreamDelete: to delete a stream
- Eventually hook them up to individual route calls

- Also need to decide which path to use when using each different component (current idea)
- All of these components are related to Streams therefore separating them to a different folder helps organize the chaos

- [x] Begin setting up paths to visit in browser
  - hook up routes inside `App.js` file
  - all routes are working properly to show the correct components

Path | Component
--- | ---
/ | StreamList
/streams/new | StreamCreate
/streams/edit | StreamEdit
/streams/delete | StreamDelete
/streams/show | StreamShow

- Begin Headers for each different component
  - forms basis of having the ability to login/logout of application
  - [x] Add Header Component to App Component outside of the BrowserRouter
    - should have links for: Stream List and Login/Logout Button
    - made within `src/components` because this component has NOTHING to do with the Streams components
    - class names from semantic ui

- [x] Semantic UI, of course

- Current issue of `Error: Invariant failed: You should not use <Link> outside a <Router>`
- [x] Need to reconfigure App Hierarchy from:
  - `App ---> BrowserRouter/Header` to `App ---> BrowserRouter ---> Route/Route/Header`
  - App Component will render BrowserRouter as is
  - BUT NOW take Header component and move underneath BrowserRouter
  - Header still won't be wrapped inside a Route therefore it will still ALWAYS be visible


## App Authentication with Google OAuth
- Header will hold button/link to login with Google
- [] Use Google OAuth2 authentication flow
  - probably ask user for scope of `email` or `profile` via Google Sign-In
  - OAuth for JS Browser Apps(compared to traditional OAuth for Servers)
  1. [x] Create new project at console.developers.google.com/
  2. [x] Set up OAuth confirmation screen
  3. [x] Generate an OAuth Client ID
  4. [x] Install Google's API library, initialize it with OAuth Client ID
    - Google doesn't offer this library via NPM, add manual script tag to `index.html` file
    - [x] Create new React component to wrap Google API library & usher user through entire OAuth process
      - GoogleAuth: boilerplate
  5. [] Make sure library gets called any time user clicks on 'Login w/ Google' button
    - In Header, show button related to Google authentication
    - [x] `componentDidMount()` for client portion of Google Auth
      - Load client portion of the library, get a CB of when process is complete
      - CB argument is calle dafter `'cleint:auth2'` library has been loaded to `gapi`
    - [] Actually initiate OAuth process
