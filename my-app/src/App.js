import React from 'react';

import Layout from './components/Layout/Layout';
import { Route, Switch} from 'react-router-dom';
import Categories from './components/Categories/Categories';
import SingleMeal from './components/SingleMeal/SingleMeal';
import HeaderSection from './components/Sections/HeaderSection/HeaderSection';
import CategorySection from './components/Sections/CategorySection/CategorySection';
import AboutSection from './components/Sections/AboutSection/AboutSection';
import ContactSection from './components/Sections/ContactSection/ContactSection';
import MyMeals from './components/MyMeals/MyMeals';
import SearchResults from './components/SearchBar/SearchResults';
import { Redirect } from 'react-router-dom';

class App extends React.Component {
  state = {
    inputValue: '',
    results: []
  }

  componentDidMount() {
      const inputValue = this.state.inputValue;
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputValue)
      .then(res => res.json())
      .then(res => this.setState({ results: res.meals }))
      .catch(() => this.setState({ hasErrors: true }));
      document.getElementsByClassName("HamburgerHome")[0].style.display = "none";
      document.getElementsByClassName("Home")[0].style.display = "none";
  }

  sInput = (sInput) => {
      this.setState({inputValue: sInput});
      if(this.state.inputValue && this.state.inputValue.length > 1) {
        if(this.state.inputValue.length % 2 === 0){
          this.componentDidMount()
        }
      }
  }
  render() {
    return (
      <Layout sInput={this.sInput.bind(this)}>
        {this.state.inputValue !== "" ? 
          <Redirect to={{pathname: '/search', state: this.state.inputValue}}/>  
          :  
          <Redirect to={{pathname: '/', state: this.state.inputValue}}/>
        }
        <Switch>
          <Route path="/categories/:id" component={Categories}/>
          <Route path="/:cat/:id" component={SingleMeal}/>
          <Route path="/myMeals" component={MyMeals}/>
          <Route path="/search" component={SearchResults}/>
          <Route exact path='/' render={sections =>
            <div>
              <HeaderSection />
              <CategorySection />
              <AboutSection  />
              <ContactSection />
            </div>} 
          />
        </Switch>
      </Layout>
    );
  }
}

export default App;
