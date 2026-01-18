// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-midnight via-steel to-midnight overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gold rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold/50 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="text-center relative z-10">
        {/* Sun/Solar loader */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          {/* Outer rays */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-0 left-1/2 w-1 h-6 -ml-0.5 bg-gradient-to-t from-gold to-transparent rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 w-1 h-6 -ml-0.5 bg-gradient-to-b from-gold to-transparent rounded-full"></div>
            <div className="absolute left-0 top-1/2 h-1 w-6 -mt-0.5 bg-gradient-to-l from-gold to-transparent rounded-full"></div>
            <div className="absolute right-0 top-1/2 h-1 w-6 -mt-0.5 bg-gradient-to-r from-gold to-transparent rounded-full"></div>
          </div>
          {/* Middle ring */}
          <div className="absolute inset-2 border-4 border-gold/40 rounded-full animate-ping"></div>
          {/* Inner circle */}
          <div className="absolute inset-4 bg-gradient-to-br from-gold via-yellow-500 to-yellow-600 rounded-full shadow-lg shadow-gold/50 animate-pulse"></div>
        </div>
        
        <h3 className="text-pearl text-xl font-bold mb-2">Vajra Renew</h3>
        <p className="text-gold text-sm font-semibold">Powering your future...</p>
      </div>
    </div>
  );
}