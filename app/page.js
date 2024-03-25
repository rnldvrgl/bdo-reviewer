'use client'

import EndDayBalancing from '@/components/EndDayBalancing';
import StartDay from '@/components/StartDay';
import TransactionsList from '@/components/TransactionsList';
import CompletedAll from '@/components/CompletedAll';
import { useState } from 'react';

export default function Home() {
  const [startDayCompleted, setStartDayCompleted] = useState(true);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [dayCompleted, setDayCompleted] = useState(true);
  const [endDayCompleted, setEndDayCompleted] = useState(true);

  const handleTransactionClick = (transactionName) => {
    if (selectedTransaction === transactionName) {
      setSelectedTransaction(null);
    } else {
      setSelectedTransaction(transactionName);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-[90vh]">
      <div className="p-8 bg-gray-100 rounded-lg shadow-md">
        {startDayCompleted ? (
          dayCompleted ? (
            endDayCompleted ? (
              <CompletedAll setDayCompleted={setDayCompleted} setEndDayCompleted={setEndDayCompleted} setStartDayCompleted={setStartDayCompleted} setSelectedTransaction={setSelectedTransaction} />
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
