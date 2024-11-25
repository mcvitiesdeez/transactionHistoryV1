export type RootStackParamList = {
    Welcome: undefined;
    TransactionHistory: undefined;
    TransactionDetails: {
        item: {
            transactionID: string;
            date: string;
            amount: number;
            description: string;
            type: string;
            category: string;
        }
    };
};
