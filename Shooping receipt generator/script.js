const items = [
  { name: "Sugar", price: 250, quantity: 2 },
  { name: "Rice", price: 180, quantity: 3 },
  { name: "Cooking oil", price: 350, quantity: 1 },
];

function calculateItemTotal(price, quantity) {
  return price * quantity;
}

function calculateSubtotal() {
  let subtotal = 0;
  for (const item of items) {
    subtotal += calculateItemTotal(item.price, item.quantity);
  }
  return subtotal;
}

function calculateDiscount(subtotal) {
  if (subtotal >= 1000) {
    return subtotal * 0.05;
  }
  return 0;
}

function calculateFinalTotal(subtotal, discount) {
  return subtotal - discount;
}

// Extension: format money to two decimal places
function formatMoney(amount) {
  return "KES " + amount.toLocaleString("en-KE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

// Display the receipt
console.log("--- RECEIPT ---");
for (const item of items) {
  const total = calculateItemTotal(item.price, item.quantity);
  console.log(`${item.name} (${item.quantity} x ${formatMoney(item.price)}): ${formatMoney(total)}`);
}

const subtotal = calculateSubtotal();
const discount = calculateDiscount(subtotal);
const finalTotal = calculateFinalTotal(subtotal, discount);

console.log("---------------");
console.log("Subtotal: " + formatMoney(subtotal));
console.log("Discount (5%): " + formatMoney(discount));
console.log("Amount payable: " + formatMoney(finalTotal));