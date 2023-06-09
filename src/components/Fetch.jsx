import { Component } from "react";

export default class Fetch extends Component{
    constructor(props){
        super(props)

        this.state = {
            pokeTypes: [],

        }
        this.controller = new AbortController()
    }

    getPokemon(){
        fetch(`https://pokeapi.co/api/v2/type/`, { signal: this.controller.signal })
        .then((response)=>{return response.json()})
        .then((data)=>{
            console.log(data.results)
            let  pokeTypeArr = []
            for(let i = 0; i < data.results.length; i++){
                data.results[i].name
                pokeTypeArr.push(data.results[i].name)
            }
            this.setState({ pokeTypes: pokeTypeArr })
        })
    }

    componentDidMount(){
        this.getPokemon()
    }

    // componentWillUnmount(){
    //     this.controller.abort()
    // }

    render(){

        return (
            <div>
                <ul>
                    {this.state.pokeTypes.map((type, index)=>{
                        return <li key={index+type}>{type}</li>
                    })}
                </ul>
            </div>
        )
    }
}