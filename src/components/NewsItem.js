import React, { Component } from 'react'

export default  class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsurl,Author,date,source} = this.props;       {/* here props is written by using this due to class based component*/}
    return (
      <div>
       <div  className="card my-3 h-[336px]" style={{width: "18rem"}}>
  <img src={imageUrl==null?imageUrl="https://media.cnn.com/api/v1/images/stellar/prod/230824081136-09-first-republican-debate-milwaukee-082323.jpg?c=16x9&q=w_800,c_fill":imageUrl } className="card-img-top h-[158px]" alt="..."/>
  <div  className="card-body ">
    <h5  className="card-title">{title}</h5>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
  </span>
    <p  className="card-text">{description}...</p>
    <p className="card-text"><small>By {Author} on {new Date(date).toGMTString()}</small></p>

    <a href={newsurl} target='_blank'  rel="noreferrer" className="btn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}
