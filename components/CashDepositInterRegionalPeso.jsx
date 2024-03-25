import React from 'react';
import StepProcess from './StepProcess';

const CashDepositInterRegionalPeso = ({ setCompleteTransaction }) => {
	const steps = [
		"Greet the client with a smile.",
		"Check the completeness and correctness of the slips.",
		"Identify account number if savings or current.",
		"Identify branch code.",
		"Go to INFOCAST - BOO Directory.",
		"Inquire BRANCH CODE. (NOTE: Telephone area code is NOT the same as the receiving branch)",
		"Inform the client and collect P50.00 service charge.",
		"Write cash breakdown. (ex: SC 50 x 1)",
		"Put cash inside the drawer.",
		"If the account is savings, select: Savings— Txn — Savings Account Cash Only Deposit. If the account is current, select: Current — Txn — Current Account Cash Only Deposit.",
		"Input account number and press TAB.",
		"Input Transaction Amount. In Cash In box, press F7, input the number of pieces per denomination, then click post.",
		"Put cash inside the drawer.",
		"Input description: 00066 CD.",
		"Validate cash transaction slip.",
		"Vouch transaction slip (validation vs handwritten), CSA to sign beside Host Accepted.",
		"Give the duplicate copy to the client.",
		"Say 'Thank you Sir/Ma'am.'",
		"SERVICE CHARGE VALIDATION: Go to GL Balanced Credit.",
		"Press F1O to select SC Others-Interregl-DEP.",
		"Input the amount on the transaction amount and cash in fields.", "Input description: 00066 SC IR DEP TO YYYY.",
		"Validate SC at the back of the original copy of the transaction slip.",
		"Vouch transaction slip (validation vs handwritten), CSA to sign beside Host Accepted.",
		"Set aside Cash Transaction slip."
	];

	return <StepProcess steps={steps} setCompleteTransaction={setCompleteTransaction} />;
}

export default CashDepositInterRegionalPeso;
