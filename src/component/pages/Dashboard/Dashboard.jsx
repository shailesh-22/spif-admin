
import Header from '../../Sidebar/Header'
import Menu2 from '../../Sidebar/Menu2'




const Dasboard = () => {

  return (

    <div>
      <div className='header'>
       
      <Header/> 
    
      <Menu2/>
      </div>
      <div className="content-wrapper" >


        {/* Content Header (Page header) */}

        <div className='container' >
         
       
        <div className='container'>
            <img src="data:image/png;base64,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" alt="logo"  />
          </div>
          </div> 
          <div>
            <h3>Welcome Administrator. </h3><br />

              {/* <p>Your Gateway to be a Champion by Knowing and leveraging you purpose, Passion & potential leading you to the path of maximum effectiveness and fulfilment in your endeavors.</p> */}
         


          <div className="container-fluid">
            <div className="row mb-2">
            
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Dash</h1>
              </div>
             
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><div>Home</div></li>
                  <li className="breadcrumb-item active">Dashboard v1</li>
                </ol>
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        
        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>150</h3>
                    <p>New Orders</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                  <div className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></div>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>53<sup style={{ fontSize: 20 }}>%</sup></h3>
                    <p>Bounce Rate</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars" />
                  </div>
                  <div className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></div>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>44</h3>
                    <p>User Registrations</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add" />
                  </div>
                  <div className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></div>
                </div>
              </div>
            
              <div className="col-lg-3 col-6">
              
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>65</h3>
                    <p>Unique Visitors</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-pie-graph" />
                  </div>
                  <div className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

  )
}

export default Dasboard