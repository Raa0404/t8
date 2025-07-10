import React from 'react';

export default function Phase3({ onBack }) {
  const dummyData = {
    cifId: 'CIF001',
    numberOfAccounts: 2,
    npaDate: '15/01/2023',
    npaCategory: 'Doubtful',
    cifOutstanding: '₹2,00,000',
    principalOutstanding: '₹1,50,000',
    notionalDues: '₹2,20,000',
    writeOff: '₹20,000',
    waiver: '₹15,000',
    sacrifice: '₹35,000',
    minimumSettlement: '₹1,85,000',
  };

  return (
    <div className="min-h-screen bg-orange-100 p-6 text-gray-800">
      <div className="flex justify-between mb-4">
        <button onClick={onBack} className="bg-gray-600 text-white px-4 py-2 rounded">Back</button>
        <div className="text-red-600 font-bold">© P.Raa</div>
      </div>

      <h2 className="text-2xl font-bold mb-2">CIF ID: {dummyData.cifId}</h2>
      <p><strong>Number of Accounts:</strong> {dummyData.numberOfAccounts}</p>
      <p><strong>NPA Date:</strong> {dummyData.npaDate}</p>
      <p><strong>NPA Category:</strong> {dummyData.npaCategory}</p>

      <div className="bg-white shadow p-4 mt-4 rounded space-y-2">
        <p><strong>CIF CURRENT O/S:</strong> {dummyData.cifOutstanding}</p>
        <p><strong>CIF PRINCIPAL O/S:</strong> {dummyData.principalOutstanding}</p>
        <p><strong>NOTIONAL DUES:</strong> {dummyData.notionalDues}</p>
        <p><strong>WRITE OFF:</strong> {dummyData.writeOff}</p>
        <p><strong>WAIVER:</strong> {dummyData.waiver}</p>
        <p><strong>SACRIFICE:</strong> {dummyData.sacrifice}</p>
        <p><strong>MINIMUM COMPROMISE AMOUNT:</strong> {dummyData.minimumSettlement}</p>
      </div>

      <button
        className="mt-6 bg-green-600 text-white px-4 py-2 rounded"
        onClick={onBack}
      >
        Finish
      </button>
    </div>
  );
}