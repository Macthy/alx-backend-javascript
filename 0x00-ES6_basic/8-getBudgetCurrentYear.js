function getBudgetCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  return {
    [`income-${getBudgetCurrentYear()}`]: income,
    [`gdp-${getBudgetCurrentYear()}`]: gdp,
    [`capita-${getBudgetCurrentYear()}`]: capita,
  };
}
