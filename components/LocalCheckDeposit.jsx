import React from 'react';
import StepProcess from './StepProcess';

const LocalCheckDeposit = ({ setCompleteTransaction }) => {
	const steps = [
		"Greet the client with a smile.",
		"Check completeness and correctness of the slips.",
		"Check 5 distinct parts of the check.",
		"Instruct client to write account # & account name at the back of check.",
		"Check the account name and account number written by the client against the transaction slip.",
		"Identify account number if savings or current.",
		"If savings, Go to Savings —> Txn — Savings Acct, Cheque Only Deposit. If current, Go to Current— Txn — Current Acct, Cheque Only Deposit.",
		"Input account number then press TAB. (NOTE Account Name should match with the account name display in)",
		"Input transaction amount & cheques in (should be the same).",
		"Press tab.",
		"Check details will appear.",
		"Click BY QUANTITY.",
		"Go to INDEX. then input press tab the QTY/Number - Input actual # of checks received.",
		"Click post.",
		"Input Description : 00066 LCK",
		"Validate Check Transaction Slip.",
		"Vouch transaction slip (validation vs handwritten), CSA to sign beside Host Accepted.",
		"CSA to stamp bank endorsement stamp and date at the back of the check.",
		"Give duplicate copy to client.",
		"Say 'Thank you Sir/Ma'am.'"
	];

	return <StepProcess steps={steps} setCompleteTransaction={setCompleteTransaction} />;
};

export default LocalCheckDeposit;