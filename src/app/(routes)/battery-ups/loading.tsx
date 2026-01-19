/**
 * Battery & UPS Loading State
 * 
 * Loading component shown while battery pages are loading
 * Displays animated battery icon
 * 
 * @loading
 */

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Battery Icon */}
        <div className="w-20 h-20 mx-auto mb-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg animate-pulse"></div>
          <div className="absolute inset-2 bg-white rounded"></div>
          <div className="absolute bottom-2 left-2 right-2 h-1/3 bg-gradient-to-r from-orange-500 to-amber-500"></div>
        </div>
        
        <p className="text-midnight font-medium text-lg">Loading Battery Solutions...</p>
        <p className="text-slate text-sm mt-1">Please wait</p>
        
        {/* Loading dots */}
        <div className="flex justify-center gap-1 mt-3">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}