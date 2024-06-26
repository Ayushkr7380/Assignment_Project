import { useState } from 'react'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import './InstaBasic.css'


function InstaBasic(){
    const [currentPage,setCurrentPage] = useState(true)  //true => Set to SignUp Page // False => Set to SignIn page

  function PageShow(){
    if(currentPage == true){
      return <SignUp setCurrentPage={setCurrentPage}/>
    }
    else{
      return <SignIn setCurrentPage={setCurrentPage}/>
    }
  }

  return (
    <div id='instabasic'>
        <div id="image">
            <img src="src/Components/InstaBasic/loggooo.png" alt="" />
        </div>
      {PageShow()}
    </div>
  )
}

export default InstaBasic