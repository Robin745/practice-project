import React from 'react';
import './Text.css';

const Text = () => {
    return (
        <div className='text'>
            <h2>How React Works ??</h2>
            <p>
                <b>Answer:  </b> <br></br>
                React is a javaScript library for Web Application Developement.
                React Contains reuseable javaScript codes for Creating the User Interface (UI)
                called Components.
                React components work similarly to JavaScript functions as they accept arbitrary
                inputs called properties or props.<br></br>

                React has some Core features like JSX. JSX is javaScript syntaxt extension
                used to create elements.Which allow to write HTML code inside javaScript code.
                Inside Components ReactDOM.render() function renders the React element on the
                Document Object Model (DOM) tree, describing the UI.<br></br>

                Document Object Model (DOM) presents a web page in a data tree structure.
                ReactJS stores Virtual DOM trees in the memory. By doing so, React can apply
                updates to specific parts of the data tree, which is faster than re-rendering
                the entirety of the DOM tree.<br></br>

                If there’s a change in data, ReactJS will generate a new Virtual DOM tree
                and compare it with the previous one to find the quickest possible way to
                implement changes in the real DOM. This process is known as diff algorithm.

            </p>
            <h2>Difference Between Props vs State</h2>
            <p>
                <b>Props:  </b> <br></br>
                React uses Components to Divide the UI.
                Components are like JavaScript Functions as they accepts inputs
                called properties or Props. In react The props is passed
                from one component to another. Props is Immutable (cannot be modified).
                Props can be used with state and functional components. it's read only.<br></br>

                <b>State:  </b> <br></br>
                State is a JavaScript object that represents a part of a component.
                It changes whenever a user interacts with the application,
                rendering a new UI to reflect the modifications.
                State Data is passed within the component only. State data can be modified.
                State can be used only with the state components/class component (Before 16.0).
                State data can be read and write.
            </p>
        </div>
    );
};

export default Text;