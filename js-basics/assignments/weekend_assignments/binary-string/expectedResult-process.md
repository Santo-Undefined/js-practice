EXPECTED RESULT:

 |Input   | substring you get | substring to compare with | Increment |
 |--------|-------------------|---------------------------|-----------|
 |"1010"  | "10"              | "10"                      | +1        |
 |"101"   | "01"              | "10"                      | +0        |
 |"10"    | "10"              | "10"                      | +1        |
 |"1"     | "1"               | "10"                      | +0        |

Number that was given = 10
binary of that number = 1010
total No.Substrings = 2

What to be done?

you will get a binary (interger) string
you will get another string which will be the substring
you need to count how many such substring are present in the main binary string

HOW to do it ?

[✅] I have already made binary convertor (relaible, tested)
[✅] I can make it into a string by adding it to an empty string 

[] I should take the substring also as a another string 
[] Find the length of that substring ("".length can be used)
[] Take the same length of string from last/first of the binary string and compare those two
  []
[] If true increment some variable, if not do nothing and move on to the next step
[] Remove the last/first character of the string and repeat the process
