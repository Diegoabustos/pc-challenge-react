export interface User {
    name?: string;
    paternalSurname?: string;
    maternalSurname?: string;
    phone?: string;
    email?: string;
}

export interface Report {
    averageTicket: number;
    topTicket: number;
    topPaymentMethod: string;
    revenuePerHour: [];
}

export type previousDayReport = {
    previousDay: Report[];
}