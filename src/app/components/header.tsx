import react from 'react';


export default function Header() {
  return (
    <header className="flex justify-between p-12 bg-custom-light-grey">
      <div>
        <img src="/path/to/logo.png" alt="Logo" className="h-10" />
      </div>
      <div className="flex gap-4">
            <button
            className="text-sm font-medium text-black px-10 py-4"    
            >Log In</button>
            <button
            className="text-sm font-medium border border-black text-black px-10 py-4 rounded-sm"    
            >Sign Up</button>
      </div>
    </header>
  )
}