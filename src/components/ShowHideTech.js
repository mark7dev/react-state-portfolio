import React, { Component } from 'react';


/*  Note:
   if you find a add/remove 'techlist--hidden' from the div element's class,
   the techlist box will appear/disappear
 
*/

class ShowHideTech extends Component {

  constructor(props) {
    super();

    this.state = {
      hide: true,
      text: '+ Show Tech'
    };
  }

  hideShow = (e) => {
    e.preventDefault();
    if (this.state.hide === true) {
      this.setState({
        hide: false,
        text: '- Hide Tech'
      });
    } else {
      this.setState({
        hide: true,
        text: '+ Show Tech'
      });
    }
  }

  render() {

    let techlistStatus = `techlist--hidden`

    return (
      <section>
        <h4>Technologies</h4>
        <button onClick = { this.hideShow } className= { this.state.hide }>{ this.state.text }</button>

        <div className={ this.state.hide ? 'techlist' : 'techlist--hidden' }>
          <span className="techlist__icon devicons devicons-github_badge"/>
          <span className="techlist__icon devicons devicons-git"/>
          <span className="techlist__icon devicons devicons-html5"/>
          <span className="techlist__icon devicons devicons devicons-css3"/>
          <span className="techlist__icon devicons devicons-sass"/>
          <span className="techlist__icon devicons devicons-linux"/>
          <span className="techlist__icon devicons devicons devicons-nodejs"/>
          <span className="techlist__icon devicons devicons devicons-react"/>
          <span className="techlist__icon devicons devicons devicons-illustrator"/>
        </div>
      </section>
    );
  }
}

export default ShowHideTech;
