import { createContext } from 'react';
import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import Transaction from './components/Transaction';
import HistoryComponent from './components/History';
import { useState } from 'react';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-bootstrap";

export const AppContext = createContext(null);
 
const  expenseArray = [];
const  incomeArray = [];
const reducer = (acc , curr) => acc + curr;
 // in js reducer is a function were it will add the array elements 

function App() {
   

    const [transBalance,setTransBalance] = useState(0);
    const [transIncome,setTransIncome] = useState(0);
    const [transExpense,setTransExpense] = useState(0);
    const [transHistory, setTransHistory] = useState([]);
    const [transAmount , setTransAmount] = useState(0);
    const [text,setText] = useState("");
   
    const handleSubmit = ()=>{
    console.log(transAmount,text);
    // console.log(typeof transAmount);//  here the amount is string type so it is somewhat difficult to do operation so to parse the string to int 
    let originalAmount = parseInt(transAmount);
        if(text===''|| transAmount===''){
           toast.error('Please enter the details');
         return ;
        }
        setTransHistory([...transHistory , 
          {text:text ,
          transAmount:transAmount
        }
      ])

     //spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.
     //const arr = [1, 2, 3];
     // const newArr = [...arr];
     // console.log(newArr); // [1, 2, 3]
      
      if(originalAmount >0){
        setTransBalance(originalAmount+transBalance);
       
        //option ==> 1 to add the income
        // setTransIncome(originalAmount+transBalance)
      
           //option ==>2 by using reducer
        incomeArray.push(originalAmount);
        setTransIncome(incomeArray.reduce(reducer,0));
      }
      else{
        setTransBalance(transBalance + originalAmount); // since the balance amount comes in - so - and - gives + as addition so we use + sign 
       
       //option ==> 1 to add the expense
        //  setTransExpense(transBalance + originalAmount)

      //option ==>2 by using reducer
      expenseArray.push(originalAmount);
      setTransExpense(expenseArray.reduce(reducer,0));
      
      }
      setText(" ") ;
      setTransAmount(0);
   }
   
   return (
    <div className="App">
      <div className='container'>
      <ToastContainer></ToastContainer>
      <AppContext.Provider value= {{transBalance,transIncome,transExpense,transHistory,text,setText,transAmount,setTransAmount,handleSubmit}}>
     <Header/>
    <br></br>
    
     <Balance/>
    <br></br>
    <hr></hr>
    <HistoryComponent/>
     <br></br>
     <hr></hr>
     <Transaction/>
      </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
