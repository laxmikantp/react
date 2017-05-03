import React from 'react';
class TodoItem extends React.Component {
    constructor(props){
    super(props);
    this.state={
        isEditing:false
    }

    this.renderForm=this.renderForm.bind(this);
    this.renderItem=this.renderItem.bind(this);
    this.toggleState=this.toggleState.bind(this);
    this.updateItem=this.updateItem.bind(this);
}


    toggleState(){
    const{isEditing}=this.state

    this.setState({
            isEditing:!isEditing
        })
    }

    renderForm(){
            return(<form onSubmit={this.updateItem}>
                <input type="text" ref={(value) =>{this.input=value}} defaultValue={this.props.details.name} />
                <button type="submit">Update</button>
            </form>)

    }

    updateItem(evt){
    evt.preventDefault();
    this.props.editItem(this.props.index,this.input.value);
    this.toggleState();
}


    renderItem(){

        return(<li onClick={ () => {
            this.props.clickHandler(this.props.index);
            }} className={this.props.details.completed ? 'completed' :
            ''}>
            <button  onClick={(evt) => {
                evt.stopPropagation();
                this.props.deleteTask(this.props.index);
                }}>Delete</button>
        <button  onClick={(evt) => {
            evt.stopPropagation();
            this.toggleState();
            }}>Edit</button>
        {this.props.details.name}
            </li>)

}

    render(){
    const {isEditing}=this.state;
    return (
            <section>
            {isEditing ? this.renderForm() : this.renderItem()  }
            </section>
        )
        }
        }


        export default TodoItem;