import useCounter from "../store/use-counter";


function CounterValue() {

    const counter = useCounter(state => state.count)

    console.log(counter)
    return (
        <div>
            <p className="font-jost">Counter value is {counter}</p>
        </div>
    )
}

export default CounterValue;