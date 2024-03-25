"use client"

import React, { useState } from 'react';
import { Button } from './ui/button';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { Progress } from './ui/progress';
import { cn } from '@/lib/utils';

const StepProcess = ({ steps, setCompleteTransaction }) => {
	const [currentStep, setCurrentStep] = useState(0);

	const handlePreviousStep = () => {
		if (currentStep === 0) return;
		setCurrentStep(currentStep - 1);
	};

	const handleNextStep = () => {
		if (currentStep === steps.length - 2) {
			setCurrentStep(currentStep + 1);
			setCompleteTransaction(true);
		} else {
			setCurrentStep(currentStep + 1);
		}
	};

	return (
		<div className="container p-4 mx-auto">
			<div className='flex flex-col items-center justify-center text-center gap-y-6'>
				<Progress value={(currentStep / (steps.length - 1)) * 100} />
				<h1 className="text-lg font-bold">
					{steps[currentStep]}
				</h1>
				{currentStep < steps.length - 1 && (

					<div className='flex gap-x-4'>
						<Button
							size="icon"
							className={cn("rounded-full")}
							disabled={currentStep === 0}
							onClick={handlePreviousStep}
						>
							<FaLongArrowAltLeft className="size-4" />
						</Button>
						<Button
							size="icon"
							className="rounded-full"
							onClick={handleNextStep}
						>
							<FaLongArrowAltRight className="size-4" />
						</Button>
					</div>
				)}
			</div>
		</div>
	);
};

export default StepProcess;