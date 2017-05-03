import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './index.css';


class TodoList extends React.Component {
    constructor(){
    super();
    this.state = {
        users:[]
    }
}

 componentDidMount(){
        $.ajax({
            url:'https://jsonplaceholder.typicode.com/users',
            success:(data)=>{
            this.setState({
                users:data
            })
        }
        })
}



render() {
    const {users}=this.state;
    return (
        <section>
            <ul>
      {
          this.state.users.map((user) => {
              return <li> {user.name}</li>
            })
            }

            </ul>
        </section>
        )
}
}



ReactDOM.render(<TodoList />,document.getElementById('root'))

