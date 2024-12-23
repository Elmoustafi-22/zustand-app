import CounterValue from "./counter-app/counter-value"
import ManageCounter from "./counter-app/manage-counter"
import Products from "./products"


function App() {
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-jost font-bold">React with zustand</h1>  
        <ManageCounter />
        <CounterValue />
        <Products />
    </div>
  )
}

export default App
