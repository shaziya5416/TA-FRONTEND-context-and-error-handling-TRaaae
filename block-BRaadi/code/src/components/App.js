import React from "react";
import Header from "./Header";
import Main from "./Main";

class App extends React.Component {
  render() {
    let { isDarkMode } = this.state;
    return (
      <>
        <Header isDarkMode={isDarkMode} />
        <Main isDarkMode={isDarkMode} />
      </>
    );
  }
}

export default App;

//add error boundary here
// Error boundary is done in the production built
