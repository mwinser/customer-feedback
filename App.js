class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tab: "Welcome",
      };
    this.changeTab = this.changeTab.bind(this);
    
  }
  changeTab(input){
    this.setState({tab: input});
  }
  render(){
  let tab;
    switch(this.state.tab){
      case "Welcome":
        tab = <Welcome/>;
        break;
      case "Projects":
        tab = <Projects/>;
        break;
      case "About Me":
        tab = <AboutMe/>;
        break;
      case "Contact":
        tab = <Contact/>;
        break;
      default:
        tab = <Error/>;
    
    }
  return(<div>
      <nav id="navbar"><div id="titlebar">mwinser.com</div>
  <div id="navlink" onClick={()=>this.changeTab("Welcome")}><a>Welcome</a></div>
  <div id="navlink" onClick={()=>this.changeTab("Projects")}><a>Projects</a></div>
  <div id="navlink" onClick={()=>this.changeTab("About Me")}><a>About Me</a></div>
  <div id="navlink" onClick={()=>this.changeTab("Contact")}><a>Contact</a></div></nav>

    <main>
      {tab}
      </main></div>)}
}

class Projects extends React.Component{
  render(){
    return( <div><div id="projects-title"></div>
  <section id="projects">
    <div class="project-tile"><a href="https://codepen.io/winserm/">Web projects</a></div>
    <div class="project-tile"><a href="https://github.com/mwinser">github</a></div>
        <div class="project-tile"><a href="https://simmer.io/@WinserWorks">Unity projects</a></div>
    
    <div class="project-tile"><a href="https://soundcloud.com/michael-winser-928373892">Music projects</a></div>
  </section></div>)
  }
}
class Welcome extends React.Component{
  render(){
    return( <section className="primary-section">


            <br/>
        <div className="text-tile">Hello! I'm Mike Winser.<p>I'm a Spokane-based problem solver and maker-of-stuff.</p><p>I'm a self-taught programmer and I made this site to display some of my work.</p><p> I'm always learning new things, so check back in soon!</p>
          <a href="https://github.com/mwinser" ><i class="fab fa-github" ></i></a>
          <a href="https://twitter.com/winsaurus"><i class="fab fa-twitter"></i></a> 
          <a href="www.linkedin.com/in/mwinser"><i class="fab fa-linkedin"></i></a>
        </div><br/>
        

          
          
          
          </section>)
  }
}
class AboutMe extends React.Component{
  render(){
    return( <section className="primary-section">
        <div className="text-tile">About Me<p>Hi, I'm Mike Winser, a former Scientist, current Polysomnographer, and aspiring Developer living in beautiful Spokane, WA. </p><p>I like solving problems and making useful stuff with:
          <ul><li>HTML, CSS, Javascript, Bootstrap and React</li><li>Node.js, express, MongoDB and Mongoose</li><li>C#, Unity and Python</li><li>FruityLoops</li></ul></p></div>
        </section>
)
  }
}
class Contact extends React.Component{
  render(){
    return( <section className="primary-section">
        <div className="text-tile">Contact<p>Have a question, comment, or interested in hiring me?</p><p> Gmail me at mike.winser</p></div>
        </section>)
  }
}
class Error extends React.Component{
  render(){
    return( <section className="primary-section">
        <div className="title">Oh Geez. There's been an error. How <strong>embarassing</strong>.</div></section>)
  }
}


ReactDOM.render(<App/>, document.getElementById("root"));

