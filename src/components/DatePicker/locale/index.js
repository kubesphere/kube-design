import { locale } from "../../LocaleProvider";

const getDefaultLocale = () => {
  const t = locale.get;
  const { currentLocale = "" } = locale.options;
  const lang = currentLocale && currentLocale.toLocaleLowerCase();
  return {
    dateFormat: "Y-m-d",
    weekdays: {
      shorthand: [
        t("DATE_SUN"),
        t("DATE_MON"),
        t("DATE_TUE"),
        t("DATE_WED"),
        t("DATE_THU"),
        t("DATE_FRI"),
        t("DATE_SAT"),
      ],
      longhand: [
        t("DATE_SUNDAY"),
        t("DATE_MONDAY"),
        t("DATE_TUESDAY"),
        t("DATE_WEDNESDAY"),
        t("DATE_THURSDAY"),
        t("DATE_FRIDAY"),
        t("DATE_SATURDAY"),
      ],
    },
    months: {
      shorthand: [
        t("DATE_JAN"),
        t("DATE_FEB"),
        t("DATE_MAR"),
        t("DATE_APR"),
        t("DATE_MAY"),
        t("DATE_JUN"),
        t("DATE_JUL"),
        t("DATE_AUG"),
        t("DATE_SEP"),
        t("DATE_OCT"),
        t("DATE_NOV"),
        t("DATE_DEC"),
      ],
      longhand: [
        t("DATE_JAN_LH"),
        t("DATE_FEB_LH"),
        t("DATE_MAR_LH"),
        t("DATE_APR_LH"),
        t("DATE_MAY_LH"),
        t("DATE_JUN_LH"),
        t("DATE_JUL_LH"),
        t("DATE_AUG_LH"),
        t("DATE_SEP_LH"),
        t("DATE_OCT_LH"),
        t("DATE_NOV_LH"),
        t("DATE_DEC_LH"),
      ],
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: lang !== "zh-cn" ? 0 : 1,
    ordinal: (nth) => {
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

    rangeSeparator: t("DATE_RANGE_SEPARATOR"),
    weekAbbreviation: t("DATE_WEEK_ABBREVIATION"),
    scrollTitle: t("DATE_CLICK_TO_TOGGLE"),
    toggleTitle: t("DATE_SCROLL_TO_INCREMENT"),
    amPM: [t("DATE_AM"), t("DATE_PM")],
    yearAriaLabel: t("DATE_YEAR"),
  };
};

export default getDefaultLocale;
