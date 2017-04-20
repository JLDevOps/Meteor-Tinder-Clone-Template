Home = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
     let handle = Meteor.subscribe("myData")
  let data = MyData.find({affirmative: true}).fetch()
  return {
    loading: !handle.ready(),
    users: data
  }
  },

removeCard(_id) {
  MyData.remove(_id)
},

renderCards() {
  return this.data.users
  .map((card) => {
    return <Card 
      key={card._id} 
      card={card} 
      remove={ () => this.removeCard(card._id)}
      setAffirmative={ () => this.setAffirmative(card._id)}
    />
  })
},


  render() {
    if (this.data.loading) {
      return <h1>Loading</h1>
    }
    return <div>{this.renderCards()}</div>
  }
})
