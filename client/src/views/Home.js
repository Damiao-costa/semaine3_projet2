import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={apiResponse: []}
    }
    callAPI(){
        fetch("http://127.0.0.1:5000/data")
            .then(res => res.json())
            .then(res => this.setState({apiResponse: res}))
              
    }

    componentDidMount()
    {
        this.callAPI();
    }
    
    render() {
        return (
            <div className="App">
                <ul>
                {this.state.apiResponse.map((object)=>{
                    let name = 
                    <li>Name: {object.Name} 
                        <br></br>Type: {object.Categorie}
                        <br></br> objects: {object.Materiel} 
                        <br></br>Quantité: {object.Quantité}
                    </li>
                return name;
                })}
                </ul>
            </div>
        );
    }
}
export default App;
