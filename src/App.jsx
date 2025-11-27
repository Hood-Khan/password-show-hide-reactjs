// import React, { useState } from 'react'

// function App() {
//   const [password, setPassword] = useState("");
//   const [ispass, setIspass] = useState(true);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-200">
//       <div className="bg-gray-200 p-10 rounded-3xl shadow-[8px_8px_20px_#b8b8b8,-8px_-8px_20px_#ffffff]">
//         <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">
//           Show and Hide Password
//         </h2>

//         <div className="flex flex-col gap-4">
//           <input
//             type={ispass ? 'password' : 'text'}
//             value={password}
//             placeholder="Enter password"
//             onChange={(e) => setPassword(e.target.value)}
//             className="px-4 py-3 w-72 rounded-xl bg-gray-200 text-gray-700 
//             shadow-[inset_6px_6px_12px_#b8b8b8,inset_-6px_-6px_12px_#ffffff] 
//             focus:outline-none"
//           />

//           <button
//             onClick={() => setIspass(!ispass)}
//             className="px-4 py-3 rounded-xl font-semibold text-gray-700 
//             bg-gray-200 shadow-[6px_6px_12px_#b8b8b8,-6px_-6px_12px_#ffffff]
//             active:shadow-[inset_6px_6px_12px_#b8b8b8,inset_-6px_-6px_12px_#ffffff]
//             transition-all duration-200"
//           >
//             {ispass ? 'Show Password' : 'Hide Password'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react'

// function App() {
//   const [password, setPassword] = useState("");
//   const [ispass, setIspass] = useState(true);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-pink-200 to-blue-300">
//       <div className="p-10 rounded-3xl bg-white/40 backdrop-blur-md 
//       shadow-[8px_8px_20px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.6)]">

//         <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center drop-shadow">
//           Show and Hide Password
//         </h2>

//         <div className="flex flex-col gap-4">

//           <input
//             type={ispass ? 'password' : 'text'}
//             value={password}
//             placeholder="Enter password"
//             onChange={(e) => setPassword(e.target.value)}
//             className="px-4 py-3 w-72 rounded-xl bg-white/60 backdrop-blur-sm
//             shadow-[inset_6px_6px_12px_rgba(0,0,0,0.15),inset_-6px_-6px_12px_rgba(255,255,255,0.7)]
//             text-gray-700 focus:outline-none"
//           />

//           <button
//             onClick={() => setIspass(!ispass)}
//             className="px-4 py-3 rounded-xl font-semibold text-white 
//             bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
//             shadow-[6px_6px_12px_rgba(0,0,0,0.2),-6px_-6px_12px_rgba(255,255,255,0.6)]
//             active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.2),inset_-6px_-6px_12px_rgba(255,255,255,0.6)]
//             transition-all duration-200"
//           >
//             {ispass ? 'Show Password' : 'Hide Password'}
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [ispass, setIspass] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-pink-200 to-blue-300">
      <div className="p-10 rounded-3xl bg-white/40 backdrop-blur-md shadow-[8px_8px_20px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.6)]">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center drop-shadow">
          Show and Hide Password
        </h2>

        <div className="flex flex-col gap-4">

          {/* Wrapper ensures icon stays inside */}
          <div className="relative w-full">
            <input
              type={ispass ? "password" : "text"}
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-3 w-full pr-12 rounded-xl bg-white/60 backdrop-blur-sm
              shadow-[inset_6px_6px_12px_rgba(0,0,0,0.15),inset_-6px_-6px_12px_rgba(255,255,255,0.7)]
              text-gray-700 focus:outline-none"
            />

            {/* Password Icon inside input */}
            <button
              type="button"
              onClick={() => setIspass(!ispass)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-700 hover:text-gray-900"
            >
              {ispass ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

