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

Path | Component
--- | ---
/ | StreamList
/streams/new | StreamCreate
/streams/edit | StreamEdit
/streams/delete | StreamDelete
/streams/show | StreamShow
