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
- [x] Use Google OAuth2 authentication flow
  - probably ask user for scope of `email` or `profile` via Google Sign-In
  - OAuth for JS Browser Apps(compared to traditional OAuth for Servers)
  1. [x] Create new project at console.developers.google.com/
  2. [x] Set up OAuth confirmation screen
  3. [x] Generate an OAuth Client ID
  4. [x] Install Google's API library, initialize it with OAuth Client ID
    - Google doesn't offer this library via NPM, add manual script tag to `index.html` file
    - [x] Create new React component to wrap Google API library & usher user through entire OAuth process
      - GoogleAuth: boilerplate
  5. [x] Make sure library gets called any time user clicks on 'Login w/ Google' button
    - In Header, show button related to Google authentication
    - [x] `componentDidMount()` for client portion of Google Auth
      - Load client portion of the library, get a CB of when process is complete
      - CB argument is called after `'cleint:auth2'` library has been loaded to `gapi`

  - Display Sign in/out Buttons
  - [x] `renderAuthButton()` needs to actually render a clickable button to sign in/out
    - Buttons display correctly and can be clicked BUT, there is no function yet
    - [x] Add click event handlers for both buttons
      - Helper methods for sign in/out

    - AUTH COMPONENT
    - [x] Actually initiate OAuth process
    1. get reference to `auth` object after it is initialized
    2. figure out if user is currently signed in
      - Component-level State, updates with whether or not the user is signed in
      - With updated State, Component will automatically re-render
    3. print the authentication status on the screen
      - Instead of using logic(if statement) to determine user signed in, build helper method

- [X] Update Auth State
  - Method on prototype for `.isSignedIn` called listen: f(a), (can pass a callback function to)
  - Passing a CB() to listen: f(a) will invoke anytime the user's auth status is changed
  - wire this up in  `componentDidMount()`
  - WOOT WOOT, THIS WORKS WHEN MANUALLY SIGNING IN AND OUT IN CONSOLE!!!

- [] Refactor `.then(( => {} ))` statement: `setState({})` is same as `onAuthChange()`
  - changing setState() to onAuthChange() will make sure to get the current auth status when first initialize the library and update auth state
  - will refactor once Redux is introduced

- Have an entire component dedicated to authentication with Google
- Currently `GoogleAuth` is a React Component, Redux is eventually going to take care of this state


## Redux Architecture Design
- Current naming of `onSignIn` and `onSignOut` is actually a bit unclear
- Both seem to veer towards the user ACTUALLY successfully signing-in/out
- This isn't the purpose of the callback, the methods should be called when the user is ATTEMPTING to sign in/out
- [x] Change names of both event handlers

- REDUXXX
- [x] Install Redux and react-redux

- [x] Action Creators:
  - `src/actions` => `index.js` (holding all action creators)
  - [x] Wire up to GoogleAuth component
    - use connect() and 2 action creators
    - need to make sure when user signs in/out, call the appropriate action creator

- [x] Reducers:
  - `src/reducers` => `index.js` (combineReducers, dummy reducer)
  - Auth Reducer to record whether or not the user is signed in at any point in time
  - Import to `reducers/index.js` file

- [x] Redux Store:
  - `src/index.js`: Provider, createStore, reducers
  - Purpose of recording auth status inside Redux Store is to make sure it's available to other components
  - Close the loop, record authentication status inside Redux Store
  - Need to make sure GoogleAuth component shows either sign in/out button depending on user status
  - Communicate State back to GoogleAuth component
  - [x] Refactor GoogleAuth to NO LONGER have Component-level state

- Current issue with Sign in/out Button not displaying(FIXED)

- [x] Refactor: technique to make sure there are no types in transcription between Reducers/Action Creators
  - `actions/types.js`


### User ID
- Entire Idea of this Application is to eventually have API Server to store a list of all streams created by the user
- Inside the mockups, when a user is logged in, they should be able to delete/edit the streams they've created
- Need to make sure each stream is associated to the user who created it
- To do this, need to create a user ID record for each stream created
- GoogleAuth provides a user ID via `gapi.auth2.getAuthInstance().currentUser.get().getId()`


### Using Redux DevTools
- See `ReduxSection/redux-dev-tools` for more info
- [x] Hook up application to work with Redux DevTools


## Redux Forms
1. [x] Install redux-forms
2. [x] Wire up Redux Forms to application
   - Redux From will manage all data inside Store, in order to this, wire up a Reducer to the Store
   - This Reducer has been created by Redux Form library
   - Pull this Reducer from library and hook it up to `combineReducers`

