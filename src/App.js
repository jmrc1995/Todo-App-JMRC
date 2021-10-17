import React from 'react'
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Header from './components/Header'




export default class App extends React.Component {
    constructor(){
    super();

      this.state={
        items:[],
      currentItem :{
        task :'',
        key: ''
      }
        
      };

      this.handleChange=this.handleChange.bind(this)
      this.addTodo=this.addTodo.bind(this)
      this.deleteItem= this.deleteItem.bind(this)
      this.setUpdates=this.setUpdates.bind(this)


  }


  handleChange(e){
    this.setState({
      currentItem: { 
        task : e.target.value,
        key: Date.now()
      }
    })
  }

  addTodo(e){
    e.preventDefault(); // prevents refresh 
    const curTask = this.state.currentItem; // store current task text in memory(var)
    if(curTask.task !== ''){
        const newArray = [...this.state.items, curTask]
        this.setState({
          items: newArray,
          currentItem:{
            task:'',
            key:''
          } 
       })
    }
  }

  deleteItem(key){
    const filteredItems = this.state.items.filter(item => 
      item.key!==key);
      this.setState({
        items: filteredItems
      })
    
  }

  editChange(e) {
    console.log("edit mode activated")
  }

  setUpdates (text, key){
    const items = this.state.items;
    items.map(item=>{
      if(item.key===key){
        item.task=text;
      }
    })
    this.setState({
      items: items
    })
  }

  



  render(){

    return (
      
      <div className="App">
        
          <header className="App-header">
            
            <h1>TO:DO</h1>

            <small>
              by jmrc.
              </small>
            
            
             
        </header>
          
        <div className='page-background'>

                <div className='main-parent-container'>

                <Header />

                <TodoForm addItem = {this.addTodo} currentInput={this.handleChange} currentText={this.state}/>
              
                
                <TodoList items={this.state.items} deleteItems ={this.deleteItem} setUpdate={this.setUpdates}/>

                </div>

        </div>

      </div>
    );
  }
}
