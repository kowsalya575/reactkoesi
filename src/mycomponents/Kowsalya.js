function Dharani()
{
    return(<>
    <h1>This is Dharani component</h1>
    </>)
}
function Kowsalya() 
{
    return(
        <>
            <Dharani/>

             <h1>This is user defined functional components</h1>
             <input type="text" placeholder="Enter your Name" value="Kowsalya"></input>
             <input type="button" value="clickme"></input>
        </>
    )
}
export default Kowsalya