import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import Companies from './pages/Companies';
import CompanyDetails from './pages/CompanyDetails';
import Candidates from './pages/Candidates';
import CandidateDetails from './pages/CandidateDetails';
import CandidateProfile from './pages/CandidateProfile';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Signin from './pages/Signin';
import ResetPassword from './pages/ResetPassword';
import ContentProtect from './pages/ContentProtect';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <>
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>        
          <Route path='*' element={<NoPage></NoPage>}></Route>        
          <Route path='/about' element={<About></About>}></Route>              
          <Route path='/contact' element={<Contact></Contact>}></Route>              
          <Route path='/pricing' element={<Pricing></Pricing>}></Route>              
          <Route path='/register' element={<Register></Register>}></Route>              
          <Route path='/signin' element={<Signin></Signin>}></Route>              
          <Route path='/reset-password' element={<ResetPassword></ResetPassword>}></Route>              
          <Route path='/content-protected' element={<ContentProtect></ContentProtect>}></Route>              
          <Route path='/blog' element={<Blog></Blog>}></Route>              
          <Route path='/blog-details' element={<BlogDetails></BlogDetails>}></Route>              
          <Route path='/jobs' element={<Jobs></Jobs>}></Route>              
          <Route path='/job-details' element={<JobDetails></JobDetails>}></Route>              
          <Route path='/companies' element={<Companies></Companies>}></Route>              
          <Route path='/company-details' element={<CompanyDetails></CompanyDetails>}></Route>              
          <Route path='/candidates' element={<Candidates></Candidates>}></Route>              
          <Route path='/candidate-details' element={<CandidateDetails></CandidateDetails>}></Route>              
          <Route path='/candidate-profile' element={<CandidateProfile></CandidateProfile>}></Route>              
        </Route>
      </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
