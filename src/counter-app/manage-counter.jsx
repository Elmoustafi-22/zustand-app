import { useActions } from "../store/use-counter";


function ManageCounter() {
    const {handleIncrementCount} = useActions()

    return (
        <button onClick={handleIncrementCount} className="rounded font-lato bg-gray-800 text-white p-1 border border-violet-500">Handle counter value</button>
    )
}

export default ManageCounter;