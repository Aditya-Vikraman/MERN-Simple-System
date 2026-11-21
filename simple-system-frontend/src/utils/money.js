export function formatCurrency (cost) {
  const costString = cost.toLocaleString("en-IN", {style:"currency", currency: "INR", maximumFractionDigits: 0 });
  return costString.substring(1)
}