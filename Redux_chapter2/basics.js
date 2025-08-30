// 1) Redux -> Redux ek state management library hai jo React ke sath (ya kisi bhi JS app ke sath) use hota hai.
// 2) React me choti app ke liye state ko useState aur useContext se handle kar sakte hai.
// 3) But agar app badi hai (bohot saare components, deeply nested states), tab state ko ek jagah store karke global access karna easy hota hai → yahi Redux ka kaam hai.


// redux -> state lifting , prop drilling and context api -> karne ko mana karta hai -> and bolta hai use state mgmt by redux
// redux bolta hai kisi bhi state ya object ko create karo in a global one (store) i.e. -> ---- redux store ---- -> store ka access sabke pass hoga -> component ke ander state ni banao
// so state lifting , prop drilling ki jarurat ni hai ab -> globally create karo in a global file (store) -> so sabke liye accessable ho


// ------------------REDUX BASICS-----------------------------------------------------------------------


                                                              // (components)                       
     
             //////STORE//////                                     parent
            //  count = 0  //   <- anyone can access it           //    //
//Reducer ->// fun inc(){} //                                 child1    child2           
//Reducer ->// fun dec(){} //                                  //         // 
            /////////////////                              subchild1       subchild2
                                                              //                // 
                                                        // suchild11            subchild21    
   
                                                        
// Store -> redux bolta hai kisi bhi state ya object ko create karo in a global one (store) i.e. -> ---- redux store ---- -> store ka access sabke pass hoga -> component ke ander state ni banao
// Reducers -> functions are reducers -> ki users function(reducers ko bolegai) -> and ye change kardengai in store 
// Dispatch(hook)  dispatch(dec()) -> help karta hai ki function call hoyegi toh -> ( call ko store tk lejana ) -> example ki onclick kare and dec karna hai so write -> dispatch(dec()) -> and function call execute hojayega jo function store pe likha hoyega use    
// **** Slice -> slice is providing a solution -> divide the store in multiple stores and give them seperate name -> slice1 slice2 and so on -> so ab dispatch pe sath slice bhi ayega ki konse slice pe jana hai
// slice name must be unique -> so confusion ni rahegi ab


// -------------------------------------------------------------------------------------------------------------------------------------------------


// **** basically dont write logics in -> parent child subchild -> write logics in global (store) -> ki sab use kar shake logics ko -> because bohot sare users(parent , child , subchild) hai so sabko same work karna hai agar inc dec so sab kyu logi likhe -> logic 1 jagay pe likho in global file (store)                                                       
//  parent child subchild (components) -> call karegai only functions <- inc dec function so store mai sab manage hojayega
//  parent child subchild (components) -> agar ye khud ke inc dec functions likhe gai and kisi se galti hogi so changes karne mai time lagega -> so create store
//  **** parent child subchild (components) -> in sab ko direct access ni dena hai count ka ki koi khud direct change ni kar shke -> means ki child ne alag code likha for inc in recursive worst approach and kisi ne acha code likha so -> in store logics likhe hongai sirf -> parent child subchild -> function call karegai bs -> these functions are reducers
// **** Reducers -> functions are reducers -> ki users function(reducers ko bolegai) -> and ye change kardengai in store 


// Dispatch(hook)  dispatch(dec()) -> help karta hai ki function call hoyegi toh -> call ko store tk lejana -> example ki onclick kare and dec karna hai so write -> dispatch(dec()) -> and function call execute hojayega jo function store pe likha hoyega use
// function direct call ni kar shakte -> store pe define rehte hai so function call kare -> dispatch hoga store tk jayega and function execute hojayega in store 




// **** ex -> 1 insaan puri website ka fronted ni bana shakta -> and suppose kisi component (child2) ko -> state(signin signout etc) banana hai so wo kaha banayega in store -> suppose 2 are there child1 and child2 dono ko same naam rakhna hai state ka kyuki inko dushre ka pata ni hai ki kya naam rakhe hai -> so same name rakh diya state variable ka so dikat hogi na 2 2 count hogaye in -> store -> confuse ki kisme changes kare -> kyuki 2 state same name ke ban gaye -> so time waste hoyega agar mai check karu kisne kya state variable banaya hai or mai wo naam ni du apne state variable ka -> or na same ka function name use kar shakta -> dikkat hai na ye bhi kuch ka kuch mai change hojayega -> same name ke function ya same name ke state se    

 //////////////STORE////////////
//         count = 0          //
//                            //
//        fun inc(){          //                       
//          count+1           //
//         }                  // 
//                            // 
//        fun dec(){          //                       
//          count-1           //
//         }                  //        <- **** agar kisi ne call kari dispatch(inc()) so kiske pass jaye call ab 2 2 same name ke hai toh confuse hogaya store ki kisko cal karao
//                            //               so same name ke ni banao -> na function na state 
//        fun inc(){          //                       
//          count+2           //
//         }                  // 
//                            // 
//        fun dec(){          //                       
//          count-2           //
//         }                  // 
////////////////////////////////

// **** Slice -> slice is providing a solution -> divide the store in multiple stores and give them seperate name -> slice1 slice2 and so on -> so ab dispatch pe sath slice bhi ayega ki konse slice pe jana hai
// **** Slice name must be unique -> so confusion ni rahegi ab -> so ab issue ni hai jisko same name ka state function banana hai bana do and use -> chinta bs ye hai ki slice name must be unique
// **** and har slice banane wale ko pata hoga ki -> meri slice pe koi same name ke variable state ni hai and same maintinaed in each slice 
    
               //////STORE//////
               //             // 
               //    slice1   // 
               //             // 
               /////////////////
               //             //
               //    slice2   //       <- dispatch(inc()) slice2 pe jao -> ki slice2 pe jao and inc karo
               //             // 
               /////////////////
               //             // 
               //    slice3   // 
               //             // 
               /////////////////
               //             //
               //    slice4   // 
               //             //
               /////////////////


          

// Redux Toolkit -> ek modern, simplified version of Redux hai. Ye boilerplate hata deta hai aur likhna easy banata hai.
// Features:
// createSlice() → Reducer + Actions ek hi jagah likh sakte ho.
// configureStore() → Store setup simple.
// Mutations likhne ki permission (internally Immer use hota hai).





// redux and redux toolkit are different  -> install both  -> npm i react-redux @reduxjs/toolkit


// ******* slice banao then store banake (global file) -> slice ko count pe daldo
