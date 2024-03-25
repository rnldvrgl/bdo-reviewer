import React from 'react';
import StepProcess from './StepProcess';

const BillsPaymentICOS = ({ setCompleteTransaction }) => {
	const steps = [
		"Greet the client with a smile.",
		"Check completeness and correctness of the transaction slips.",
		"Count and write cash breakdown on transaction slip.",
		"Put cash in drawer.",
		"Instruct client to write contact.",
		"Go to ICOS Application.",
		"Create payment — Search (input company biller) — Click search.",
		"Input Subscriber's acct # & acct name.",
		"Select type of payment.",
		"Input amount.",
		"Submit.",
		"Review details encoded then click submit.",
		"Click print — Choose print to payment slip.",
		"Insert transaction slip in the printer.",
		"Vouch transaction slip (printed/written), CSA to sign beside Host Accepted.",
		"Give duplicate copy of transaction slip to client.",
		"Say 'Thank you Sir/Ma'am'.",
		"Prepare GL transaction slip.",
		"Write Branch code, Date, Description.",
		"Go to GL Balanced Credit.",
		"Press FIO — ML Bills Payment.",
		"Input transaction amount & cash in.",
		"Input description: 00066 BILLS PAYMENT CASH.",
		"Validate GL slip.",
		"Vouch transaction slip (validation vs handwritten), CSA to sign beside Host Accepted.",
		"CSA to sign on processed by portion of slip.",
		"Seek SO approval."
	];

	return <StepProcess steps={steps} setCompleteTransaction={setCompleteTransaction} />;
}

export default BillsPaymentICOS