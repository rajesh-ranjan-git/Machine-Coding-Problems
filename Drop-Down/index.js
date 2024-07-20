const selectCountry = document.querySelector(".container");
const countryContainer = document.querySelector(".country-container");
const countryList = document.querySelector(".country-list");
const input = document.querySelector(".input");
let searchValue = "";

const countries = [
  { id: 1, country: "India" },
  { id: 2, country: "America" },
  { id: 3, country: "Australia" },
  { id: 4, country: "Afganistan" },
  { id: 5, country: "Indonesia" },
  { id: 6, country: "China" },
  { id: 7, country: "Japan" },
  { id: 8, country: "Pakistan" },
  { id: 9, country: "Switzerland" },
  { id: 10, country: "Denmark" },
];

const showCountries = (countries) => {
  for (let country of countries) {
    const name = document.createElement("p");
    name.classList.add("name");
    name.innerText = country.country;
    countryList.appendChild(name);
  }
};

const handleChange = (event) => {
  searchValue = event.target.value.toLowerCase();
  const filterBySearch = countries.filter(({ country }) =>
    country.toLowerCase().startsWith(searchValue)
  );
  countryList.innerHTML = "";
  showCountries(filterBySearch);
};

showCountries(countries);

selectCountry.addEventListener("click", () => {
  countryContainer.classList.toggle("hide");
});

input.addEventListener("keyup", handleChange);
