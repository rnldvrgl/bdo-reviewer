'use client'

import EndDayBalancing from '@/components/EndDayBalancing';
import StartDay from '@/components/StartDay';
import TransactionsList from '@/components/TransactionsList';
import { useState } from 'react';

export default function Home() {
  const [startDayCompleted, setStartDayCompleted] = useState(true);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [dayCompleted, setDayCompleted] = useState(false);
  const [endDayCompleted, setEndDayCompleted] = useState(false);

  const handleTransactionClick = (transactionName) => {
    if (selectedTransaction === transactionName) {
      setSelectedTransaction(null); // Deselect if already selected
    } else {
      setSelectedTransaction(transactionName);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="p-8 bg-gray-100 rounded-lg shadow-md">
        {startDayCompleted ? (
          dayCompleted ? (
            endDayCompleted ? (
              <div>End of day completed.</div>
            ) : (
              <EndDayBalancing setEndDayCompleted={setEndDayCompleted} />
            )
          ) : (
            <TransactionsList
              handleTransactionClick={handleTransactionClick}
              selectedTransaction={selectedTransaction}
              setDayCompleted={setDayCompleted}
            />
          )
        ) : (
          <StartDay setStartDayCompleted={setStartDayCompleted} />
        )}
      </div>
    </main>
  );
}
