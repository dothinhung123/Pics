import React from 'react';
import axios from 'axios'
import ImageList from './ImageList'
class SearchBar extends React.Component{
    state={val:'',images:[]}
    handleSubmit= async (e)=>{
    e.preventDefault()
  const response = await  axios.get('https://api.unsplash.com/search/photos',{
        params:{query:this.state.val},
        headers:{
            Authorization:'Client-ID fc1bb97b757aa161cf949ad6daef8503ae2f7b7d943c82c66a96fc0d81d7a367'
        }
    })
    console.log(this.state.val)
    console.log(response)
    this.setState({images:response.data.results})
    
    }
    
    render(){
        return(<div>
            <form className="ui container" onSubmit={this.handleSubmit}>
            <div className="ui fluid action input">
            <input type="text" placeholder="Search..." value={this.state.val} onChange={(e)=>{this.setState({val:e.target.value})}}/>
            <button className="ui button" >Search</button>
          </div>
            </form>
            <ImageList images={this.state.images}></ImageList>
            </div>
        )
    }
}
export default SearchBar