import React from "react";

class Fondamental extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //les variables d'états
      date: new Date(),
      count: 0,
      isToggleOn:true
    };

    //Les appels à la méthode bind sont très utilisés dans les requêtes asynchrones. 
    //Dans ce cas le bind est utilisé au niveau de la fonction callback 
    //pour faire en sorte évidemment que le callback s'exécute avec une valeur de this qui lui convienne.
    this.toggle= this.toggle.bind(this);
  }

  //--Méthodes de cycle de vie à la classe--
  //La méthode componentDidMount() est exécutée 
  //après que la sortie du composant a été injectée dans le DOM.
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  //La a méthode de cycle de vie componentWillUnmount() est appelé pour détruire le minuteur
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    //On utilise this.setState() pour planifier une mise à jour de l’état local du composant
    this.setState({
      date: new Date(),
    });
  }

  //les màj des variables d'états sont parfois asynchrones, c'est pour ça qu'on utilise l'état précedent
  increment=()=>{
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  //
  toggle(){
    this.setState((prevState)=>{
      return { isToggleOn: !prevState.isToggleOn }
    })
  }

  render() {
    return (
      <div>
        Bonjour, il est {this.state.date.toLocaleTimeString()}
        <br/>
        {/* il faut éviter de mettre this.functionName() pour ne pas avoir Multiple rerender exception */}
        <button onClick={this.increment}>Incrementer</button>
        <div>résultat : {this.state.count}</div>
        <br/>
        <button onClick={this.toggle}  >{this.state.isToggleOn ? 'On':'Off'}</button>
      </div>
    );
  }
}

export default Fondamental;

//https://fr.reactjs.org/docs/state-and-lifecycle.html

//Rémarques : 
//1. Il existe 3 manières pour créer et appeler les fonctions, 2 manières en forme fléchés et une manière de bindage
// Deux manières de la forme fléchés:
//1ère manière:  
  // -utiliser la forme functionName()=>{} puis appéler lui dans render sous forme this.functionName
  // -utiliser la forme functionName(){} puis appeler lui dans render sous la forme ()=>this.functionName()
//2ème manière:
  // -utiliser la forme functionName(){}, binder la fonction dans le constructeur sous la forme this.functionName=this.functionName.bind(this);
  //et appeler lui dans render sous la forme this.functionName
// NB: en JavaScript,les méthodes de classes ne sont pas liées par défaut, c'est pour ça qui faut utiliser l'un des trois options indiqués ci-dessus