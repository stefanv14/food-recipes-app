import React from 'react';

import OneCategoryItem from '../Categories/OneCategoryItem';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import './SearchBar.css';
import DropDownList from '../DropDownList/DropDownList';

class SearchResult extends React.Component {
    state = {
        results: [],
        random: {},
        categories: []
    }

    componentDidMount() {
        const inputValue = this.props.history.location.state;
        const urls = [
            "https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputValue,
            "https://www.themealdb.com/api/json/v1/1/random.php",
            "https://www.themealdb.com/api/json/v1/1/categories.php"
          ]
        Promise.all(urls.map(url => {
            return fetch(url).then(resp => resp.json())
            })).then(results => {
            this.setState({results: results[0].meals})
            this.setState({meals: results[1].meals.map((el) =>
                this.setState({random: el})
                 )})
            this.setState({
                categories: results[2].categories
            }) 
          }).catch(() => this.setState({ hasErrors: true }))
        document.getElementsByClassName("Home")[0].style.display = "block";
        document.getElementsByClassName("HomeSections")[0].style.display = "none";
        document.getElementsByClassName("HamburgerHome")[0].style.display = "block";
        document.getElementsByClassName("HamburgerSections")[0].style.display = "none";
    }
    
    componentWillReceiveProps(nextProps) {
        const inputValue = this.props.history.location.state;
        const urls = [
            "https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputValue,
            "https://www.themealdb.com/api/json/v1/1/random.php"
          ]
        Promise.all(urls.map(url => {
            return fetch(url).then(resp => resp.json())
          })).then(results => {
            this.setState({results: results[0].meals})
            this.setState({meals: results[1].meals.map((el) =>
                this.setState({random: el})
                 )}) 
          }).catch(() => this.setState({ hasErrors: true })
        )
    }

    componentWillUnmount() {
        document.getElementsByClassName("Home")[0].style.display = "none";
        document.getElementsByClassName("HomeSections")[0].style.display = "block";
        document.getElementsByClassName("HamburgerHome")[0].style.display = "none";
        document.getElementsByClassName("HamburgerSections")[0].style.display = "block";
    }

    getMeals = (val) => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" +  val)
        .then(res => res.json())
        .then(res => this.setState({results:res.meals} ))
        .catch(() => this.setState({ hasErrors: true }));
    }
    render() {
        return (
            <div style={{marginTop:'5%'}}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div className="Our" >
                        <h3>our recommendation</h3>
                        <h2>{this.state.random.strMeal}</h2>
                        <Link className="Link" to={'/' + this.state.random.strCategory + '/' + this.state.random.idMeal}>
                            <img src={this.state.random.strMealThumb} alt={this.state.random.idMeal} width="60%" style={{borderRadius:'10px'}} />
                        </Link>
                    </div>
                </div>
                <hr style={{marginTop:'2%'}} />

                    <DropDownList style={{backgroundColor:'orange'}} 
                                  options={this.state.categories} 
                                  getMeals={this.getMeals} />
                
                <hr style={{marginBottom:'3%'}} />

                <Grid container spacing={3} className="GridContainer" style={{marginBottom:'2%',height:'auto'}}>
                    {this.state.results.map((el) => 
                        <div className="WrapDiv" key={el.idMeal}>
                            <Grid item xl={2} md={4} sm={6} xs={12} key={el.idMeal} className="GridItem">
                                <Link className="Link" to={'/' + el.strCategory + '/' + el.idMeal} key={el.idMeal}>
                                    <OneCategoryItem item={el}/>
                                </Link>
                            </Grid>
                        </div>
                    )}
                </Grid>
            </div>
        )
    }
}

export default SearchResult;