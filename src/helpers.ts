// Convert a number to money formatting
export const convertMoney = (money: number): string => {
  const formatter: Intl.NumberFormat = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

// Assign text depending on response pay method
export function paymentMethod(pay: string) {
    let text: string;
    switch (pay) {
        case 'card':
            text = "Tarjeta de credito/debito"
            break;
        default:
            text = "Distinto metodo de pago"
            break;
    }
    return text;
}
