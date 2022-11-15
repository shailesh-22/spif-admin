
import './App.css';
import { BrowserRouter as Router , NavLink, Route , Switch } from 'react-router-dom'
import Accounts from './component/pages/Manage-Account/Accounts';
import Statements from './component/pages/Settings/Statements';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup'
import Dashboard from './component/pages/Dashboard/Dashboard';
import Clients from './component/pages/Manage-Account/Clients';
import ImportExport from './component/pages/Manage-Account/ImportExport';
import Report from './component/pages/Reports/Report';
import Register from './component/Registration/Register'
import Register2 from './component/Registration/Register2'
import Register3 from './component/Registration/Register3'
import Header3 from './component/Sidebar/Header3';
import Menu2 from './component/Sidebar/Menu2';
import AdminStatement from './component/pages/Assessment/Admin-Statement/AdminStatement/AdminStatement'
import TestResult from './component/pages/Assessment/Assessment-Test/TestCompletionPage/TestResult/TestResult'
import AssessmentTest from './component/pages/Assessment/Assessment-Test/MainAssesment/AssessmentTest'
import TermsConditions from './component/pages/Assessment/Assessment-Test/Terms & Condions/TermsConditions'
import CertificationPage from './component/pages/Assessment/Assessment-Test/TestCompletionPage/Certification/CertificationPage'




function App() {

  const user = localStorage.getItem("token");

  return (
    <Router>

      <div >

          {/* <Home/> */}
     

        <Switch>
            
        <Route exact path="/">
            <Login/>
          </Route>
          
          <Route path="/register">
            <Register/>
          </Route>

          <Route path="/register2">
            <Register2/>
          </Route>
           
          <Route path="/register3">
            <Register3/>
          </Route>

          <Route path="/dashboard">
            <Dashboard/>
          </Route>

          <Route path="/accounts">
            <Accounts/>
          </Route>

          <Route path="/assessment-test">
            <AssessmentTest/>
          </Route>

          
          <Route path="/terms_conditions">
            <TermsConditions/>
          </Route>
           
          <Route path="/admin-statement">
            <AdminStatement/>
          </Route>

          <Route path="/dashboard">
            <Dashboard/>
          </Route>

          <Route path="/statements">
            <Statements/>
          </Route>
              
          <Route path="/signup">
            <Signup/>
          </Route>

          <Route path="/clients">
            <Clients/>
          </Route>

          <Route path="/import-export">
            <ImportExport/>
          </Route>

          <Route path="/reports">
            <Report/>
          </Route>

          <Route path="/test-result">
            <TestResult/>
          </Route>

          <Route path="/certification-page">
            <CertificationPage/>
          </Route>

          

        {user &&  <Route path="/header3">
            <Header3/>
          </Route>}

          <Route path="/header3">
           <NavLink replace to="/" />
          </Route>


          <Route path="/menu2">
            <Menu2/>
          </Route>

    </Switch>

        {/* <Dashboard/>
        <Footer/> */}

      </div>
    </Router>
  );
}

export default App;
