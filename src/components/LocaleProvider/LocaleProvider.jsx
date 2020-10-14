import React, { Component } from "react";
import PropTypes from "prop-types";
import locale from "@pitrix/lego-locale";
import { merge } from "lodash";
import defaultLocales from "./locales";

class LocaleProvider extends Component {
  static locale = locale;

  static propTypes = {
    currentLocale: PropTypes.string,
    locales: PropTypes.object,
    localeKey: PropTypes.string,
    children: PropTypes.node,
    ignoreWarnings: PropTypes.bool,
  };

  static defaultProps = {
    locales: {},
    ignoreWarnings: false,
  };

  state = {
    initDone: false,
  };

  static getDerivedStateFromProps(props, state) {
    const { currentLocale: stateCurLocale, initDone } = state;
    const { currentLocale: nextCurLocale, locales, localeKey } = props;
    let curLocale = null;
    if (!(nextCurLocale in locales)) {
      curLocale = locale.determineLocale({
        cookieLocaleKey: localeKey,
        urlLocaleKey: localeKey,
      });
    }
    if (nextCurLocale && nextCurLocale !== stateCurLocale) {
      curLocale = nextCurLocale;
    }
    if (initDone) {
      locale.setCurrentLocale(curLocale);
    }
    return { curLocale };
  }

  componentDidMount() {
    const { locales, ignoreWarnings } = this.props;
    const { curLocale } = this.state;
    locale
      .init({
        currentLocale: curLocale,
        locales: merge(defaultLocales, locales),
        ignoreWarnings,
      })
      .then(this.setState({ initDone: true }));
  }

  render() {
    const { children } = this.props;
    const { initDone } = this.state;
    return initDone ? React.Children.only(children) : null;
  }
}

export default LocaleProvider;
