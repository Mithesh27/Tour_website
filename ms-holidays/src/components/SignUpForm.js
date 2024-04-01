import "./ContactFormStyles.css"


function SignUpForm(){
    return(
        <div className="from-container">
            <h1>User Registration</h1>
            <form>
                <input placeholder="UserName"/>
                <input placeholder="Email"/>
                <input placeholder="Password"/>
                {/* <textarea placeholder="Message" rows="4"></textarea> */}
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm;