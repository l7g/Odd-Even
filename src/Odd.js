export function Odd( {numbers} ){
    return <ul>
        {numbers.map((number) => {
            return <li>{number}</li>
        })}
    </ul>
}