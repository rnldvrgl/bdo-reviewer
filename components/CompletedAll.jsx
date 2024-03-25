import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const CompletedAll = ({ setDayCompleted, setEndDayCompleted, setStartDayCompleted, setSelectedTransaction }) => {
	return (
		<div className='grid space-y-4 place-items-center'>
			<h1 className='text-2xl font-bold text-center'>Congratulations! You&apos;ve completed all tasks successfully.</h1>
			<p className='text-lg text-center'>Take a moment to celebrate your achievements!</p>
			<Image src="/images/muddu-love.gif" alt="Muddu Love" width={300} height={300} />
			<Button onClick={() => {
				setDayCompleted(false);
				setEndDayCompleted(false);
				setStartDayCompleted(false);
				setSelectedTransaction(null);
			}}>
				Start Again
			</Button>
		</div>
	)
}

export default CompletedAll
