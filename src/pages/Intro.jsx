import { useNavigate } from "react-router-dom";

function Intro() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl mb-4">Welcome to MyStore</h1>
        <button onClick={() => navigate("/home")}>
          DUKAAN KHOLO!!!!!
        </button>
      </div>
    </div>
  );
}

export default Intro;