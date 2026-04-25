/*

The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    Sort the array and find the min and max age
    Find the median age(one middle item or two middle items divided by two)
    Find the average age(all items divided by number of items)
    Find the range of the ages(max minus min)
    Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

*/

//1

//1-A
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages) //[19, 19, 20, 22, 24, 24, 24, 25, 25, 26]

//2-B

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24].sort()
let getMiddle = Math.floor(ages.length / 2)

if(ages.length % 2 === 0)
{
     console.log((ages[getMiddle - 1] + ages[getMiddle]) / 2)
} else {
     console.log(ages[getMiddle])
} //24

//3-C

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let average = (ages[0] +  ages[1] +  ages[2] +  ages[3] +
              ages[4] +  ages[5] +  ages[6]  +  ages[7] +  ages[8] + ages[9] ) / ages.length

//add first then divide              
//in operator precedemce division is much higher than addition so division will compute first then addition
//you can force to add first by putting the addition to a open and close parenthesis
console.log(average) //22.8

//4-D

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24].sort()

let range = ages[ages.length - 1] - ages[0]
console.log(range) //7


//5-E
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24].sort()

let average = (ages[0] +  ages[1] +  ages[2] +  ages[3] +
              ages[4] +  ages[5] +  ages[6]  +  ages[7] +  ages[8] + ages[9] ) / ages.length

console.log(Math.abs(ages[0] - average)) // - 3.8000000000000007 -> 3.8000000000000007
console.log(ages[ages.length - 1] - average)  //3.1999999999999993


//2
const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]

console.log(countries.slice(0, 10))
/* ['Afghanistan', 'Albania', 'Algeria',
'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria'] */


let getMiddle = Math.floor(countries.length / 2)
console.log(getMiddle) // 96.5 -> 96

if(countries.length % 2 === 0)
{
     console.log((countries[getMiddle - 1] + countries[getMiddle]) / 2)
} else {
     console.log(countries[getMiddle])
} //LESOTHO


//3

console.log(countries.length) // 193

let toLength;

/* check if array is odd or even, then the ending range of first part and starting range 
 on the second part is depends on this */
 
countries.length % 2 === 0
? toLength = countries.length / 2
: toLength = Math.ceil(countries.length / 2)

const firstHalf  = countries.slice(0, toLength);
const secondHalf = countries.slice(toLength, countries.length);

console.log(firstHalf)
console.log(secondHalf)


