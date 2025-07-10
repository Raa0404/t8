import React, { useState } from 'react';
import Phase1 from './Phase1';
import Phase2 from './Phase2';
import Phase3 from './Phase3';

export default function App() {
  const [phase, setPhase] = useState(1);
  const [solId, setSolId] = useState('');
  const [userName, setUserName] = useState('');

  return (
    <>
      {phase === 1 && (
        <Phase1
          onNext={(sol, name) => {
            setSolId(sol);
            setUserName(name);
            setPhase(2);
          }}
        />
      )}
      {phase === 2 && (
        <Phase2
          solId={solId}
          userName={userName}
          onBack={() => setPhase(1)}
          onProceed={() => setPhase(3)}
          onProceed={() => setPhase(3)}
        />
      )}
      {phase === 3 && <Phase3 onBack={() => setPhase(2)} />}
    </>
  );
}