import { useState } from 'react'
import Toaster from './components/Toaster'
import './App.css'

function App() {
  const [isToasterVisible, setIsToasterVisible] = useState(false)

  return (
    <div className="min-h-screen">
      <div className="space-x-4">
        <button 
          onClick={() => setIsToasterVisible(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Show Toaster
        </button>
        
        <button 
          onClick={() => setIsToasterVisible(false)}
          className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Hide Toaster
        </button>
      </div>

      <Toaster 
        isVisible={isToasterVisible}
        onClose={() => setIsToasterVisible(false)}
      />
    </div>
  )
}

export default App
