import React, { useState } from 'react';
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogCancel,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import CashDepositSameBranchCodeDollar from './CashDepositSameBranchCodeDollar';
import CashDepositInterRegionalPeso from './CashDepositInterRegionalPeso';
import LocalCheckDeposit from './LocalCheckDeposit';
import ClearCheques from './ClearCheques';
import BillsPaymentICOS from './BillsPaymentICOS';
import Withdrawal from './Withdrawal';
import ForexBuying from './ForexBuying';
import SaleOfMC from './SaleOfMC';
import { Button } from './ui/button';

const TransactionsList = ({ handleTransactionClick, setDayCompleted }) => {
	const [completeTranscation, setCompleteTransaction] = useState(false);
	const transactions = [
		{
			name: "CASH DEPOSIT",
			options: [
				{
					name: "SAME BRANCH CODE - DOLLAR",
					content: <CashDepositSameBranchCodeDollar setCompleteTransaction={setCompleteTransaction} />
				},
				{
					name: "INTER REGIONAL - PESO",
					content: <CashDepositInterRegionalPeso setCompleteTransaction={setCompleteTransaction} />
				}
			]
		},
		{
			name: "CHECK DEPOSIT",
			options: [
				{
					name: "LOCAL",
					content: <LocalCheckDeposit setCompleteTransaction={setCompleteTransaction} />
				}
			]
		},
		{
			name: "CLEAR CHEQUES",
			content: <ClearCheques setCompleteTransaction={setCompleteTransaction} />
		},
		{
			name: "BILLS PAYMENT (ICOS)",
			content: <BillsPaymentICOS setCompleteTransaction={setCompleteTransaction} />
		},
		{
			name: "WITHDRAWAL",
			content: <Withdrawal setCompleteTransaction={setCompleteTransaction} />
		},
		{
			name: "FOREX BUYING",
			content: <ForexBuying setCompleteTransaction={setCompleteTransaction} />
		},
		{
			name: "SALE OF MC",
			content: <SaleOfMC setCompleteTransaction={setCompleteTransaction} />
		}
	];

	return (
		<>
			<h1 className="mb-5 text-3xl font-bold text-center">Select Transaction</h1>
			{transactions.map((transaction, index) => (
				<div key={index} className="flex flex-col mb-4 gap-y-4 ">
					{transaction.options ? (
						<AlertDialog>
							<AlertDialogTrigger asChild onClick={() => handleTransactionClick(transaction.name)}>
								<Button>
									{transaction.name}
								</Button>
							</AlertDialogTrigger>
							<AlertDialogContent>

								{transaction.options.map((option, idx) => (
									<AlertDialog key={idx}>
										<AlertDialogTrigger asChild >
											<Button>
												{option.name}
											</Button>
										</AlertDialogTrigger>
										<AlertDialogContent className="border-0 bg-slate-400">
											{option.content}
											{completeTranscation &&
												<AlertDialogCancel className="text-white border-0 bg-lime-600 hover:bg-lime-800 hover:text-white" onClick={() => setCompleteTransaction(false)}>
													COMPLETE TRANSACTION
												</AlertDialogCancel>
											}
										</AlertDialogContent>
									</AlertDialog>
								))}

								<AlertDialogCancel className="bg-red-400 hover:bg-red-500 hover:text-white">
									Close
								</AlertDialogCancel>

							</AlertDialogContent>
						</AlertDialog>

					) : (
						<AlertDialog>
							<AlertDialogTrigger asChild onClick={() => handleTransactionClick(transaction.name)}>
								<Button>
									{transaction.name}
								</Button>
							</AlertDialogTrigger>
							<AlertDialogContent>
								{transaction.content}
								{completeTranscation &&
									<AlertDialogCancel className="text-white border-0 bg-lime-600 hover:bg-lime-800 hover:text-white" onClick={() => setCompleteTransaction(false)}>
										COMPLETE TRANSACTION
									</AlertDialogCancel>
								}
							</AlertDialogContent>
						</AlertDialog>
					)}
				</div>
			))}

			<Button
				variant="destructive"
				className="w-full mt-6"
				onClick={() => setDayCompleted(true)}
			>
				End Day
			</Button>
		</>
	);
};

export default TransactionsList;