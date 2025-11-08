// if (temperature > 30) {
//   weather = "hot";
// } else {
//   weather = "cool";
// }
const temperature = 35;
const weather = (temperature > 30) ? "hot" : "cool"; 
console.log(weather);

// if (isMember) {
//   discount = 10;
// } else {
//   discount = 0;
// }
const isMember = true;
const discount = (isMember) ? 10 : 0; 
console.log(discount);

// if (day === "Saturday" || day === "Sunday") {
//   isWeekend = true;
// } else {
//   isWeekend = false;
// }
const day = "Saturday";
const isWeekend = (day === "Saturday" || day === "Sunday")
console.log(isWeekend);

// if (cartItems.length === 0) {
//   status = "empty";
// } else {
//   status = "ready";
// }
const cartItems = "Saturday";
const status = (cartItems.length === 0) ? "empty" : "ready";
console.log(isWeekend);

// if (marks >= 90) {
//   grade = "A";
// } else {
//   grade = "B";
// }
const marks = 85;
const grade = (marks >= 90) ? "A" : "B";
console.log(grade);

// if (userType === "admin") {
//   baseAccess = "all";
//   canDelete = true;
// } else {
//   baseAccess = "limited";
//   canDelete = false;
// }
const userType = "admin";
const baseAccess = (userType === "admin") ? "all" : "limited";
const canDelete = (userType === "admin") ? true : false;
console.log(baseAccess);
console.log(canDelete);

// if (isPremiumUser) {
//   discount = basePrice * 0.2;
//   finalPrice = basePrice - discount;
// } else {
//   discount = basePrice * 0.05;
//   finalPrice = basePrice - discount;
// }
const isPremiumUser = true;
const basePrice = 100;
const discount1 = (isPremiumUser) ? basePrice * 0.2 : basePrice * 0.05;
const finalPrice = (isPremiumUser) ? basePrice - discount1 : basePrice - discount1;
console.log(discount1);
console.log(finalPrice);

// if (speed > 100) {
//   message = "Too fast";
//   penalty = 200;
// } else {
//   message = "OK";
//   penalty = 0;
// }
const speed = 100;
const message = (speed > 100) ? "Too fast" : "OK";
const penalty = (speed > 100) ? 200 : 0;
console.log(message);
console.log(penalty);

// if (role === "teacher") {
//   dashboard = "gradebook";
//   permissions = "view/edit/grade";
// } else {
//   dashboard = "courses";
//   permissions = "view";
// }
const role = "teacher";
const dashboard = (role === "teacher") ? "gradebook" : "courses";
const permissions = (role === "teacher") ? "view/edit/grade" : "view";
console.log(dashboard);
console.log(permissions);

// if (age >= 65) {
//   category = "senior";
//   ticketPrice = 5;
// } else {
//   category = "adult";
//   ticketPrice = 10;
// }
const age = 65;
const category = (age >= 65) ? "senior" : "adult";
const ticketPrice = (age >= 65) ? 5 : 10;
console.log(category);
console.log(ticketPrice);
