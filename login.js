function Header()
{
    return (<h1>Hello to the Login Page!</h1>)
}

function Login()
{
    return (
       <div >
           <label >Email:</label> <input type="text"></input>
           <br/>
           <label >Password:</label> <input type="text"></input>
       </div> 
    )
}

function Footer()
{
    return (<h1>Thank for Using!</h1>)
}

function App(){
return (
    <div className='MainDiv'>
    <header> <Header/> </header>
    <div id="LoginDiv"><Login/> </div>   
    <footer><Footer/> </footer> 
    </div>
    )
}

ReactDOM.render(
    <App/> , root
)