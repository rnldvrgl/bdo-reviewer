import React, { useState } from 'react';
import { Button } from './ui/button';
import StepProcess from './StepProcess';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger } from './ui/alert-dialog';

const StartDay = ({ setStartDayCompleted }) => {
	const [start, setStart] = useState(false);
	const [currentStep, setCurrentStep] = useState(0);
	const [completeTransaction, setCompleteTransaction] = useState({
		'PICOSCount': false,
		'OpenTill': false,
		'CTSValidation': false
	});

	const mainSteps = {
		'PICOSCount': [
			"Compare actual cash vs the CTS.",
			"Fill up complete CTS details (Branch Code: 00066, Date: (current date), Teller Ball Stamp, Sign on RECEIVED BY portion.",
			"Give CTS to SO and ask to sign on the DELIVERED BY portion."
		],
		'OpenTill': [
			"Wait for the instruction from officer if branch open has been done.",
			"Click the T4S icon, input user id and password.",
			"On start of day screen, check effective date (should be the current date). All beginning cash must be zero.",
			"Click 0K and request for override. ('SO override please Open Till').",
			"Print Open Till Report.",
			"CSA to sign on Open Till Report print out.",
			"Ask SO to approve Open Till validation. ('SO pa-approve')"
		],
		'CTSValidation': [
			"Select: Control —> Financial —> Cash Transfer In",
			"Input: Amount (Grand Total)",
			"Input: From TELLER and FROM TILL: 1",
			"Click OK",
			"Validate YELLOW copy of Cash Transfer Slip.",
			"Vouch transaction slip, CSA to sign beside Host Accepted.",
			"Set aside CTS slip and open till report."
		]
	};

	const transactions = [
		{
			name: 'PICOSCount',
			label: 'PICOS Count',
			steps: mainSteps.PICOSCount
		},
		{
			name: 'OpenTill',
			label: 'Open Till',
			steps: mainSteps.OpenTill
		},
		{
			name: 'CTSValidation',
			label: 'CTS Validation',
			steps: mainSteps.CTSValidation
		}
	]

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
		setStartDayCompleted(true);
	}

	return (
		<div className="container p-4 mx-auto">
			{!start && (
				<div className="flex flex-col text-center gap-y-8">
					<h1 className="text-2xl font-bold">WELCOME TO YOUR BDO REVIEWER</h1>
					<p className='mb-4'>Don&apos;t forget to always greet your client with a smile</p>
					<Button onClick={() => setStart(true)}>Start your Day</Button>
				</div>
			)}

			{start && (
				<div className='flex flex-col text-center gap-y-6'>
					<h1 className="text-2xl font-bold">START YOUR DAY:</h1>
					<p className='mb-4'>Before starting your day, you have three tasks to complete.</p>
					{transactions.map((transaction, index) => (
						<AlertDialog key={index}>
							<AlertDialogTrigger asChild>
								<Button disabled={completeTransaction[transaction.name]}>{transaction.label}</Button>
							</AlertDialogTrigger>
							<AlertDialogContent className="border-0 bg-slate-400">
								<StepProcess
									title={transaction.label}
									steps={transaction.steps}
									setCompleteTransaction={() => handleTransactionComplete(transaction.name)}
								/>
								{completeTransaction[transaction.name] && (
									<AlertDialogCancel className="text-white border-0 bg-lime-600 hover:bg-lime-800 hover:text-white" onClick={() => handleTransactionComplete(transaction.name)}>
										DONE WITH {transaction.label}
									</AlertDialogCancel>
								)}
							</AlertDialogContent>
						</AlertDialog>
					))}
				</div>
			)}
		</div>
	);
};

export default StartDay;
