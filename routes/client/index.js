var pages = require('../../client/pages');

module.exports = {
  path: '/',
  component: pages.App,
  indexRoute: {
    component: pages.Home
  },
  childRoutes: [{
    path: 'a',
    component: pages.Home
  }, {
    path: 'b',
    component: pages.Home
  }, {
    path: 'login',
    component: pages.Login
  }]
}
