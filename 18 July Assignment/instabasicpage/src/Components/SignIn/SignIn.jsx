import './SignIn.css'
function SignIn({setCurrentPage}){
    return(
        <div id="signinbody">
            <div id="from">
                <form>
                    <input
                        type="text"
                        placeholder="Phone number , username , or email"
                    />
                    <input
                        type="text"
                        placeholder="Password"
                    />
                    <button type='submit' className="btn btn-primary">Sign In</button>
                </form>
            </div>
            <p>have an account? <span onClick={()=>setCurrentPage(true)}>SignUp</span></p>
        </div>
            
    )
}
export default SignIn