import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {

  renderCampsite(campsite) {
    if(campsite) {
      return (
        <div className="col-md-5 m-1">
          <Card>
            <CardImg top src={campsite.image} alt={campsite.name} />
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </Card>
        </div>
      );
    }
  }

  renderComments(comments) {
    if(comments) { 
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          { 
            comments.map(comment => {
              return (
                <div>
                  <p>{comment.text}</p>
                  <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </div>
              )
            })
          }
        </div>
      ); 
    }
    else { return <div />; }
  }

  render() {
    if(this.props.campsite) { 
      return (
        <div className="row">
          {this.renderCampsite(this.props.campsite)}
          {this.renderComments(this.props.campsite.comments)}
        </div>
      ); 
    }
    else { return <div />; }
  }
}

export default CampsiteInfo;