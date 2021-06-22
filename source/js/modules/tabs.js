const TABS = document.querySelectorAll('.countries__item-button');
const COUNTRIES = document.querySelectorAll('.country');
const CARDS = document.querySelectorAll('.places-card__body');

CARDS.forEach((card) => {
  card.addEventListener('click', (evt) => {

    const countryClass = translateClassName(evt.target, 1, "country--");

    COUNTRIES.forEach((country) => {
      country.classList.remove('country--active');

      if (country.classList.contains(countryClass)) {
        country.classList.add("country--active");
      }
    })

    highlightTab();
  })
})

TABS.forEach((tab) => {
  tab.addEventListener('click', (evt) => {

    COUNTRIES.forEach((country) => {
      country.classList.remove("country--active")

      const tabName = translateClassName(country, 2, "countries__item-button--");

      if (evt.target.classList.contains(tabName)) {
        country.classList.add("country--active")
      }

    })

    highlightTab();
  })
})

const highlightTab = () => {
  TABS.forEach((tab) => {
    tab.classList.remove('countries__item-button--active');

    COUNTRIES.forEach((country) => {
      if (country.classList.contains("country--active")) {
        const tabName = translateClassName(country, 2, "countries__item-button--");

        if (tab.classList.contains(tabName)) {
          tab.classList.add("countries__item-button--active")
        }
      }
    })

  });
}

const translateClassName = (startElement, classIndex, endClassBasis) => {
  const classArray = startElement.classList[classIndex].split('--');
  const countryName = classArray[1];
  const countryClass = `${endClassBasis}${countryName}`;

  return countryClass;
};
