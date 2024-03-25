import React from 'react';
import StepProcess from './StepProcess';

const ForexBuying = ({ setCompleteTransaction }) => {
	const steps = [
		"Greet the client with a smile.",
		"Check completeness and correctness of the transaction slips.",
		"Ask the client to write the serial number and sign.",
		"Verify serial # vs actual $.",
		"Count and write down $ breakdown (ex. $50 x 1).",
		"Put cash in the drawer.",
		"Verify client's signature via S/A WD if the account is Savings or C/A WD if the account is Current.",
		"Then sign on the verified portion of the Application Form.",
		"Log in to BCX.",
		"Inform the client of the BUYING RATE.",
		"Click USD/PHP NEW TRANSACTION.",
		"Click Mode: BUY.",
		"Select transaction type NOTES then click next.",
		"Input amount (DOLLAR AMOUNT).",
		"Inform the client of RATE then click next.",
		"Write FX details in AF. (FX rate, amount request, conv amt., total).",
		"Click save done deal.",
		"Encode client's details (NAME, BDAY, CONTACT #, ADDRESS) NO ABBREVIATION.",
		"Beneficiary: YES.",
		"Click ADD INFORMATION (Philippines, Purpose).",
		"Click 0K.",
		"Double click INDIVIDUAL button.",
		"Encode Name (FIRST, MIDDLE, LAST).",
		"Click SAVE button.",
		"T4S VALIDATION: Select Sales/Misc. - Xchg — Get Foreign, Give Local Funds.",
		"Click F9 to change currency.",
		"Select: US DOLLAR FOREX.",
		"Tab to change rate.",
		"Input cash in.",
		"Click 0K.",
		"Input Description: 00066 BUYING ($ amt.) @ RATE (ex. 00066 BUYING $50 @ 52.85).",
		"Validate the application form.",
		"Prepare peso cash, write actual cash breakdown.",
		"Vouch transaction slip (validation vs handwritten), CSA to sign beside Host Accepted.",
		"Ask the client to sign on the received by portion of AF before payout.",
		"Compare signature, give cash and 3rd copy to the client.",
		"Say 'Thank you Sir/Ma'am.'"
	];

	return <StepProcess title="Forex Buying" steps={steps} setCompleteTransaction={setCompleteTransaction} />;
}

export default ForexBuying