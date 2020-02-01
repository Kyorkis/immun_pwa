import { connect } from 'react-redux';

import Analizy from './analizy.jsx'

const mapStateToProps = (state) => {
  let filteredState='state.ana'
   return ({
     state
    }) 
  };

const mapDispatchToProps = dispatch => ({
  orderAnaliz:(
    (value)=> {
      console.log(value)
      dispatch({ type: "ANALIZ_ORDERED",value:value})
  }
  ),
  filterAnaliz:( 
    (value)=> {
      dispatch({type:"FILTER",value:value})
  }
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Analizy);