import React, { Component } from 'react';
import Directory from './DirectoryComponent'
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
import { Switch, Route, Redirect } from 'react-router-dom';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home 
                    campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]}
                />
            );
        }

        const CampsiteWithId = ({match}) => {
            return(
                <CampsiteInfo 
                    campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]} // the `+` before `match` is a shortcut to convert string to number
                    comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)} 
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path="/directory" render={() => <Directory campsites={this.state.campsites} /> } />
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                    <Route exact path="/aboutus" render={() => <About partners={this.state.partners} />}/>
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
// NOTE: when using Route and need to pass along state data, use render().  Otherwise, use component=
// NOTE 2: the `:` symbol is very important in `/directory/:campsiteId`.  It tells router that anything after the : is a parameter and
//         puts the variable inside `campsiteId`. Then the router stores an object called `match` which has params.  The campsiteId
//         is one of the params of the match object.