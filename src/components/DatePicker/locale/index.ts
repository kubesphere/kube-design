import LocaleProvider from "../../LocaleProvider";

const { locale } = LocaleProvider;

const getDefaultLocale = () => {
  const t = locale.get;
  const { currentLocale = "" } = locale.options;
  const lang = currentLocale && currentLocale.toLocaleLowerCase();
  return {
    dateFormat: "Y-m-d",
    weekdays: {
      shorthand: [
        t("KUBE_SUN"),
        t("KUBE_MON"),
        t("KUBE_TUE"),
        t("KUBE_WED"),
        t("KUBE_THU"),
        t("KUBE_FRI"),
        t("KUBE_SAT"),
      ],
      longhand: [
        t("KUBE_SUNDAY"),
        t("KUBE_MONDAY"),
        t("KUBE_TUESDAY"),
        t("KUBE_WEDNESDAY"),
        t("KUBE_THURSDAY"),
        t("KUBE_FRIDAY"),
        t("KUBE_SATURDAY"),
      ],
    },
    months: {
      shorthand: [
        t("KUBE_JAN"),
        t("KUBE_FEB"),
        t("KUBE_MAR"),
        t("KUBE_APR"),
        t("KUBE_MAY"),
        t("KUBE_JUN"),
        t("KUBE_JUL"),
        t("KUBE_AUG"),
        t("KUBE_SEP"),
        t("KUBE_OCT"),
        t("KUBE_NOV"),
        t("KUBE_DEC"),
      ],
      longhand: [
        t("KUBE_JAN_LH"),
        t("KUBE_FEB_LH"),
        t("KUBE_MAR_LH"),
        t("KUBE_APR_LH"),
        t("KUBE_MAY_LH"),
        t("KUBE_JUN_LH"),
        t("KUBE_JUL_LH"),
        t("KUBE_AUG_LH"),
        t("KUBE_SEP_LH"),
        t("KUBE_OCT_LH"),
        t("KUBE_NOV_LH"),
        t("KUBE_DEC_LH"),
      ],
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: lang !== "zh-cn" ? 0 : 1,
    ordinal: (nth: number) => {
      const s = nth % 100;
      if (s > 3 && s < 21) return "th";
      switch (s % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    },

    rangeSeparator: t("KUBE_RANGE_SEPARATOR"),
    weekAbbreviation: t("KUBE_WEEK_ABBREVIATION"),
    scrollTitle: t("KUBE_CLICK_TO_TOGGLE"),
    toggleTitle: t("KUBE_SCROLL_TO_INCREMENT"),
    amPM: [t("KUBE_AM"), t("KUBE_PM")],
    yearAriaLabel: t("KUBE_YEAR"),
  };
};

export default getDefaultLocale;
