// --------- api handling in redux -----------
//      
//        fetch ->  1) Pending  2) fulfill  3) Rejected 
//        
//              
//                 Example: Github user: 
//
//
//       ////FETCH////               // States                                    
//       // Pending //
//       // fulfill //   ->       Data:    Fullfill 
//       // Rejected //           Loading: Pending
//       //////////////           Error:   rejected
// 
// 
//            
//              Request:  1) **** globally(createAsyncThunk -> fetchdata()) -> fetch always globally -> so use -> createAsyncThunk -> data ko globally fetch kariye and bohot sare dispatch likhne ki jaruruat ni hai mai apne se sab handle kar lunga by 1 function ap usko call kar dena bs i.e. -> fetchdata()
//                        2) locally
// 
// 
//           2) ------ locally req (not a best approach -> b/c local ke baad global pe update karna hoga and -> kisi or ko bhi data fetch karna hua so same code likhna padega -> so global banao) -----
// 
//      ->    function fetchuser(){
//                  
//               useeffect(async()=>{
// 
//                      dispatch(loadingdata(true))
// 
//                    try{
//                        const res = await fetch("github user data")
//                         const da = await res.json()
//                          dispatch(updatedata(da))
//                      }catch(err){
//                        dispatch(errordata("error"))
//                        }
//                      })
// 
//            
// 
//            1) **** globally(createAsyncThunk -> fetchdata()) -> fetch always globally -> so use -> createAsyncThunk -> data ko globally fetch kariye and bohot sare dispatch likhne ki jaruruat ni hai mai apne se sab handle kar lunga by 1 function ap usko call kar dena bs i.e. -> fetchdata()
// 
// 
//              //////STORE//////        
//              //             //
//              //             //     dispatch(inc)
//              //             //           |
//              /////////////////         action:-> type : slicename/fucntionname and payload:argument
// 
// 
//              -> **** these all things action slicname parload manage by createasyncthunk   
// 
// 
// 
//   ---------- conclusion ------------
// 
// ***********extrareducers(pe is baar data hai async data): jaruri ni hai ki slice mention ho(galat chiz hai kya -> sabke(slices) pass jayegi so ise acha mention kar dete slice ka naam istead of this "Coin/fetch" -> **** ye error ni hai redux ne kiya hai no issue is their -> in big companies and projects particular slice is for fetch data , show data and all -> so isi liye har slice pe data send karte hai -> type match hoyega and wo slice use kar lega info ko)
// dispatch({type:'coin/fetch/pending',payload:undefined}) 
// jab dispatch hota hai -> so slicer ka naam ni hai kiske pass jana hai -> so agae bohot sari slicer hai so sabse pass bhej deta hai -> jisko chaiye hoga wo use kar lega type match hoga tab use karega wo
// 
//
//     -> see in conclusion image (inke -> actions match hongai)
// 1) {type:'coin/fetch/pending' , payload:undefined}
// 2) {type:'coin/fetch/fulfilled' , payload:data}
// 3) {type:'coin/fetch/rejected' , payload:error.message}
//
//
//
//
//
//  