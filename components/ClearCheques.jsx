import React from 'react'
import StepProcess from './StepProcess';

const ClearCheques = ({ setCompleteTransaction }) => {

	const steps = [
		"Wait for advise of accounting.",
		"Go to Control — Balancing — Clear Cheques in Till",
		"Select currency (PESO & US DOLLAR) only.",
		"Click YES.",
		"Insert bond paper."
	];

	return <StepProcess steps={steps} setCompleteTransaction={setCompleteTransaction} />
}

export default ClearCheques