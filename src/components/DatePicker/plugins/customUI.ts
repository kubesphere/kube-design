import { range } from "lodash";

const customUI = () => (fp: any) => {
  if (fp.config.noCalendar || fp.isMobile) return {};

  let isOpen = false;

  const elements = {} as any;

  const handleSelectYear = (e: any) => {
    const item = e.target;
    if (item.classList.contains("disabled")) return;
    fp.changeYear(Number(item.getAttribute("data-value")));
  };

  const handleSelectMonth = (e: any) => {
    const item = e.target;
    if (item.classList.contains("disabled")) return;
    fp.changeMonth(Number(item.getAttribute("data-value")), false);
  };

  const scrollToOption = (el: any) => {
    const wrap = el;
    const activeItem = wrap.querySelector(".is-active");
    if (!activeItem) return;

    const { scrollTop } = wrap;
    const scrollBottom = scrollTop + wrap.offsetHeight;
    const optionTop = activeItem.offsetTop;
    const optionBottom = optionTop + activeItem.offsetHeight;

    if (scrollTop > optionTop || scrollBottom < optionBottom) {
      wrap.scrollTop = activeItem.offsetTop - 6;
    }
  };

  const toggleDropdown = () => {
    const { dropdown, trigger, yearMenu, monthMenu } = elements as any;
    if (isOpen) {
      dropdown.classList.remove("is-active");
      trigger.classList.remove("is-open");
      isOpen = false;
    } else {
      dropdown.classList.add("is-active");
      trigger.classList.add("is-open");
      isOpen = true;
      scrollToOption(yearMenu);
      scrollToOption(monthMenu);
    }
  };

  const getYears = () => {
    const { minDate, maxDate } = fp.config;
    const yearRange = 20;

    if (minDate && !maxDate) {
      return range(minDate.getFullYear(), minDate.getFullYear() + yearRange, 1);
    }

    if (!minDate && maxDate) {
      return range(maxDate.getFullYear() - 20, maxDate.getFullYear() + 1, 1);
    }

    if (minDate && maxDate) {
      if (minDate.getFullYear() === maxDate.getFullYear()) {
        return [minDate.getFullYear()];
      }
      return range(minDate.getFullYear(), maxDate.getFullYear() + 1, 1);
    }

    const localeYear = fp.now.getFullYear();
    return range(localeYear - yearRange / 2, localeYear + yearRange / 2, 1);
  };

  const updateDropdownMenu = () => {
    const { currentYear, currentMonth } = fp;
    const { minDate, maxDate } = fp.config;
    const { yearMenu, monthMenu } = elements as any;

    const yearItems = yearMenu.querySelectorAll(".dropdown-year-item") || [];

    yearItems.forEach((n: any) => {
      n.classList.remove("is-active");
      if (Number(n.getAttribute("data-value")) === currentYear) {
        n.classList.add("is-active");
      }
    });

    const monthItems = monthMenu.querySelectorAll(".dropdown-month-item") || [];

    monthItems.forEach((n: any) => {
      const val = Number(n.getAttribute("data-value"));
      n.classList.remove("is-active");
      n.classList.remove("disabled");
      if (val === currentMonth) {
        n.classList.add("is-active");
      }

      if (
        minDate &&
        currentYear === minDate.getFullYear() &&
        val < minDate.getMonth()
      ) {
        n.classList.add("disabled");
      }

      if (
        maxDate &&
        currentYear === maxDate.getFullYear() &&
        val > maxDate.getMonth()
      ) {
        n.classList.add("disabled");
      }
    });
  };

  const renderDropdown = () => {
    const { l10n } = fp;
    const dropdown = document.createElement("div");
    dropdown.setAttribute("class", "flatpickr-dropdown");
    elements.dropdown = dropdown;

    const yearMenu = document.createElement("div");
    yearMenu.setAttribute("class", "dropdown-year-menu");
    elements.yearMenu = yearMenu;

    const monthMenu = document.createElement("div");
    monthMenu.setAttribute("class", "dropdown-month-menu");
    elements.monthMenu = monthMenu;

    getYears().forEach((year) => {
      const item = document.createElement("span");
      item.setAttribute("data-value", year);
      item.classList.add("dropdown-year-item");
      item.appendChild(document.createTextNode(year));
      yearMenu.appendChild(item);
    });

    const months = l10n.months.shorthand;

    months.forEach((month: any, index: number) => {
      const item = document.createElement("span");
      item.setAttribute("data-value", String(index));
      item.classList.add("dropdown-month-item");
      item.appendChild(document.createTextNode(month));
      monthMenu.appendChild(item);
    });

    yearMenu.addEventListener("click", handleSelectYear);
    monthMenu.addEventListener("click", handleSelectMonth);

    dropdown.appendChild(yearMenu);
    dropdown.appendChild(monthMenu);

    dropdown.addEventListener("mouseleave", () => {
      if (isOpen) {
        toggleDropdown();
      }
    });
    updateDropdownMenu();
    return dropdown;
  };

  const getYearMonthString = () => {
    const { currentYear, currentMonth, l10n } = fp;
    return `${currentYear}${l10n.yearAriaLabel} ${l10n.months.shorthand[currentMonth]}`;
  };

  const updateTrigger = () => {
    const { trigger } = elements;
    trigger.innerHTML = getYearMonthString();
    updateDropdownMenu();
  };

  return {
    onChange() {
      isOpen = true;
      toggleDropdown();
    },

    onYearChange() {
      updateTrigger();
    },

    onMonthChange() {
      updateTrigger();
    },

    onOpen() {
      isOpen = true;
      updateTrigger();
      toggleDropdown();
    },

    onReady() {
      const title = fp.monthNav.querySelector(".flatpickr-month");
      const trigger = document.createElement("span");
      trigger.setAttribute("class", "flatpickr-header-year-month");
      trigger.appendChild(document.createTextNode(getYearMonthString()));
      title.innerHTML = "";
      trigger.addEventListener("click", toggleDropdown, false);

      fp.calendarContainer.addEventListener(
        "click",
        (e: any) => {
          if (!isOpen || e.target === trigger) return;
          let closeDropdown = true;

          e.path.forEach((n: any) => {
            if (n.classList && n.classList.contains("flatpickr-dropdown")) {
              closeDropdown = false;
            }
          });

          if (closeDropdown) {
            toggleDropdown();
          }
        },
        false
      );

      title.appendChild(trigger);
      title.appendChild(renderDropdown());
      elements.trigger = trigger;
    },
  };
};

export default customUI;
