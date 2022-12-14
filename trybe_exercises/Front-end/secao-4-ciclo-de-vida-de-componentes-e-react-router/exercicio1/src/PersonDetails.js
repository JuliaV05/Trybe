import React from "react";
import Loading from "./Loading";
import PersonCard from "./PersonCard";

class PersonDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            person: [],
            loading: true,
        };
    }
    
    componentDidMount() {
        const url = 'https://api.randomuser.me/';
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                loading: false,
                person: data.results,
            });
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState.person[0].dob.age);
        const AGE = 50;
        if (nextState.person[0].dob.age < AGE) return true;
     }
   
  getUserElements(user) {
    return {
        name:`${user.name.first} ${user.name.last}`,
        email: user.email,
        age: user.dob.age,
        image: user.picture.thumbnail,
    };
  }

    render() {
        const { loading, person } = this.state;
        if (loading) return <Loading />
    return(
       <div>
        <PersonCard 
        person={ this.getUserElements(person[0])} 
        />
       </div>
    );
 }
}
export default PersonDetails;
