/*

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

Iterate 0 to 10 using for loop, do the same using while and do while loop
Iterate 10 to 0 using for loop, do the same using while and do while loop
Iterate 0 to n using for loop
Write a loop that makes the following pattern using console.log():
    #
    ##
    ###
    ####
    #####
    ######
    #######
Use loop to print the following pattern:
    0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100
Using loop print the following pattern

    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000

Use for loop to iterate from 0 to 100 and print only even numbers
Use for loop to iterate from 0 to 100 and print only odd numbers
Use for loop to iterate from 0 to 100 and print only prime numbers
Use for loop to iterate from 0 to 100 and print the sum of all numbers.   
    The sum of all numbers from 0 to 100 is 5050.
Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
    The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
    [2550, 2500]
Develop a small script which generate array of 5 random numbers
Develop a small script which generate array of 5 random numbers and the numbers must be unique
Develop a small script which generate a six characters random id:
5j2khz

*/

//1
//for loop
for(let i = 0; i<= 10; i++)
{
    console.log(i)
}

//while loop
let i = 0
while(i <= 10)
{
    console.log(i)
    i++;
}

//do while loop
let i = 0
do
{
    console.log(i)
    i++;
}while(i <= 10)

//2
//for loop

//keep going until it is greater than or eqal to 0
for(let i = 10; i >= 0; i--)
{
    console.log(i)
}

//while loop
let i = 10
while(i >= 0)
{
    console.log(i)
    i++;
}

//do while loop
let i = 10
do
{
    console.log(i)
    i--;
}while(i >= 0)


//3
let n = 10

for(let i = 0; i <= n; i++)
{
    console.log(i)
}

//4
for(let i = 1; i <= 7; i++)
{   
        let pound = ''
        console.log(pound.repeat(i))
}

for(let i = 1; i <= 7; i++)
{   
    let output = ''
     for(let j = 0; j < i; j++) 
     {
         output += '#'
     }
     console.log(output)
}

/* 

#
##
###
####
#####
######
#######

*/

//5

for(let i = 0; i <= 10; i++)
{
    console.log(`${i} * ${i} =  ${i * i}`)
}
/*

0 * 0 =  0
1 * 1 =  1
2 * 2 =  4
3 * 3 =  9
4 * 4 =  16
5 * 5 =  25
6 * 6 =  36
7 * 7 =  49
8 * 8 =  64
9 * 9 =  81
10 * 10 =  100

*/
//6
for(let i = 0; i <= 10; i++)
{
    console.log(`${i} ${i ** 2} ${i ** 3}`)
}

/*

0 0 0
1 1 1
2 4 8
3 9 27
4 16 64
5 25 125
6 36 216
7 49 343
8 64 512
9 81 729
10 100 1000

*/

//7
for(let i = 0; i <= 100; i++)
{
    if(i % 2 != 0)
    {
        continue;
    }
    console.log(i)
} //print even numbers from 0 to 100

//8
for(let i = 0; i <= 100; i++)
{
    if(i % 2 === 0)
    {
        continue;
    }
    console.log(i)
}//print odd numbers from 0 to 100

