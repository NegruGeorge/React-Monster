import React,{Component} from 'react';
import { CardList } from './components/card-list/card-list.components';
import {SearchBox} from './components/search-box/search-box.component';


import './App.css';

// cand facem o clasa avem acces la state
class App extends Component {

constructor()
{
  // super apeleaza construcotrul din component care ne da acces la state 
  super();
  this.state = {
    monsters: [],
    searchField: ''
  };
 
}

componentDidMount()
{// cand se randeaza pagina se apeleaza ce scriem noi aici
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response =>response.json())
  .then(users => this.setState({monsters:users}));
  
}

handleChange = (e)=>
{
  this.setState({ searchField:e.target.value })
}


// render func
  render()
  {
  const{monsters,searchField} = this.state;
  const filteredMonsters = monsters.filter(monster=>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

  return (
        // this.setstate e async nu se face imediat

        <div className="App">
          <h1>Monsterssss</h1>
        <SearchBox  
        placeholder="search monster"  
        handleChange = {this.handleChange} 
         />
          <CardList  monsters = {filteredMonsters} />
        </div>
  )
  }
}

export default App;
