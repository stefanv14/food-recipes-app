import React, { Component } from 'react';

import './SingleMeal.css';
import { Link } from 'react-router-dom';
import OneCategoryItem from '../Categories/OneCategoryItem';
import {  animateScroll as scroll, Events } from 'react-scroll';

class SingleMeal extends Component {
    state = {
        meals: [],
        hasErrors: false,
        meal: {},
        categories: [],
        random:[]
    }

    componentDidMount() {
      const cat = this.props.match.params.cat;
      const urls = [
          "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + this.props.match.params.id,
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + cat,
        ]
        Promise.all(urls.map(url => {
          return fetch(url).then(resp => resp.json())
        })).then(results => {
          this.setState({meals: results[0].meals.map((el) =>
              this.setState({meal: el})
                )})
          this.setState({categories: results[1].meals})
        }).catch(() => this.setState({ hasErrors: true }))
      document.getElementsByClassName("Home")[0].style.display = "block";
      document.getElementsByClassName("HomeSections")[0].style.display = "none";
      document.getElementsByClassName("HamburgerHome")[0].style.display = "block";
      document.getElementsByClassName("HamburgerSections")[0].style.display = "none";
    }
    
    getTags =(meal) => {
      return meal==null?"":"#" + meal.replace(/,/g,"#");
    }

    componentWillReceiveProps(nextProps) {
      if(nextProps.match.params.id !== this.props.match.params.id){
        const urls = [
            "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + nextProps.match.params.id,
            "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + nextProps.match.params.cat,
          ]
          Promise.all(urls.map(url => {
            return fetch(url).then(resp => resp.json())
          })).then(results => {
            this.setState({meals: results[0].meals.map((el) =>
                this.setState({meal: el})
                )})
            this.setState({categories: results[1].meals})
          }).catch(() => this.setState({ hasErrors: true }))
      }
    }
    
    componentWillUnmount(nextProps)  {
      document.getElementsByClassName("Home")[0].style.display = "none";
      document.getElementsByClassName("HomeSections")[0].style.display = "block";
      document.getElementsByClassName("HamburgerHome")[0].style.display = "none";
      document.getElementsByClassName("HamburgerSections")[0].style.display = "block";
    }

    scrollToTop() {
      scroll.scrollToTop();
    }

    render() {
        const num=Math.abs(Math.floor(Math.random()*this.state.categories.length-2)); 
        if(num<this.state.categories.length){
            var num2=num+1;
            var num3=num+2;
        }
        else{
            num2=num-1;
            num3=num-2;
        }
          this.state.random.push(num);
          this.state.random.push(num2);
          this.state.random.push(num3);
          
        return ( 
          <div>
            <div className="Meal">
              <div className="MealLeft">
                  <h1>{this.state.meal.strMeal}</h1>
                  <img src={this.state.meal.strMealThumb} alt={this.state.meal.strMeal} width="99%"/>
              </div>
              <div className="MealRight">
                  <h1>{this.getTags(this.state.meal.strTags)}</h1>
                  <p><strong>Category:</strong> {this.state.meal.strCategory}</p>
                  <p><strong>Country:</strong> {this.state.meal.strArea}</p>
                  <p><strong>Video:</strong> {this.state.meal.strYoutube}</p>

                  <p>{this.state.meal.strInstructions}</p>
              </div>
            </div>

            <div className="Ing">
              <div className="Ingrediants">
                <h3><strong>Ingredients</strong></h3>
                <p>{this.state.meal.strIngredient1}</p>
                <p>{this.state.meal.strIngredient2}</p>
                <p>{this.state.meal.strIngredient3}</p>
                <p>{this.state.meal.strIngredient4}</p>
                <p>{this.state.meal.strIngredient5}</p>
                <p>{this.state.meal.strIngredient6}</p>
                <p>{this.state.meal.strIngredient7}</p>
                <p>{this.state.meal.strIngredient8}</p>
                <p>{this.state.meal.strIngredient9}</p>
                <p>{this.state.meal.strIngredient10}</p>
                <p>{this.state.meal.strIngredient11}</p>
                <p>{this.state.meal.strIngredient12}</p>
                <p>{this.state.meal.strIngredient13}</p>
                <p>{this.state.meal.strIngredient14}</p>
                <p>{this.state.meal.strIngredient15}</p>
                <p>{this.state.meal.strIngredient16}</p>
                <p>{this.state.meal.strIngredient17}</p>
                <p>{this.state.meal.strIngredient18}</p>
                <p>{this.state.meal.strIngredient19}</p>
                <p>{this.state.meal.strIngredient20}</p>
              </div>

              <div className="Measure">
                  <h3>Measure</h3>
                  <p>{this.state.meal.strMeasure1}</p>
                  <p>{this.state.meal.strMeasure2}</p>
                  <p>{this.state.meal.strMeasure3}</p>
                  <p>{this.state.meal.strMeasure4}</p>
                  <p>{this.state.meal.strMeasure5}</p>
                  <p>{this.state.meal.strMeasure6}</p>
                  <p>{this.state.meal.strMeasure7}</p>
                  <p>{this.state.meal.strMeasure8}</p>
                  <p>{this.state.meal.strMeasure9}</p>
                  <p>{this.state.meal.strMeasure10}</p>
                  <p>{this.state.meal.strMeasure11}</p>
                  <p>{this.state.meal.strMeasure12}</p>
                  <p>{this.state.meal.strMeasure13}</p>
                  <p>{this.state.meal.strMeasure14}</p>
                  <p>{this.state.meal.strMeasure15}</p>
                  <p>{this.state.meal.strMeasure16}</p>
                  <p>{this.state.meal.strMeasure17}</p>
                  <p>{this.state.meal.strMeasure18}</p>
                  <p>{this.state.meal.strMeasure19}</p>
                  <p>{this.state.meal.strMeasure20}</p>
              </div>
            </div>
            <hr />
            <h2>Similar meals</h2>
            <div className="Similar">
              <div>
                {this.state.categories.slice(num, num+1).map((el) => 
                  <Link onClick={() => this.scrollToTop()} className="Link" to={'/' +this.props.match.params.cat + '/' + el.idMeal} key={el.idMeal}>  
                    <div key={el.idMeal}> 
                      <OneCategoryItem item={el} key={el.idMeal} /> 
                    </div>
                  </Link>
                )}
              </div>
              <div>
                {this.state.categories.slice(num2, num2+1).map((el) => 
                  <Link onClick={() => this.scrollToTop()} className="Link" to={'/' + this.props.match.params.cat + '/' + el.idMeal} key={el.idMeal}>  
                      <div key={el.idMeal}> 
                        <OneCategoryItem item={el} key={el.idMeal} /> 
                      </div>
                  </Link>
                )}
              </div>
              <div>
                {this.state.categories.slice(num3, num3+1).map((el) => 
                  <Link onClick={() => this.scrollToTop()} className="Link" to={'/' + this.props.match.params.cat + '/' + el.idMeal} key={el.idMeal}>  
                      <div key={el.idMeal}> 
                        <OneCategoryItem item={el} key={el.idMeal} /> 
                      </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )
    }
}

export default SingleMeal;