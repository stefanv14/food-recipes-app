import React, { Component } from 'react';

import OneCategoryItem from './OneCategoryItem';
import './Categories.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

class Categories extends Component {
    state = {
        meals:[],
        hasErrors: false,
        filtered:[]
    }
    
    componentDidMount() {
        const Category = this.props.match.params.id;
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" +  Category)
        .then(res => res.json())
        .then(res => this.setState({meals: res.meals,filtered:res.meals} ))
        .catch(() => this.setState({ hasErrors: true }));
        document.getElementsByClassName("Home")[0].style.display = "block";
        document.getElementsByClassName("HomeSections")[0].style.display = "none";
        document.getElementsByClassName("HamburgerHome")[0].style.display = "block";
        document.getElementsByClassName("HamburgerSections")[0].style.display = "none";
    }
    
    componentWillUnmount() {
        document.getElementsByClassName("Home")[0].style.display = "none";
        document.getElementsByClassName("HomeSections")[0].style.display = "block";
        document.getElementsByClassName("HamburgerHome")[0].style.display = "none";
        document.getElementsByClassName("HamburgerSections")[0].style.display = "block";
    }

    filterProd = (value) => {
        const filtered = this.state.filtered.filter((el) => {
            if (el.strMeal.toLowerCase().indexOf(value.toLowerCase()) !== -1) 
            return true;
          });
          this.setState({meals:filtered})
    }

    render() {
        const num=Math.ceil(Math.random()*this.state.meals.length);

        return (
            <div className="Categories">
                <h1 style={{lineHeight:'100px'}}>{this.props.match.params.id}</h1>
                <div style={{display:'flex',justifyContent:'space-between'}} className="Res">
                    <div style={{width:'15%',textAlign: 'center'}}>
                        <h3>our recommendation</h3>
                            {this.state.meals.slice(num-1, num).map((el) => 
                                <Link className="Link" to={'/' +this.props.match.params.id + '/' + el.idMeal} key={el.idMeal}>
                                    <div key={el.idCategory} >
                                        <OneCategoryItem key={el.idMeal} item={el} />
                                    </div>
                                </Link>
                            )}
                    </div>
                    <div style={{width: 'auto'}}>
                        <SearchBar sInput={this.filterProd} />
                    </div>
                </div>
                <hr style={{margin:'5% 0'}} />
                <Grid container spacing={3} className="GridContainer" style={{marginBottom:'2%',height:'auto'}}>
                    {this.state.meals.map((el) => 
                        <div className="WrapDiv" key={el.idMeal}>
                            <Grid item xl={2} md={4} sm={6} xs={12} key={el.idMeal} className="GridItem">
                                <Link className="Link" to={'/' + this.props.match.params.id + '/' + el.idMeal} key={el.idMeal}>
                                    <OneCategoryItem key={el.idMeal} item={el}/>
                                </Link>
                            </Grid>
                        </div>
                    )}
                </Grid>
            </div>
        )
    }
}

export default Categories;