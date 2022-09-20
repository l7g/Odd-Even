export function Even( {numbers} ){
    return <ul>
        <h2>Evens</h2>
        {numbers.map((number, index) => {
            return (
        <div>
            <li key={index}>{number}</li>
        </div>
            )
        })}
    </ul>
}