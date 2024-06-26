import './SignUp.css'
function SignUp({setCurrentPage}){
    return (
        <div id="signupbody">
            <div id="from">
                <form>
                    <input 
                        type="text"
                        placeholder="Mobile Number or Email"
                     />
                    <input 
                        type="text"
                        placeholder="Full Name" 
                    />
                    <input
                        type="text"
                        placeholder="Phone number , username , or email"
                    />
                    <input
                        type="text"
                        placeholder="Password"
                    />
                    <button type='submit' className="btn btn-primary">Sign up</button>
                </form>
            </div>
            <p>have an account? <span onClick={()=>setCurrentPage(false)}>SignIn</span></p>
        </div>
    )
}
export default SignUp