import React from 'react';
class SearchBar extends React.Component{
    state={value:''}
    onSubmit=(e)=>{
        e.preventDefault()
        this.props.onSubmit(this.state.value)
         
    }
    render(){
        return(
            <form className="ui icon input" onSubmit={this.onSubmit}>
                <input type="text" placeholder="Search a image" value={this.state.value} onChange={e=>this.setState({value:e.currentTarget.value})}></input>
                <button className="ui button">Click</button>


            </form>
        )
    }
}
export default  SearchBar