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
- [] StreamList: index page and shows list of streams
- [] StreamShow: show page that gives detail on specific stream
- [] CreateStream: when a user decides they want to create a new stream, a form will be present
