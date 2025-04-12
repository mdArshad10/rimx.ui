import './App.css'
import Button from "@/component/ui/button.tsx";
import { Label } from './component/ui/label';
import { Checkbox } from './component/ui/checkbox';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div  className='bg-black'>
       <Checkbox /> <Label>Terms And Conditions</Label>
      </div>
    </>
  );
}

export default App
