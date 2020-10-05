import React, { Component } from "react";
import './App.css';
import MyTestComponent from './MyTestComponent'
import DefaultPropsTest from './DefaultPropsTest'
import TypePropsTest from './TypePropsTest'
import NumberPropsTest from './NumberPropsTest'
import ConstructorPropsTest from './ConstructorPropsTest'
import ClickEventPropsTest from './ClickEventPropsTest'
import NonConsEventPropsTest from './NonConsEventPropsTest'
import EventPractice from './event/EventPractice'
import ChangeEventPrac from './event/ChangeEventPrac'
import ReadChangeEventContent from './event/ReadChangeEventContent'
import ChangeClickEventTest from './event/ChangeClickEventTest'
import ChangeClickEventHandler from './event/ChangeClickEventHandler'
import ChangeClickEventHandlerNonCons from './event/ChangeClickEventHandlerNonCons'
import IdPwEventPrac from './event/IdPwEventPrac'
import AddEnterEvent from './event/AddEnterEvent'
import BGTest from './reference/BGTest'
import RefBoxTest from './reference/RefBoxTest'
import RefBoxBottomTest from './reference/RefBoxBottomTest'
import IterationSample from './repeat/IterationSample'
import StateBasedIteration from './repeat/StateBasedIteration'
import StateBasedEventIteration from './repeat/StateBasedEventIteration'
import LifeCycleSample from './lifecycle/LifeCycleSample'

class App extends Component {
    render() {
      const reactText = 'Golang'
      const condition = true
      const style = {
      backgroundColor: 'gray',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50
      }
      return (
          <div className="my-div">
              <h1>Hello ReactJs</h1>
              <h2>Golang Based ReactJs</h2>
              <h3>{ reactText }</h3>
              {
                  condition ? '참' : '거짓'
              }
              <p>{ condition && '가즈아' }</p>
              <div style={ style }></div>
              <form>
                First name: <br/>
                <input type="text" name="firstname"/><br/>
                Last name: <br/>
                <input type="text" name="lastname"/><br/>
              </form>
              // You can't write comment!
              /* this, too */
              <div
                  // we can do it!
              />
              <MyTestComponent name="Test"/>
              <DefaultPropsTest/>
              <TypePropsTest name={10}/>
              <NumberPropsTest name="Rust" age={7}/>
              <ConstructorPropsTest name="Verilog" age={7}/>
              <ClickEventPropsTest name="C#" age={3}/>
              <NonConsEventPropsTest name="C++" age={2}/>
              <EventPractice/>
              <ChangeEventPrac/>
              <ReadChangeEventContent/>
              <ChangeClickEventTest/>
              <ChangeClickEventHandler/>
              <ChangeClickEventHandlerNonCons/>
              <IdPwEventPrac/>
              <AddEnterEvent/>
              <BGTest/>
              <RefBoxTest/>
              <RefBoxBottomTest ref={(ref) => this.refBoxBottomTest=ref}/>
              <button onClick={() => this.refBoxBottomTest.scrollToBottom()}>Bottom</button>
              <IterationSample/>
              <StateBasedIteration/>
              <StateBasedEventIteration/>
              <LifeCycleSample/>
          </div>
      );
    }
}

export default App;
