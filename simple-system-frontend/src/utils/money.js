export function formatCurrency (cost) {
  let costString = cost.toLocaleString("en-IN", {style:"currency", currency: "INR", maximumFractionDigits: 0 });
  return costString.substring(1)
}