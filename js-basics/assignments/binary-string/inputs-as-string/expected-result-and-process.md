# <span style="color:#98FB98"> Binary Sub String </span>
## Test Cases:

| Number | Substring | Binary | Answer |
|-|-|-|-|
|`65`|`10`|`1000001`|`1`|
|`65`|`00`|`1000001`|`4`|
|`21`|`101`|`10101`|`2`|
|`31`|`11`|`11111`|`4`|
|`8`|`01`|`1000`|`1`|
|`19`|`1`|`10011`|`3`|

### New test cases:

| Number | Substring | Binary     | Answer |
|-|-|-|-|
| `37`  | `01`   | `100101`    | `2` |
| `42`  | `101`  | `101010`    | `2` |
| `58`  | `00`   | `111010`    | `0` |
| `73`  | `11`   | `1001001`   | `0` |
| `85`  | `010`  | `1010101`   | `2` |
| `99`  | `001`  | `1100011`   | `1` |
| `120` | `111`  | `1111000`   | `2` |
| `133` | `01`   | `10000101`  | `2` |
| `147` | `000`  | `10010011`  | `0` |
| `156` | `1`    | `10011100`  | `4` |
| `177` | `01`   | `10110001`  | `2` |
| `188` | `100`  | `10111100`  | `1` |
| `199` | `11`   | `11000111`  | `3` |
| `205` | `101`  | `11001101`  | `1` |
| `222` | `01`   | `11011110`  | `1` |


## *EXPECTED RESULT:*

 |Input   | substring you get | substring to compare with | Increment |
 |--------|-------------------|---------------------------|-----------|
 |"1010"  | "10"              | "10"                      | +1        |
 |"101"   | "01"              | "10"                      | +0        |
 |"10"    | "10"              | "10"                      | +1        |
 |"1"     | "1"               | "10"                      | +0        |

```c
 Number that was given = 10
 Binary of that number = 1010
 Total No.Substrings = 2
```
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



# With String:

> First take both the inputs in string format

## Make the input number into binary string

- [x] Take the input string
- [x] Do the `%` operation to make it into number
- [x] Do the binary operation to make it into binary
- [x] ~~Add it to a `""` empty string to get a `"010101"` binary string~~
  - we are doing it with numbers for simplicity. But input is still numbers

## Check the Similar Sub-string:
- [x] Get the Sub-string
- [x] Find its length `"String.length"`
- [x] Get the power of the  length of string `**` operator

```js
length = String.length //Imagine lenth = 3;
multiplier = 10 ** length //Then multiplier = 1000;
```

- [x] With this extract the last indexes from the binary string

```c
extractedBinary = binary % multiplier;
```
> We should get  **extractedBinary = 101**

- [x] Then we will check both the string with `===`
  
  ```js
   Number = 37
   Sub-string = "01"
   Binary = 100101
   Answer = 3
  ```
  -If the leading zero is missing 

- [x] And if so we will **Increment** `count` variable
  - Then divide `/` by `10` to remove the last digit
  ```c
  string = string / 10;
  string = string - (string % 1); // to remove the floating values from the number
  ``` 
- [x] Repeat this till we finish our binary string

## Special cases have been considerd

```js
   Number = 37
   Sub-string = "01"
   Binary = 100101
   Answer = 3
  ```
- In these conditiion the output should be `"2"` not `3` beacause there is no `0` in the beginning of the string

- So this condition is **Wrong**
  ```js
    Number = 8
    Sub-string = "01"
    Binary = 1000
    Answer = 1
    ```
  - In the inital test cases this is given by assuming the MSB will be `0`
- This version of the code has solve it 
  ```js
  const stringBinary = "" + InputBinary;
  let similaritycount = (subString[0] === "0" && stringBinary[0] === "1") ? (0-1) : 0 ;
  ```
  - By making a string of the binary and checking if the inital number of both sub-string and binary `0` and `1` respectively.
  - If so `1` will be subtracted from the final output.
- This has been verified with new test cases
