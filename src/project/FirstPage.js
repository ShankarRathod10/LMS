import React, { useState } from "react";
import SignIn from "./SignIn";
import { useNavigate } from "react-router-dom";

function FirstPage() {
  const [showSignIn, setShowSignIn] = useState(false);
  const navigate = useNavigate();

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  return (
    <div className="container">
      {/* ... Existing code ... */}
      <button
        className="btn btn-primary"
        onClick={handleSignInClick}
        style={{
          marginTop: "20px",
          width: "250px",
          height: "50px",
          backgroundColor: "Highlight",
          cursor: "pointer",
        }}
      >
        Sign In
      </button>

      {showSignIn && <SignIn />}

      {<div className="container" >
                <div className="row" style={{ position: "fixed", width: "84%" }}>
                    <div className="col-sm-6 text-center mt-3" style={{ position: "realtive" }}>
                        <div>
                            <img src="https://lms.digital-lync.com/assets/logo.ab024049.png" />
                        </div>
                        <div className="" style={{ marginTop: "120px" }} >
                            <h2 className="text-3xl cpitalize text-gray-500">Welcome</h2>
                            <p className="pt-4 text-gray-500">Please sign in to your account below</p>
                            <button className="btn btn-primary" onClick={()=> SignIn} style={{ marginTop: "20px", width: "250px", height: "50px", backgroundColor: "Highlight", cursor: "pointer,bluecd" }}>Sign In</button>
                        </div>
                    </div>
                    <div className="col-sm-6" >
                        <div style={{}}>
                            <img src="https://lms.digital-lync.com/assets/illustration-login.a3c562cb.jpg" className="mb-5" style={{ width: "700px", height: "643px", marginLeft: "-30px", marginRight: "5px", marginTop: "0px", marginBottom: "0px" }} />
                        </div>
                        <div style={{ position: "fixed", right: "-40px", left: " 1200px", top: "600px" }}>

                            <button className=" sticky-top btn btn-" style={{ borderRadius: " 40px 50px 0 50px", width: "150px", height: "80px", backgroundColor: "blueviolet", color: "white", marginTop: "-100px", marginLeft: "-100px" }} >
                                How Can I Help You ?
                                <span className="circle" style={{ backgroundColor: "white", height: "20px", borderRadius: "100px", marginLeft: "-5px" }}></span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>}
    </div>
  );
}

export default FirstPage;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // import SignIn from "./SignIn";
    // import { useNavigate } from "react-router-dom";

    // function FirstPage() {
        
    //     return (
    //         <div className="container" >
    //             <div className="row" style={{ position: "fixed", width: "84%" }}>
    //                 <div className="col-sm-6 text-center mt-3" style={{ position: "realtive" }}>
    //                     <div>
    //                         <img src="https://lms.digital-lync.com/assets/logo.ab024049.png" />
    //                     </div>
    //                     <div className="" style={{ marginTop: "120px" }} >
    //                         <h2 className="text-3xl cpitalize text-gray-500">Welcome</h2>
    //                         <p className="pt-4 text-gray-500">Please sign in to your account below</p>
    //                         <button className="btn btn-primary" onClick={()=> SignIn} style={{ marginTop: "20px", width: "250px", height: "50px", backgroundColor: "Highlight", cursor: "pointer,bluecd" }}>Sign In</button>
    //                     </div>
    //                 </div>
    //                 <div className="col-sm-6" >
    //                     <div style={{}}>
    //                         <img src="https://lms.digital-lync.com/assets/illustration-login.a3c562cb.jpg" className="mb-5" style={{ width: "700px", height: "643px", marginLeft: "-30px", marginRight: "5px", marginTop: "0px", marginBottom: "0px" }} />
    //                     </div>
    //                     <div style={{ position: "fixed", right: "-40px", left: " 1200px", top: "600px" }}>

    //                         <button className=" sticky-top btn btn-" style={{ borderRadius: " 40px 50px 0 50px", width: "150px", height: "80px", backgroundColor: "blueviolet", color: "white", marginTop: "-100px", marginLeft: "-100px" }} >
    //                             How Can I Help You ?
    //                             <span className="circle" style={{ backgroundColor: "white", height: "20px", borderRadius: "100px", marginLeft: "-5px" }}></span>
    //                         </button>

    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    // export default FirstPage;