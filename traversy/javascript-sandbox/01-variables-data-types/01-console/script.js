const x = 100;

console.log(x);

console.error("Alert");

console.warn("Warning");

console.table({ name: "Dennis", email: "dennis@gmail.com" });

console.group("simple");
console.log(x);
console.error("Alert");
console.warn("Warning");
console.groupEnd();

const styles = "padding: 10px; background-color:blue; color:green";

console.log("%cHello World", styles);
