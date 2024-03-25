"use client"

import React, { useState } from 'react';
import { Button } from './ui/button';

const StartDay = ({ setStartDayCompleted }) => {
	const [start, setStart] = useState(false);
	const [currentStep, setCurrentStep] = useState(0);
	const [stepsCompleted, setStepsCompleted] = useState({
		PICOSCount: {
			PICOSCountStep1: false,
			PICOSCountStep2: false,
			PICOSCountStep3: false
		},
		OpenTill: {
			OpenTillStep1: false,
			OpenTillStep2: false,
			OpenTillStep3: false,
			OpenTillStep4: false,
			OpenTillStep5: false,
			OpenTillStep6: false,
			OpenTillStep7: false
		},
		CTSValidation: {
			CTSValidationStep1: false,
			CTSValidationStep2: false,
			CTSValidationStep3: false,
			CTSValidationStep4: false,
			CTSValidationStep5: false,
			CTSValidationStep6: false,
			CTSValidationStep7: false
		}
	});

	const handleSubStepToggle = (step, subStep) => {
		const updatedStepsCompleted = { ...stepsCompleted };
		updatedStepsCompleted[step][subStep] = !updatedStepsCompleted[step][subStep];
		setStepsCompleted(updatedStepsCompleted);
	};

	const handleMainStepToggle = (step) => {
		const updatedStepsCompleted = { ...stepsCompleted };
		updatedStepsCompleted[step] = !updatedStepsCompleted[step];
		setStepsCompleted(updatedStepsCompleted);
	};

	const handleNextStep = () => {
		if (currentStep === 3) {
			setStartDayCompleted(true)
		} else {
			setCurrentStep(currentStep + 1);
		}
	};

	return (
		<div className="container p-4 mx-auto">
			{!start && (
				<div className="flex flex-col text-center gap-y-8">
					<h1 className="text-2xl font-bold">WELCOME TO BDO REVIEWER</h1>
					<p className='mb-4'>Always greet your client with a smile</p>
					<Button
						onClick={() => setStart(true)}
					>
						Start Day
					</Button>
				</div>
			)}

			{start && currentStep === 0 && (
				<div className='flex flex-col text-center gap-y-6'>
					<h1 className="mb-4 text-2xl font-bold">You have three steps to accomplish before starting your day.</h1>
					<Button
						onClick={handleNextStep}
					>
						Proceed
					</Button>
				</div>
			)}

			{start && currentStep === 1 && (
				<MainStep
					label="PICOS COUNT"
					completed={Object.values(stepsCompleted.PICOSCount).every(step => step)}
					onToggle={() => handleMainStepToggle('PICOSCount')}
				>
					<SubStep
						label="Compare actual cash vs the CTS."
						completed={stepsCompleted.PICOSCount.PICOSCountStep1}
						onToggle={() => handleSubStepToggle('PICOSCount', 'PICOSCountStep1')}
					/>
					<SubStep
						label="Fill up complete CTS details (Branch Code: 00066, Date: (current date), Teller Ball Stamp, Sign on RECEIVED BY portion."
						completed={stepsCompleted.PICOSCount.PICOSCountStep2}
						onToggle={() => handleSubStepToggle('PICOSCount', 'PICOSCountStep2')}
					/>
					<SubStep
						label="Give CTS to SO and ask to sign on the DELIVERED BY portion."
						completed={stepsCompleted.PICOSCount.PICOSCountStep3}
						onToggle={() => handleSubStepToggle('PICOSCount', 'PICOSCountStep3')}
					/>
					<Button
						disabled={!Object.values(stepsCompleted.PICOSCount).every(step => step)}
						onClick={handleNextStep}
					>
						Next
					</Button>
				</MainStep>
			)}

			{start && currentStep === 2 && (
				<MainStep
					label="OPEN TILL"
					completed={Object.values(stepsCompleted.OpenTill).every(step => step)}
					onToggle={() => handleMainStepToggle('OpenTill')}
				>
					<SubStep
						label="Wait for the instruction from officer if branch open has been done."
						completed={stepsCompleted.OpenTill.OpenTillStep1}
						onToggle={() => handleSubStepToggle('OpenTill', 'OpenTillStep1')}
					/>
					<SubStep
						label="Click the T4S icon, input user id and password."
						completed={stepsCompleted.OpenTill.OpenTillStep2}
						onToggle={() => handleSubStepToggle('OpenTill', 'OpenTillStep2')}
					/>
					<SubStep
						label="On start of day screen, check effective date (should be the current date). All beginning cash must be zero."
						completed={stepsCompleted.OpenTill.OpenTillStep3}
						onToggle={() => handleSubStepToggle('OpenTill', 'OpenTillStep3')}
					/>
					<SubStep
						label="Click 0K and request for override. ('SO override please Open Till')."
						completed={stepsCompleted.OpenTill.OpenTillStep4}
						onToggle={() => handleSubStepToggle('OpenTill', 'OpenTillStep4')}
					/>
					<SubStep
						label="Print Open Till Report."
						completed={stepsCompleted.OpenTill.OpenTillStep5}
						onToggle={() => handleSubStepToggle('OpenTill', 'OpenTillStep5')}
					/>
					<SubStep
						label="CSA to sign on Open Till Report print out."
						completed={stepsCompleted.OpenTill.OpenTillStep6}
						onToggle={() => handleSubStepToggle('OpenTill', 'OpenTillStep6')}
					/>
					<SubStep
						label="Ask SO to approve Open Till validation. ('SO pa-approve')"
						completed={stepsCompleted.OpenTill.OpenTillStep7}
						onToggle={() => handleSubStepToggle('OpenTill', 'OpenTillStep7')}
					/>
					<Button
						disabled={!Object.values(stepsCompleted.OpenTill).every(step => step)}
						onClick={handleNextStep}
					>
						Next
					</Button>
				</MainStep>
			)}

			{start && currentStep === 3 && (
				<MainStep
					label="CTS VALIDATION"
					completed={Object.values(stepsCompleted.CTSValidation).every(step => step)}
					onToggle={() => handleMainStepToggle('CTSValidation')}
				>
					<SubStep
						label="Select: Control —> Financial —> Cash Transfer In"
						completed={stepsCompleted.CTSValidation.CTSValidationStep1}
						onToggle={() => handleSubStepToggle('CTSValidation', 'CTSValidationStep1')}
					/>
					<SubStep
						label="Input: Amount (Grand Total)"
						completed={stepsCompleted.CTSValidation.CTSValidationStep2}
						onToggle={() => handleSubStepToggle('CTSValidation', 'CTSValidationStep2')}
					/>
					<SubStep
						label="Input: From TELLER and FROM TILL: 1"
						completed={stepsCompleted.CTSValidation.CTSValidationStep3}
						onToggle={() => handleSubStepToggle('CTSValidation', 'CTSValidationStep3')}
					/>
					<SubStep
						label="Click OK"
						completed={stepsCompleted.CTSValidation.CTSValidationStep4}
						onToggle={() => handleSubStepToggle('CTSValidation', 'CTSValidationStep4')}
					/>
					<SubStep
						label="Validate YELLOW copy of Cash Transfer Slip."
						completed={stepsCompleted.CTSValidation.CTSValidationStep5}
						onToggle={() => handleSubStepToggle('CTSValidation', 'CTSValidationStep5')}
					/>
					<SubStep
						label="Vouch transaction slip, CSA to sign beside
Host Accepted."
						completed={stepsCompleted.CTSValidation.CTSValidationStep6}
						onToggle={() => handleSubStepToggle('CTSValidation', 'CTSValidationStep6')}
					/>
					<SubStep
						label="Set aside CTS slip and open till report."
						completed={stepsCompleted.CTSValidation.CTSValidationStep7}
						onToggle={() => handleSubStepToggle('CTSValidation', 'CTSValidationStep7')}
					/>
					<Button
						disabled={!Object.values(stepsCompleted.CTSValidation).every(step => step)}
						onClick={handleNextStep}
					>
						Next
					</Button>
				</MainStep>
			)}
		</div>
	);
}

const MainStep = ({ label, completed, children }) => {
	return (
		<div className="flex flex-col mb-4 gap-y-3">
			<h2 className={`text-xl font-bold text-blue-600 ${completed && " line-through !text-green-600"}`}>{label}</h2>
			{children}
		</div >
	);
}

const SubStep = ({ label, completed, onToggle }) => {
	return (
		<div className="flex space-x-3">
			<input
				type="checkbox"
				id={label.replace(/\s+/g, '-').toLowerCase()} // Generate an id based on the label
				checked={completed}
				onChange={onToggle}
			/>
			<label htmlFor={label.replace(/\s+/g, '-').toLowerCase()} className='cursor-pointer'>{label}</label>
		</div>
	);
};


export default StartDay;


