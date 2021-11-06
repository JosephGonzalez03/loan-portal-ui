import React from "react";
import { Loan } from "../../api/services/LoanService";
import loanFormReducer, { LoanAction } from "../reducers/LoanFormReducer";

const initialState: {loans: Loan[], dispatchLoansAction: (action: LoanAction) => void} = {loans: [], dispatchLoansAction: f => f};
export const LoanContext = React.createContext(initialState);

export const useLoans = () => React.useContext(LoanContext);

export default function LoanProvider({children}: {children: React.ReactNode}): JSX.Element {
    const [loans, dispatchLoansAction] = React.useReducer(loanFormReducer, []);

    return (
        <LoanContext.Provider value={{loans, dispatchLoansAction}}>
            {children}
        </LoanContext.Provider>
    )
}
