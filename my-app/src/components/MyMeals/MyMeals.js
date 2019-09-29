import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import OneCategoryItem from '../Categories/OneCategoryItem';
import Grid from '@material-ui/core/Grid';
import './MyMeals.css';

class MyMeals extends Component {
    state = {
        meals: [],
        hasErrors: false,
        meal: {},
        categories: []
    }

    componentDidMount() {
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then(res => res.json())
        .then(res => this.setState({meals: res.meals} ))
        .catch(() => this.setState({ hasErrors: true }));
    }

    componentWillMount() {
        document.getElementsByClassName("HomeSections")[0].style.display = "none";
        document.getElementsByClassName("Home")[0].style.display = "block";
        document.getElementsByClassName("HamburgerSections")[0].style.display = "none";
        document.getElementsByClassName("HamburgerHome")[0].style.display = "block";
        document.getElementsByClassName("myMeals")[0].style.display = "none";
        document.getElementsByClassName("HamburgerMeals")[0].style.display = "none";
    }
    
    componentWillUnmount() {
        document.getElementsByClassName("Home")[0].style.display = "none";
        document.getElementsByClassName("HomeSections")[0].style.display = "block";
        document.getElementsByClassName("HamburgerSections")[0].style.display = "block";
        document.getElementsByClassName("HamburgerHome")[0].style.display = "none";
        document.getElementsByClassName("myMeals")[0].style.display = "block";
        document.getElementsByClassName("HamburgerMeals")[0].style.display = "block";
    }

    render() {
        const niz=[];
        niz.push(this.state.meal,this.state.meal2)
        return ( 
            <div className="MyMeals">
               <Grid container spacing={3} className="GridContainer" style={{marginBottom:'2%',height:'auto'}}>
                    {this.state.meals.slice(0,5).map((el) => 
                        <div className="WrapDiv" key={el.idMeal}>
                            <Grid item xl={2} md={4} sm={6} xs={12} key={el.idMeal} className="GridItem">
                                <Link className="Link" to={'/Seafood/' + el.idMeal} key={el.idMeal}>
                                    <OneCategoryItem item={el} key={el.idMeal}/>
                                </Link>
                            </Grid>
                        </div>
                    )}
                </Grid>
            </div>
        )
    }
}

export default MyMeals;