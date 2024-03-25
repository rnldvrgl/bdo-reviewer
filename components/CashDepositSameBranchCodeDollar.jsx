import React from 'react';
import StepProcess from './StepProcess';

const CashDepositSameBranchCodeDollar = ({ setCompleteTransaction }) => {

	const steps = [
		"Greet the client with a smile.",
		"Check completeness and correctness of the slips.",
		"Instruct client to write the serial number and sign.",
		"Verify serial # vs actual S.",
		"Select: Savings —> Txn —> Savings Account Cash Only Deposit.",
		"Input account number and press TAB.",
		"Input Transaction Amount.",
		"In Cash In box, press F7, input number of pieces per denomination, then click post.",
		"Put cash in drawer.",
		"Input description: 00066 $ CD.",
		"Validate cash transaction slip.",
		"Vouch transaction slip (validation vs. handwritten), CSA to sign beside Host Accepted.",
		"Give the duplicate copy to the client.",
		"Say 'Thank you, Sir/Ma'am.'"
	];

	return <StepProcess steps={steps} setCompleteTransaction={setCompleteTransaction} />;
};

export default CashDepositSameBranchCodeDollar;
