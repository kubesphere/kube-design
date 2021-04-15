import React, { Component } from "react";
import locale from "@pitrix/lego-locale";
import { merge } from "lodash";
import defaultLocales from "./locales";

export interface LocaleProviderProps {
  locales: object,
  localeKey?: string,
  currentLocale: string,
  localeFallback: {
    [lang: string]: string,
  },
  ignoreWarnings: boolean,
}

export interface LocaleProviderState {
  initDone: boolean,
  currentLocale?: string,
}

class LocaleProvider extends Component<LocaleProviderProps, LocaleProviderState> {
  static locale = locale;

  static defaultProps = {
    locales: {},
    localeFallback: {
      "zh-CN": "zh",
      "en-US": "en",
    },
    currentLocale: '',
    ignoreWarnings: false,
  };

  state = {
    initDone: false,
    currentLocale: undefined
  };

  static getDerivedStateFromProps(props: LocaleProviderProps, state: LocaleProviderState) {
    const { currentLocale: stateCurLocale, initDone } = state;
    const {
      currentLocale: nextCurLocale,
      locales,
      localeKey,
      localeFallback,
    } = props;
    let curLocale: string = '';
    if (!(nextCurLocale in locales)) {
      curLocale = locale.determineLocale({
        cookieLocaleKey: localeKey,
        urlLocaleKey: localeKey,
      });
      curLocale = localeFallback[curLocale] || curLocale;
    }
    if (nextCurLocale && nextCurLocale !== stateCurLocale) {
      curLocale = nextCurLocale;
    }
    if (initDone) {
      locale.setCurrentLocale(curLocale);
    }
    return { currentLocale: curLocale };
  }

  componentDidMount() {
    const { locales, ignoreWarnings } = this.props;
    const { currentLocale } = this.state;
    locale
      .init({
        currentLocale,
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
