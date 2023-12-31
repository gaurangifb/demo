import Button from "./components/Button"
import Alert from "./components/Alert"
import { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  
  return (
    <div>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
     <Button color='success' onClick={() => setAlertVisibility(true)}>My Button</Button>

    </div>
  );
}

export default App;
