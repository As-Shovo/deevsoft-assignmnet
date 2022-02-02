
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Activity from './Pages/Activity/Activity';
import Goal from './Pages/Goal/Goal';
import Login from './Pages/Login/Login';
// import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import SelectCoach from './Pages/SelectCoach/SelectCoach';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div >
      <AuthProvider>
        <BrowserRouter>
          
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/goal" element={<PrivateRoute> <Goal /> </PrivateRoute>} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/selectCoach" element={<SelectCoach />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
