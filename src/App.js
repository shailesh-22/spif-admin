import React from 'react'
import { BrowserRouter, Route , Routes } from 'react-router-dom';

import Accounts from './component/pages/Manage-Account/Accounts';
import Statements from './component/pages/Settings/Statements';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup'
import Dashboard from './component/pages/Dashboard/Dashboard';
import Protected from './component/protectedRoutes/Protected';
import Clients from './component/pages/Manage-Account/Clients';
import ImportExport from './component/pages/Manage-Account/ImportExport';
import Report from './component/pages/Reports/Report';
import Header from './component/Sidebar/Header';
import Register3 from './component/Registration/Register3'
import Header3 from './component/Sidebar/Header3';
import Menu2 from './component/Sidebar/Menu2';
import AdminStatement from './component/pages/Assessment/Admin-Statement/AdminStatement/AdminStatement'
import TestResult from './component/pages/Assessment/Assessment-Test/TestCompletionPage/TestResult/TestResult'
import AssessmentTest from './component/pages/Assessment/Assessment-Test/MainAssesment/AssessmentTest'
import TermsConditions from './component/pages/Assessment/Assessment-Test/Terms & Condions/TermsConditions'
import CertificationPage from './component/pages/Assessment/Assessment-Test/TestCompletionPage/Certification/CertificationPage'





function App() {
  
  return (

    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={ <Signup/>} />
        <Route path="/dashboard" element={<Protected  > <Dashboard /> </Protected>} />
        <Route path="/reports" element={<Protected> <Report /> </Protected>} />
        <Route path="/header" element={<Protected> <Header/> </Protected>} />
        <Route path="/header3" element={<Protected> <Header3 /> </Protected>} />
        <Route path="/register3" element={<Protected> <Register3 /> </Protected>} />
        <Route path="/accounts" element={<Protected>  <Accounts/> </Protected>} />
        <Route path="/assessment-test" element={<Protected> <AssessmentTest/> </Protected>} />
        <Route path="/terms_conditions" element={<Protected>  <TermsConditions/> </Protected>} />
        <Route path="/admin-statement" element={<Protected> <AdminStatement/> </Protected>} />
        <Route path="/statements" element={<Protected> <Statements/> </Protected>} />
        <Route path="/clients" element={<Protected> <Clients/> </Protected>} />
        <Route path="/import-export" element={<Protected> <ImportExport/></Protected>} />
        <Route path="/test-result" element={<Protected>  <TestResult/> </Protected>} />
        <Route path="/certification-page" element={<Protected>  <CertificationPage/> </Protected>} />
        <Route path="/menu2" element={<Protected>   <Menu2/> </Protected>} />
      </Routes>
      </BrowserRouter>
    </div>      
  );
}

export default App;
