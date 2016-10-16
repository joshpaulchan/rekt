var pages = require('../../client/pages');

module.exports = {
  path: '/',
  component: pages.App,
  indexRoute: {
    component: pages.Home
  },
  childRoutes: [{
    path: 'confirm-email',
    component: pages.EmailConfirmPage
  }, {
    path: 'login',
    component: pages.Login
  }, {
    path: 'register',
    component: pages.Register
  }]
}
