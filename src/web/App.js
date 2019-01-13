import React, { Component } from 'react';
import { triangleDrawer, clearCanvas } from '../utils/triangle-drawer'
import IntroBackground from '../assets/maxresdefault.jpg'
import TriangleSample from '../assets/2000px-Triangle-scalene.svg.png'
import TriangleTypes from '../assets/images.png'
import Github from '../assets/Octicons-mark-github.svg'
import Linkedin from '../assets/Linked_in_alt.svg'
import './App.css';

const texts = {
  en:{
    appName: `◄TriangleTyper►`,
    intro: `triangles come in diffrent forms, some are small some are big
    by the way pepole give specific kind of trinagles a name.
    describing the reason behind those naming need two cup of coffee
    and a philosophical conversation with a enthusaistic mathematical minded person.
    if you you found one invite us; seriosly do; yeah.
    `,
    descriptionHeading: `Triangle Type Determiner`,
    description: `This program expects three numbers as sides of the triangle you want to indetify
    and as the result will determine the type of triangle that can be build with those number or 
    infroms you that these numbers can't form a triangle`,
    inputDescription: `Enter the triangle sides length`
  },
  fa:{
    appName: `◄ نوع مثلث ►`,
    intro: `مثلث ها انواع زیادی دارن ک  مردم به نوع خاصی از مثلث یک اسم نسبت دادن
    اینکه این اسم از کجا اومده و بحث راجع بش به دو لیوان قهوه و ی ادم ریاضی دان و روانی نیاز داره
    ک ساعت ها عمرمون رو تلف کنیم ک چرا اسم این شی رو گذاشتن فلان
    `,
    descriptionHeading: `تعیین کننده ی نوع مثلث`,
    description: `این برنامه 3 عدد رو به عنوان ورودی میگیره و به شما میگه ک آیا این 3 عدد یک  مثلث رو تشکیل میدن یا نه. اگه این
    3 عدد یک مثل رو تشکیل بدن، نوع مثل رو هم به شما خواهد گفت`,
    inputDescription: `اضلاع مثل را وارد کنید`
  }
}
const persianEquvilant = {
  'A scalene triangle': "مثلث مختلف الاضلاع",
  'An isosceles triangle': "مثلث متساوی الاضلاع",
  'An equilateral triangle': "مثلث متساوی الاضلاع",
  'These values can\'t form a triangle': "این اعدا یک مثل رو تشکیل نمیدهند",
  'non-zero positive values are expected': "اعداد بزرگتر یا مساوی صفر وارد کنید",
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      runAnimation : false,
      language : 'en',
      side1 : 4,
      side2 : 5,
      side3 : 7,
    }
    this.canvas = React.createRef()
    this.inputChange = this.inputChange.bind(this)
    this.typeFetcher = this.typeFetcher.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  typeFetcher () {
    const { side1, side2, side3 } = this.state
    fetch(`/typeDeterminer?side1=${side1}&side2=${side2}&side3=${side3}`).then(
      (response) => response.json().then(
        (json) => {
          if(json.isTriangle){
            triangleDrawer(side1, side2, side3, this.canvas.current)
          }else{
              clearCanvas(this.canvas.current)
          }
          this.setState({
            message : this.state.language === 'fa' ? persianEquvilant[json.description] : json.description,
            isTriangle : json.isTriangle
          })
        }
      )
    ).catch(function() {console.log(';(');});
  }

  handleChange(event) {
    this.setState({
      runAnimation: true,
      language: event.target.value
    });
    //pretty naive solution, it can be better 
    setTimeout(() => {
      this.setState({runAnimation:false})
    }, 1500);
  }

  inputChange = ( event )=> {
    this.setState(
      { [event.target.name] : event.target.type === 'number' ? parseFloat(event.target.value): 'nope'},
        this.typeFetcher
    )
  }
  
  componentDidMount = () => {
    this.typeFetcher()
  }
  
  render() {
    const lang = this.state.language
    const shouldRunAnimation = this.state.runAnimation
    return (
      <React.Fragment>
        <header className="header">
          <a href="/" className="app-name">{texts[lang].appName}</a>
          <nav className="nav-container">
            <a href="https://github.com/Mhmdrza/triangleTypeDeterminer" className="link-icon">
              <img src={Github} alt=""/>
            </a>
            <a href="https://www.linkedin.com/in/mohammadrezaala/" className="link-icon">
              <img src={Linkedin} alt=""/>
            </a>
            <select className="header_button" value={this.state.language} onChange={this.handleChange}>
              <option value="en">english</option>
              <option value="fa">فارسی</option>
            </select>
          </nav>
        </header>
        <div className={`${shouldRunAnimation ? 'slide' : ''} app-root ${ this.state.language === "fa"? 'app-root--rtl' : ''}`}>
          <div className="header-corrector"/>
          <main className="app">
            <div className="app_inputs">
              <p> {texts[lang].inputDescription} : </p>
              <span>a :  <input value={this.state.side1} name="side1" type="number" onChange={this.inputChange}/></span>
              <span>b :  <input value={this.state.side2} name="side2" type="number" onChange={this.inputChange}/></span>
              <span>c :  <input value={this.state.side3} name="side3" type="number" onChange={this.inputChange}/></span>
            </div>
            <div className="app_result">
              <canvas ref={this.canvas} style={{transform0 : 'rotate(-90deg)'}} width="200" height="200">
                <p>Some default content can appear here.</p>
              </canvas>
              <p className="app-link">
                {this.state.message}
              </p>
            </div>
          </main>
          <section className="description">
            <h1>{texts[lang].descriptionHeading}</h1>
            <div>
              <p className="description_text">{texts[lang].description}</p>
              <img src={TriangleTypes} className="" alt="types-of-triangles"/>
            </div>
          </section>
          <section className="intro">
            <p className="intro_text">{texts[lang].intro}</p>
            <img src={TriangleSample} className="intro_forground-image" alt='sample-triangle' />
            <img src={IntroBackground} className="intro_background-image" alt=""/>
          </section>
          <footer className="footer">
            <p>@copyRight by me</p>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
