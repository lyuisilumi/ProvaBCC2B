
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer, toast } from "react-toastify";
import TelaMensagens from "./telaCadastro/TelaMensagem";
import Tela404 from "./telaCadastro/Tela404";
import TelaUsuario from "./telaCadastro/telaUsuario";


function App() {
  return (
    <div className="App">
     <Provider  >
        <BrowserRouter store={store}>
        <Routes>
            <Route path="/mensagem" element={<TelaMensagens />} />
            <Route path="/usuario" element={<TelaUsuario />} /> 
            <Route path="/" element={<TelaMensagens />} />
            <Route path="*" element={<Tela404/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
      <ToastContainer/>
    </div>
  );
}

export default App;
