import { SHA256 } from 'crypto-js';
import './App.css';

function App() {
  const emailHash = SHA256('elpashevs@bk.ru');
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="bg-gradient-to-r from-[#f8a5c2] to-[#ea8685] animate-gradientAnim inset-0 absolute bg-[length:200%_200%]"></div>
      </div>
      <div className="relative z-10 p-6 shadow-lg bg-[#786fa6] md:h-[500px] md:w-[1000px] rounded-[50px] w-[300px] h-[400px]">
        <img src={`https://gravatar.com/avatar/${emailHash}?s=2100`} alt="avatar" className="rounded-full" />
      </div>
    </div>
  );
}

export default App;
