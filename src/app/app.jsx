(function () {
  let React = require('react');
  const {Router} = require('react-router');
  let ReactDOM = require('react-dom');
  let injectTapEventPlugin = require('react-tap-event-plugin');
  const AppRoutes = require('./app-routes.jsx');
  const createHistory = require('history/lib/createHashHistory');

  //Needed for React Developer Tools
  window.React = React;

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  // Render the main app react component into the app div.
  // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
  ReactDOM.render(
    <Router
      history={createHistory({queryKey: false})}
      onUpdate={() => window.scrollTo(0, 0)}
      >
      {AppRoutes}
    </Router>
    , document.getElementById('app'));

})();
