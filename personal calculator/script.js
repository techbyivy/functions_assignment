const income = 30000;

const defaultExpenses = [
  { name: "Rent", amount: 8000 },
  { name: "Food", amount: 6000 },
  { name: "Transport", amount: 3000 },
  { name: "Electricity", amount: 1500 },
  { name: "Internet", amount: 1000 },
  { name: "Other expenses", amount: 2000 },
];

let expenses = defaultExpenses.map((e) => ({ ...e }));

function calculateTotalExpenses(expenses) {
  let total = 0;
  for (const expense of expenses) {
    total += expense.amount;
  }
  return total;
}

function calculateBalance(income, expenses) {
  return income - calculateTotalExpenses(expenses);
}

function calculateSavingsPercentage(balance, income) {
  return (balance / income) * 100;
}

function getFinancialStatus(balance) {
  if (balance > 0) return "Surplus: you are saving money";
  if (balance === 0) return "Break-even: you spent all your income";
  return "Deficit: you are spending more than you earn";
}

function formatMoney(amount) {
  return "KES " + amount.toLocaleString("en-KE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function render() {
  const body = document.getElementById("expense-body");
  body.innerHTML = "";
  for (const expense of expenses) {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const amountCell = document.createElement("td");
    nameCell.textContent = expense.name;
    amountCell.textContent = formatMoney(expense.amount);
    row.append(nameCell, amountCell);
    body.appendChild(row);
  }

  const total = calculateTotalExpenses(expenses);
  const balance = calculateBalance(income, expenses);
  const savings = calculateSavingsPercentage(balance, income);

  document.getElementById("income").textContent = formatMoney(income);
  document.getElementById("total-expenses").textContent = formatMoney(total);

  const balanceEl = document.getElementById("balance");
  balanceEl.textContent = formatMoney(balance);
  balanceEl.className = balance >= 0 ? "positive" : "negative";

  document.getElementById("savings").textContent = savings.toFixed(2) + "% of income";

  const statusEl = document.getElementById("status");
  statusEl.textContent = getFinancialStatus(balance);
  statusEl.className = balance >= 0 ? "positive" : "negative";
}

document.getElementById("add-btn").addEventListener("click", () => {
  const nameInput = document.getElementById("expense-name");
  const amountInput = document.getElementById("expense-amount");
  const name = nameInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (name === "" || isNaN(amount) || amount < 0) {
    alert("Please enter a name and a valid amount.");
    return;
  }

  expenses.push({ name, amount });
  nameInput.value = "";
  amountInput.value = "";
  render();
});

document.getElementById("reset-btn").addEventListener("click", () => {
  expenses = defaultExpenses.map((e) => ({ ...e }));
  render();
});

render();