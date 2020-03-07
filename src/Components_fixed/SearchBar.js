import React from 'react';

class SearchBar extends React.Component{
    state={term:''}
    getTheUserInformation=(event)=>{
         
event.preventDefault()
this.props.onSubmit(this.state.term)

    }
    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.getTheUserInformation}>
                    <div className="field">
                        <label htmlFor="userInput">UserInput</label>
                        <input type="text" value ={this.state.term } onChange={(e)=>{this.setState({term:e.currentTarget.value})}}></input>
                    </div>


                </form>
               
            </div>
        )
    }
}
export default SearchBar