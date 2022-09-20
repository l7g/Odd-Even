export function Even( {numbers} ){
    return <ul>
        {numbers.map((number) => {
            return <li>{number}</li>
        })}
    </ul>
}