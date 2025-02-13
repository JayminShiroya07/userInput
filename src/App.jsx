import Header from './components/formaction/Header.jsx';
import Login from './components/Login.jsx';
import Signup from './components/formaction/Signup.jsx';
import StateLogin from './components/StateLogin.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <StateLogin /> */}
        {/* <Login/> */}
        <Signup/>
      </main>
    </>
  );
}

export default App;
