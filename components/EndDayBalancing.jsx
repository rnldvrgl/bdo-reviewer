import React, { useState } from 'react';
import { Button } from './ui/button';
import StepProcess from './StepProcess';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger } from './ui/alert-dialog';

const EndDayBalancing = ({ setEndDayCompleted }) => {
	const [start, setStart] = useState(false);
	const [completeTransaction, setCompleteTransaction] = useState({
		'FCDUValidation': false,
		'FOREXValidation': false,
		'PesoTransfer': false,
		'PICOS': false
	});

	const mainSteps = {
		"FCDUValidation": [
			"Prepare CTS. Write Branch code (00066), Date. Teller Ball or IO Ball & CSA Signature.",
			"Write the word FCDU on the CTS.",
			"List the serial number per denomination.",
			"In T4S. Validate CTS (WHITE COPY only) to CONTROL -> FINANCIAL -> CASH TRANSFER OUT.",
			"Click F9 to change the currency to US DOLLAR."
		],
		"FOREXValidation": [
			"Prepare CTS. Write Branch code (00066). Date, Teller Ball or ID Ball & CSA Signature.",
			"Write the word FOREX on the CTS.",
			"List the serial number per denomination.",
			"In T4S, Validate CTS (WHITE COPY only) to CONTROL > FINANCIAL > CASH TRANSFER OUT.",
			"Click F9 to change the currency to US DOLLAR FOREX.",
			"DO NOT CHANGE RATE."
		],
		"PesoTransfer": [
			"Prepare CTS. Write Branch code (00066). Date, Teller Ball or ID Ball & CSA Signature.",
			"In T4S, Validate CTS (WHITE COPY only) to CONTROL > FINANCIAL > CASH TRANSFER OUT.",
			"Give ALL CASH (Dollars peso Big Bills & Other Currencies) with CTS to SO and ask to SO sign on the received by portion."
		],
		"PICOS": [
			"In T4S. Go to CONTROL > BALANCING > CASH BALANCE COMPARE. Click Display. Press F9.",
			"Count cash and input in the number column per denomination. Click 0k. Then Click display.",
			"Prepare 2 sets of CTS (CTS 1 & CTS 2). Copy the breakdown from Cash Balance Compare on the two sets of CTS.",
			"CTS 1: Prepare CTS. write Branch code (00066). Date. Teller Ball or ID Ball & CSA Signature.",
			"CTS 2: Prepare CTS. NO Branch Code. Date, Teller Ball or ID Ball & CSA Signature. CSA to Sign on the upper right corner of CTS 2.",
			"In T4S. Validate CTS 1 ONLY (WHITE copy only) to CONTROL -> FINANCIAL -> CASH -> TRANSFER OUT.",
			"Ask co-CSA to cash count picos and co-CSA to sign on both CTS 1 & CTS 2. Ask SO to sign on received by portion of the CTS 1."
		]
	};

	const transactions = [
		{
			name: "FCDUValidation",
			label: "FCDU Validation",
			steps: mainSteps.FCDUValidation
		},
		{
			name: "FOREXValidation",
			label: "FOREX Validation",
			steps: mainSteps.FOREXValidation
		},
		{
			name: "PesoTransfer",
			label: "Peso Transfer",
			steps: mainSteps.PesoTransfer
		},
		{
			name: "PICOS",
			label: "PICOS",
			steps: mainSteps.PICOS
		}
	];

	const handleTransactionComplete = (transactionName) => {
		const transaction = transactions.find(t => t.name === transactionName);
		if (transaction) {
			setCompleteTransaction(prevState => ({
				...prevState,
				[transaction.name]: true
			}));
		}
	};

	const allTransactionsCompleted = () => {
		return Object.values(completeTransaction).every(transaction => transaction);
	};

	if (allTransactionsCompleted()) {
		setEndDayCompleted(true);
	}

	return (
		<>
			<div className='absolute flex flex-col items-center px-4 py-2 text-xs top-4'>
				<h1 className='w-full mb-3 text-base font-bold'>NOTES:</h1>
				<ul className='flex flex-col list-disc gap-y-2' >
					<li>CASH TRANSFERS - forms to use CTS (Cash Transfer Slip).</li>
					<li>1 CTS for FCDU. 1 CTS for FOREX.</li>
					<li>
						CTS VALIDATION for FCDU & FOREX should be VALIDATED SEPARATELY.
					</li>
				</ul>
			</div>
			<div className="container relative p-4 mx-auto">
				{!start && (
					<div className="flex flex-col text-center gap-y-8">
						<h1 className="text-2xl font-bold">END OF DAY BALANCING</h1>
						<p className='mb-4'>
							Before you go home, make sure to balance your transactions.
						</p>
						<Button onClick={() => setStart(true)}>Start Balancing</Button>
					</div>
				)}

				{start && (
					<div className='flex flex-col text-center gap-y-6'>
						<h1 className="mb-4 text-2xl font-bold">END DAY BALANCING:</h1>
						{transactions.map((transaction, index) => (
							<AlertDialog key={index}>
								<AlertDialogTrigger asChild>
									<Button disabled={completeTransaction[transaction.name]}>{transaction.label}</Button>
								</AlertDialogTrigger>
								<AlertDialogContent>
									<StepProcess
										steps={transaction.steps}
										setCompleteTransaction={() => handleTransactionComplete(transaction.name)}
									/>
									{completeTransaction[transaction.name] && (
										<AlertDialogCancel className="text-white bg-lime-600 hover:bg-lime-800 hover:text-white" onClick={() => handleTransactionComplete(transaction.name)}>
											DONE WITH {transaction.label}
										</AlertDialogCancel>
									)}
								</AlertDialogContent>
							</AlertDialog>
						))}
					</div>
				)}
			</div>
		</>
	);
};

export default EndDayBalancing;
