import React from 'react';
import StepProcess from './StepProcess';

const SaleOfMC = ({ setCompleteTransaction }) => {
	const steps = [
		"Greet the client with a smile.",
		"Check completeness and correctness of the transaction slips.",
		"Count Cash and write cash breakdown.",
		"Inform and collect P50 SC, write SC breakdown.",
		"Put cash in drawer.",
		"Verify signature via S/A WD if Account is Savings or C/A WD if Account is Current.",
		"Then sign on verified by portion of AF.",
		"Request MC & MC logbook from SO.",
		"Fill up logbook.",
		"Fill up MC details (MC MC amount, etc).",
		"T4S VALIDATION: Select Sales/Misc —> Sales —> Official Cheque Sales —> Manager's Check.",
		"Input cheque amount (amount of MC request).",
		"Press tab. (Amount in transaction amount should be the same with cheque amount).",
		"Input Cash In (amount of MC plus SC).",
		"In the cheque out portion located at the bottom of the screen type the following: SOURCE (either CASH or debit from SA), PURPOSE (see purpose from Application Form), CHEQUE NUMBER (from MC check), PAYEE (see Application Form), REMITTER (purchaser/client), CIF# (10 DIGITS).",
		"Input Description: 00066 SALE OF MC # (MC number).",
		"Validate application form.",
		"Vouch transaction slip (validation vs handwritten), CSA to sign beside Host Accepted.",
		"Insert MC for printing.",
		"CSA to sign on the processed by portion of MC Voucher.",
		"Use the check writer to check write MC amount.",
		"Seek SO and BM approval (one at a time).",
		"Ask the client to sign on received by portion of MC voucher.",
		"Give client the 3rd copy of AF and MC check.",
		"Say 'Thank you Sir/Ma'am'."
	];


	return <StepProcess title="Sale of MC" steps={steps} setCompleteTransaction={setCompleteTransaction} />;
}

export default SaleOfMC