import React from 'react';
import StepProcess from './StepProcess';

const Withdrawal = ({ setCompleteTransaction }) => {
	const steps = [
		"Greet the client with a smile.",
		"Check completeness and correctness of the withdrawal slip.",
		"Go to Savings — Txn — Savings Account Cash Only Withdrawal.",
		"Input account number then press tab.",
		"Signature will appear, click zoom.",
		"Verify client's signature then CSA will sign on verified portion of the withdrawal slip.",
		"Input transaction amount.",
		"Input passbook line & passbook balance.",
		"Input description: 00066 WD.",
		"Validate withdrawal slip. (Prepare cash while printing).",
		"Print passbook.",
		"Write actual cash breakdown in withdrawal slip.",
		"Vouch transaction slip (validation vs handwritten), CSA to sign beside Host Accepted.",
		"Ask client to sign on received by portion of the withdrawal slip before cash pay-out.",
		"Compare signature.",
		"Count the money to client and return passbook.",
		"Say 'Thank you Sir/Ma'am.'"
	];
	return <StepProcess steps={steps} setCompleteTransaction={setCompleteTransaction} />;
}

export default Withdrawal