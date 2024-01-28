const Header=()=>{
    return( 
    <>
        <div>
            <div className="container-fluid text-center">NewAPI<img src="logo.png"/>Org</div>
        </div>  
        <hr/>
        <hr/>

        <div className="d-flex justify-content-center align-item-center" >
            <input className="search-bar" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Go</button>
        </div>

        <div className="row">
            <div className="col col-sm-12 col-md-4  col-lg-3"> 
                <div className="card mb-5 shadow-sm" ></div>
             
            </div>
            <div className="col col-sm-12 col-md-4  col-lg-3">
                <div className="card mb-5 shadow-sm" ></div>

            
            </div>
            <div className="col col-sm-12 col-md-4 col-lg-3">
                <div className="card mb-5 shadow-sm" ></div>
            </div>
        </div>

          
       
    
      
    
     
    </>
        
    )

}
export default Header