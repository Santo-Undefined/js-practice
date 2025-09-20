# <span style="color:#98FB98">The Lion 🦁 Zerbra 🦓 puzzel </span>
## Our goal is to find the distance 🌳⛰️ between the lion and zerbra! 

* `"L"` = a lion
* `"Z"` = a zebra
* `" "` (space) = an empty patch of land

| Input         | Expected Output |
| ------------- | --------------- |
| `"LZ"`        | 0               |
| `"Z L"`       | 1               |
| `"L     Z"`   | 5               |
| `"L     L"`   | -1              |
| `"Z   Z   Z"` | -1              |
| `"L  ZL Z"`   | 0               |


* If no lion or zerbra is present in the string ***return -1***
* If there is a lion and zerbra then return the distance between them
* if multiple are there return the **Lowest distance**

### Example:
```js
Input:  "L  ZL Z"
Output: 0

Here the smallest distance is between "ZL" so we get output 0
```
## Process 1 :
### Check the presence of 🦁 and 🦓 :
- [x] First we check if there are any **Lion** and **Zebra** are there in the string
  - [x] Took the string 
  - [x] Got the length of the string
  - And in a ``FOR LOOP`` iteratrated through each index
  - [x] Checked if ``"L"`` and ``"Z"`` is present in the string
    - If ``L`` made a variable named animal = Lion and if ``Z`` made that variable Zebra
    - Then checked if Lion and Zebra are there in the string
    - [x] We can make some kind of flag variable to assign the result
      - the flag is named ``animalDiversity`` when both are there the value will be 1 and if one of them is missing the value will be -1

  - If so continue to next part
### Check the distance between any ``Z`` and ``L``
- Here we need to find the distance between the Lion and Zebra
- The string can be like ``"L Z"`` or `"Z L"`
- We should count the distance between both
  - Possibility `"L  Z L"` in these cases we need the shorter distance
 - **IDEA:**
    - [x]First, find the index of either `L`
or `Z`
    - [x]Then move to each next index, compare the two characters
    - []If both are characters are similar, update the first index and continue


## Process 2 :
### Just check the distance between the two
- Go through the string
- If you find `L` and `Z` in the string store the index of the first one 
- Then check for the opposite string 
  - Like if you find `L` then look for `Z` and other way around
- If you find both same like `L` and next is also `L` update the position of the first one, then continue

## Process 3 :
### Checking the distance between all animal but keeping only the lowest distance
 > The code was written first for this process 
 
- First find one animal
- Then find the next animal
  - Make sure that it is the opposite animal
- Calculate the distance between both animals store it in `animaldistance`
- Repeat this process
  - Compare if the new distance is less than the previous distance
  - If so update the distance
