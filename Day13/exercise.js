//Exercises:Level 1

//1. Display the countries array as a table

const countries = [
  "Philippines",
  "Japan",
  "South Korea",
  "Singapore",
  "Thailand",
  "Vietnam",
  "Indonesia",
  "Malaysia",
  "China",
  "India"
];

console.table(countries)

//2. Display the countries object as a table

const countries = {
  Philippines: {
    capital: "Manila",
    population: 114000000,
    continent: "Asia",
    language: "Filipino"
  },
  Japan: {
    capital: "Tokyo",
    population: 124000000,
    continent: "Asia",
    language: "Japanese"
  },
  France: {
    capital: "Paris",
    population: 68000000,
    continent: "Europe",
    language: "French"
  },
  Brazil: {
    capital: "Brasilia",
    population: 216000000,
    continent: "South America",
    language: "Portuguese"
  },
  Canada: {
    capital: "Ottawa",
    population: 40000000,
    continent: "North America",
    language: "English"
  }
};

console.table(countries)

//3. Use console.group() to group logs

//Use console.group() to group logs

const countries = {
  Philippines: {
    capital: "Manila",
    population: 114000000,
    continent: "Asia",
    language: "Filipino"
  },
  Japan: {
    capital: "Tokyo",
    population: 124000000,
    continent: "Asia",
    language: "Japanese"
  },
  France: {
    capital: "Paris",
    population: 68000000,
    continent: "Europe",
    language: "French"
  },
  Brazil: {
    capital: "Brasilia",
    population: 216000000,
    continent: "South America",
    language: "Portuguese"
  },
  Canada: {
    capital: "Ottawa",
    population: 40000000,
    continent: "North America",
    language: "English"
  }
};

const names = ["Alice", "Bob", "Charlie", "David", "Emma"];

const ages = [22, 25, 19, 30, 27];


console.group('Countries')
console.log(countries)
console.groupEnd('Countries')

console.group('Name')
console.log(names)
console.groupEnd('Name')

console.group('Age')
console.log(ages)
console.groupEnd('Age')





