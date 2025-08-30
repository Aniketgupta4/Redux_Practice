//  workflow


// ----------------- Redux Counter Button Workflow ---------------------------

// 1) Slice (slicer1.js)

// Reducer + Actions (increment, decrement) define hote hain.

// Ye state ko update karne ka logic rakhta hai.

// 2) Store (store.js)

// configureStore se ek global store banta hai.

// Slices ko store me register kar diya jata hai.

// 3) Provider (script.js)

// Store ko <Provider> ke through React app ke saare components ko access diya jata hai.

// 4) Component (counting.js)

// useSelector → Store se current state (count value) read karta hai.

// useDispatch → Button click hone par action (increment / decrement) bhejta hai.

// 5) Flow of Action

// Button click → dispatch(action)

// Action → Reducer (slicer1.js) me jata hai

// Reducer state update karta hai → Store update hota hai

// Store update → React component re-render hota hai → UI me naya count dikhata hai




// 👉 Ek line me:
// Button → Dispatch Action → Reducer Logic → Store Update → UI Re-render