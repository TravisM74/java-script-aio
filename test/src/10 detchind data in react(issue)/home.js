import {useQuery} from '@tanstack/react-query';

export const Home = () => {
    /*
    const {data, isLoading} = useQuery(['cat'], () => {
        fetch('https://catfact.ninja/fact')
            .then((res)=> res.json())         
        });   
    if (isLoading) {
        return <h1> Loading ...</h1>
    */
    const data = fetch('https://catfact.ninja/fact').then((res)=> res.json())  
    return (
        <div>
            <h1>this is the homepage</h1>
            <p>{console.log(data)}</p>
            <p>{data[0]?.fact}</p>
        </div>
    )
}
