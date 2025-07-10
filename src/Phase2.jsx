import React, { useState } from 'react';

const sampleAccounts = [
  {
    accountNumber: '1234567890',
    cifId: 'CIF001',
    borrowerName: 'Rajesh Kumar',
    npaDate: '2023-01-15',
    npaCategory: 'Doubtful',
  },
  {
    accountNumber: '1234567891',
    cifId: 'CIF001',
    borrowerName: 'Rajesh Kumar',
    npaDate: '2023-01-15',
    npaCategory: 'Doubtful',
  },
  {
    accountNumber: '9876543210',
    cifId: 'CIF002',
    borrowerName: 'Suman Singh',
    npaDate: '2022-11-10',
    npaCategory: 'Loss',
  }
];

export default function Phase2({ solId, userName, onBack, onProceed }) {
  const [accountNumber, setAccountNumber] = useState('');
  const [filteredAccounts, setFilteredAccounts] = useState([]);

  const handleSearch = () => {
    const match = sampleAccounts.find(acc => acc.accountNumber === accountNumber);
    if (match) {
      const related = sampleAccounts.filter(acc => acc.cifId === match.cifId);
      setFilteredAccounts(related);
    } else {
      setFilteredAccounts([]);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-100 p-6">
      <div className="flex justify-between">
        <button onClick={onBack} className="bg-gray-500 text-white px-3 py-1 rounded">Back</button>
        <div className="text-orange-600 font-bold">© P.Raa</div>
      </div>
      <h2 className="text-xl font-bold mt-4">Hello, {userName} (SOL: {solId})</h2>

      <input
        className="border p-2 rounded mt-6 w-full"
        placeholder="Enter Account Number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="mt-2 bg-orange-600 text-white px-4 py-2 rounded"
      >
        Search
      </button>

      {filteredAccounts.length > 0 && (
        <div className="mt-6 bg-white rounded shadow p-4">
          <h3 className="text-lg font-bold mb-2">Accounts under CIF {filteredAccounts[0].cifId}:</h3>
          <ul>
            {filteredAccounts.map((acc, idx) => (
              <li key={idx} className="border-b py-2">
                <p><strong>Account Number:</strong> {acc.accountNumber}</p>
                <p><strong>Borrower Name:</strong> {acc.borrowerName}</p>
                <p><strong>NPA Date:</strong> {new Date(acc.npaDate).toLocaleDateString('en-GB')}</p>
                <p><strong>NPA Category:</strong> {acc.npaCategory}</p>
              </li>
            ))}
          </ul>
          <button
            onClick={onProceed}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
          >
            Proceed
          </button>
        </div>
      )}

      {filteredAccounts.length === 0 && accountNumber && (
        <p className="mt-6 text-red-600">No matching accounts found.</p>
      )}
    </div>
  );
}