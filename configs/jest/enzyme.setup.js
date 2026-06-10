const React = require('react');

// Fix broken layout effects on testing environments
React.useLayoutEffect = React.useEffect;

global.IS_REACT_ACT_ENVIRONMENT = true;
