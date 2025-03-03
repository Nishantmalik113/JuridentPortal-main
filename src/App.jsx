import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './pages/News';
import TaskOverview from './pages/TaskOverview';
import Faq from './pages/Faq';
import Terms from './pages/Terms';
import Refunds from './pages/Refunds';
import Feedback from './pages/Feedback';
import './App.css';
import Hero from './components/Hero';
import Contactus from './pages/Contactus';
import Register from './pages/Register';
import Aboutus from './pages/Aboutus';
import LawyerSignIn from './pages/LawyerSignIn';
import LawyerSignUp from './pages/LawyerSignUp';
import ClientSignIn from './pages/ClientSignIn';
import ClientSignUp from './pages/ClientSignUp';
import Dashboard from './pages/Dashboard'
import PendingCases from './pages/PendingCases';
import DisclosedCases from './pages/DisclosedCases';
import AllCases from './pages/AllCases';
import CaseDetails from './pages/CaseDetails';
import CaseNotes from './pages/CaseNotes';
import EditCaseDetails from './pages/EditCaseDetails';
import SavePopup from './pages/SavePopup';
import AddCase from './pages/AddCase';
import BareAct from './pages/bareAct';
import JuridentAssistence from './pages/JuridentAssistence'
import SharedCases from './pages/SharedCases';
import MyFiles from './pages/MyFiles'
import MyTeams from './pages/MyTeams'
import Contact from './pages/Contact'
import About from './pages/About'
import Account from './pages/Account';
import EmailVerification from './pages/EmailVerification';
import ForgotPassword from './pages/ForgotPassword';
import TasksEvents from './pages/TasksEvents'
import { useAuth } from './context/AuthContext';
import Cases from './pages/Cases';

function App() {

  const {globalUser} = useAuth()

  return (
    <Router>
      <Routes> 
        <Route path="/" element= {globalUser ? <Dashboard /> : <Hero />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/LawyerSignIn" element={< LawyerSignIn/>}/>
        <Route path="/LawyerSignUp" element={< LawyerSignUp/>}/>
        <Route path="/ClientSignIn" element={< ClientSignIn/>}/>
        <Route path="/ClientSignUp" element={< ClientSignUp/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/PendingCases" element={<PendingCases/>}/>
        <Route path="/DisclosedCases" element={<DisclosedCases/>}/>
        <Route path="/AllCases" element={<AllCases/>}/>
        <Route path="/AddCase" element={<AddCase/>}/>
        <Route path="/case/:id" element={<CaseDetails/>}/>
        <Route path="/case/:id/notes" element={<CaseNotes/>}/>
        <Route path="/case/:id/edit" element={<EditCaseDetails/>}/>
        <Route path="/SavePopup" element={<SavePopup/>}/>
        <Route path="/calendar" element={<TaskOverview />} />
        <Route path="/news" element={<News />} />
        <Route path="/aboutus" element={< Aboutus/>}/>
        <Route path="/about" element={< About/>}/>
        <Route path="/bareAct" element={<BareAct/>}/>
        <Route path="/contactus" element={<Contactus/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/account" element={<Account />} />
        <Route path="/tasks" element={<TaskOverview />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refunds" element={<Refunds />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path='/juridentassistence' element={<JuridentAssistence/>} />
        <Route path='/SharedCases' element={<SharedCases/>}/>
        <Route path='/MyFiles' element={<MyFiles/>} />
        <Route path='/Myteams' element={<MyTeams/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/EmailVerification" element={<EmailVerification />} /> 
        <Route path="/tasksevents" element={<TasksEvents />} />
        <Route path="/Cases" element={<Cases />} />
      </Routes>
    </Router>
  );
}

export default App;
