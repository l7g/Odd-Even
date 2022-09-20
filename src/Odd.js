export function Odd( {numbers} ){
    return <ul> 
        <h2>Odds</h2>
        {numbers.map((number, index) => {
            return <li key={index}>{number}</li>
        })}
    </ul>
}