- [x] Create Stream Form
  - work from `streams/new` route
  - Enter Title, Description
  - When submitted, reach out to an API server (not yet made) and create a new Stream record with a User
  1. [x] Refactor functional StreamCreate comp to Class comp
    - eventually have helper methods to organize code
  2. [x] Import Redux Form and 2 helpers (Field, reduxForm)
    - hook up `reduxForm` to StreamCreate comp (similar nature to connect)
    - configure `reduxForm` with an object (receives a single object)
  3. [x] Create a Field JSX for Form (provide some sort of prop)
    - get text input to appear when making use of Field element
    - automatically handle events
    - [x] Helper method: `renderInput()`
      - Rather than just returning a bland input, return a blob of JSX, helps guide the form
      - multi-line expression
      - Currently the `label` isn't working, I don't have the newest refactor for `renderInput()` but I didn't think it would be an issue.  I may have to destructure the input element object
      - Not certain how to fix this yet

    - [x] Controlled Element: for `<input />` for title and description inputs
  4. [x] Submit Form: get a CB that recognizes a form being submitted in order to create New Stream
    - User will want to click a button to create a stream, or do what the form is supposed to do
    - helper method: `onSubmit()`
  5. [x] Validate Form Inputs: define `validate()` with formValues
    - Still need to wire up to Redux Form/handle error messages
    - [x] Only show error messages to user after submitting invalid form


- [x] Submit Form: need to create stream and actually save it
  - Attempt to make `POST` request to API Server to create new stream record
  - [x] Install Axios AND `redux-thunk`
    - both used to write async action creator
  - [x] Create API dir/file for `localhost:3001`
    - this will call on axios and separate concerns of the api, instead of using it all in action creator
    - create instance of axios then export it
  - [x] Create Action Creator: handle creation of stream record
  - [x] Wire up Action Creator to StreamCreate component
    - attempt to call it
    - try to successfully create new stream on API
    - import connect() to wire up AC and component
    - Minor issue: `reduxForm()()` is wired up similarly as `connect()()` would be
      - how to wire up both `connect` and `reduxForm` at the same time
      - Modified syntax to stack functions via a `'wrapped'` variable
  - [x] `onSubmit()` calls action creator with formValues
  - [x] Need to actually wire up redux-thunk


### Action Creators, Dispatch, Actions(type & payload) AND Reducers
- [x] Need to get a handle of response that comes back once a form is submitted
- [x] Dispatch an action with payload of that new;y-created, specific stream
  - need a `type`, constant type values, this can be defined in `actions/types.js`
  - create new type and import it into `actions/index.js`

- BULK ACTION CREATORS
  1. The response is what the API Server returns when a request is made to it
  2. If RESTful convention is truly being followed, the response is pretty predictable
  3. Although there isn't a Component to show a list of records, edit a record, delete a record, then all Action Creators can be created altogether, when RESTful convention is followed
  4. [x] Try to create all Action Creators at one point in time(RIGHT NOW)
  - ~~creating stream~~ / ~~list of streams~~ / ~~getting 1 stream~~ / ~~editing a stream~~ / ~~deleting a stream~~
  - [X] Import these action types in `actions/index.js`
  - [x] Create Action Creators for each one
  - Eventually wire these up to their respective components when those are programmed


- EVENTUALLY CREATE REDUCER TO PICK UP STREAM AND SAVE (or whatever i decide to do)
- [x] Build Stream Reducer altogether
  - Handle: fetching, creating and updating
  - [x] `streamReducer.js`: import a few different action types
    - Set up many `case` statements to handle each type of action
    - `FETCH_STREAM, CREATE_STREAM & EDIT_STREAM` are all identical due to a single record from the API being returned
    - The record is taken and added to State object, which makes these 3 all identical

    - For the cases of `FETCH_STREAMS & DELETE_STREAM` there is a bit of a different syntax/approach
    - [x] `DELETE_STREAM`
      1. Install Lodash
      2. Wire `_omit` statement to Reducer
    - [x] `CREATE_STREAM`
      - Take list/array of records and merge it all into State object
      - Take the array of streams received from API and turn it into an object with `mapKeys()`
      - `mapKeys()` via Lodash
    - [x] Actually FETCH the list of STREAMS when StreamList component is rendered
      - Wire up Action Creator call to StreamList component
      - Anytime StreamList component is rendered on screen, attempt to fetch list of streams
      - With Redux DevTools via State tab, able to see the current streams i've created
    - [x] Create render list method to display streams `renderList()`
      - this will map over the streams and return some JSX for each stream


### Associate Streams with Users
- Eventually for next cases, want to make sure:
1. If a user is signed in then they can see a create/edit/delete button
  - EDIT/DELETE buttons should ONLY be shown for the user who created that stream
  - There may be other streams shown but buttons altering buttons won't be available if you didn't create that stream
  - [x] Attach a user ID to streams, once stream is created
    - get userId inside action creator `createStream`

2. Header of Title should be clickable to render the stream detail page
