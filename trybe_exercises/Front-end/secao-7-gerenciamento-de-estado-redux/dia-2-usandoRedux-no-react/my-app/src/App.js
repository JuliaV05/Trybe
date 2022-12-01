import { connect } from 'react-redux';

function App(props) {
  const { countState } = props;
  return (
    <div className="App">
     <h1>Contador</h1>
     <h2>{ countState }</h2>
     <button>Incrementa 1</button>
     <button>Incrementa 5</button>
    </div>
  );
}


const mapStateToProps = (state) => ({
  countState: state.count,
});
export default connect(mapStateToProps)(App);

