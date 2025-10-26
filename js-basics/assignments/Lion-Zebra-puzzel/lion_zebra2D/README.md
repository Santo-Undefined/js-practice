## 🦁🦓 Assignment: Lions and Zebras — 2D Hunt

You are given a 2D grid representing a savanna.
Each cell in the grid can contain:

* `'L'` — a **lion**
* `'Z'` — a **zebra**
* `' '` — empty grassland

Your task is to find **the zebra most in danger**, defined as the zebra with the **shortest distance to any lion**.

---

### 📏 Distance Metrics

There are two ways to measure distance on the grid:

1. **Manhattan distance** (grid distance)

   Manhattan distance counts the number of **horizontal and vertical steps** it takes to move from one point to another, ignoring diagonals.

   Formula:
   [
   d_\text{Manhattan} = |x_2 - x_1| + |y_2 - y_1|
   ]

   Example:

   * Lion at `(0,0)`
   * Zebra at `(1,2)`
   * Manhattan distance = |1 − 0| + |2 − 0| = 3

2. **Euclidean distance** (straight-line distance)

   Euclidean distance measures the **direct straight-line distance** between two points.

   Formula:
   [
   d_\text{Euclidean} = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
   ]

   Using the same points:

   * Lion at `(0,0)`
   * Zebra at `(1,2)`
   * Euclidean distance = (\sqrt{(1-0)^2 + (2-0)^2} = \sqrt{1+4} = \sqrt{5} \approx 2.236)

---

### 📝 Assignment Requirements

1. Write a function `findShortestDist2D(grid, metric)` where:

   * `grid` is an array of strings representing rows of the savanna.
   * `metric` is either `'manhattan'` or `'euclidean'`.

2. The function should return **the shortest distance between any lion and any zebra** according to the chosen metric.

3. If no lions or no zebras are present, return `null`.

---

### 💡 Example Usage

```js
const grid = [
  "L   ",
  "  Z ",
  "   Z"
];

console.log(findShortestDist2D(grid, 'manhattan')); // → 3
console.log(findShortestDist2D(grid, 'euclidean')); // → ≈ 2.236
```

---
