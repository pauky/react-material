/**
 * 路由模块
 * @type {*|exports|module.exports}
 */
  
const React = require('react');
const {
  Route,
  Redirect,
  IndexRoute,
} = require('react-router');

// Here we define all our material-ui ReactComponents.
const Master = require('app/components/master');
const Home = require('app/pages/home');
const SignIn = require('app/pages/sign-in');
const SignUp = require('app/pages/sign-up');
const PartyDetail = require('app/pages/party-detail');
const UserDetail = require('app/pages/user-detail');
const LaunchParty = require('app/pages/launch-party');


/**
 * Routes: https://github.com/rackt/react-router/blob/master/docs/api/components/Route.md
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > Master
 */
const AppRoutes = (
  <Route path="/" component={Master}>
    <Route path="signIn" component={SignIn} />
    <Route path="signUp" component={SignUp} />
    <Route path="party/:id" component={PartyDetail} />
    <Route path="user/:id" component={UserDetail} />
    <Route path="launchParty" component={LaunchParty} />
    <IndexRoute component={Home}/>
  </Route>
);

module.exports = AppRoutes;
