import React from 'react';

import './CategorySection.css';
import OneCategory from './OneCategory';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

class CategorySection extends React.Component {
    state = {
        categories:[],
        loaded:false,
        hasErrors: false,
        rand:[]
    }
    
    componentDidMount() {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res => res.json())
        .then(res => this.setState({categories:res.categories} ))
        .catch(() => this.setState({ hasErrors: true }));
    }
    
    render() {
        return (
            <div className="Category" id="category" >
                <Grid container spacing={3} className="GridContainer" style={{height:'auto'}}>
                    {this.state.categories.map((el) =>
                        <div className="OneCategory" key={el.idCategory}>
                            <Grid item  md={4} sm={6} xs={12} key={el.idCategory} className="GridItem">
                                <Link className="Link" to={'/categories/' + el.strCategory} key={el.idCategory}>
                                    <OneCategory cat={el}/>
                                </Link>
                            </Grid>
                        </div> 
                    )}
                </Grid>
            </div>
        )
    }
}

export default CategorySection;