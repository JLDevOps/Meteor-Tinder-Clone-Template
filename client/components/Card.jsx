React.initializeTouchEvents(true)

Card = React.createClass({
  getInitialState() {
    return {
      x: 0,
      y: 0,
      initialX: 0,
      initialY: 0,
      dragging: "none"
    }
  },

  setAffirmative(_id) {
    MyData.update({_id}, {$set: { affirmative: true}})
  },
  moveCardInit(e) {
    this.setState({
      initialX: e.touches[0].pageX,
      initialY: e.touches[0].pageY,
      dragging: "none"
    })
  },
  moveCard(e) {
    deltaX = (e.touches[0].pageX - this.state.initialX)
    deltaY = (e.touches[0].pageY - this.state.initialY)
    this.setState({
      x: deltaX,
      y: deltaY
    })
  },
  moveCardEnd(e) {
    if (e.changedTouches[0].pageX < 50) {
    this.setState({
      x: -1000,
      y: 0,
      dragging: "all 0.5s ease"
    })
    Meteor.setTimeout(this.props.setAffirmative, 500)
  } else if (e.changedTouches[0].pageX > (window.innerWidth - 50)) {
  this.setState({
    x: 1000,
    y: 0,
    dragging: "all 0.5s ease"
  })
  Meteor.setTimeout(this.props.setAffirmative, 500)
}else {
  this.setState({
    x: 0,
    y: 0,
    dragging: "all 0.5s ease"
  })
}},
  render() {
    let cardStyle = {
      transform: "translate(" +
        this.state.x + "px," +
        this.state.y + "px)" +
        "rotate("+this.state.x/10 + "deg)",
      transition: this.state.dragging
    }
    if (this.state.x <= -1000 || this.state.x >= 1000) {
  cardStyle.marginBottom = "-" +
  (document.getElementsByClassName("card")[0].offsetHeight + 20) + 
  "px"
}
    return (
      <div className="card" onTouchStart={this.moveCardInit} onTouchMove={this.moveCard} onTouchEnd={this.moveCardEnd} style={cardStyle}>
        <div className="item item-body">
            <img className="full-image" src={this.props.card.image} />
        </div>
        <div className="item">
          <h2>{this.props.card.name}</h2>
          <p>{this.props.card.details}</p>
        </div>
      </div>
    )
  }
});