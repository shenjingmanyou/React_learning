let VDOM;
// VDOM = React.createElement(
//   "div",
//   { id: "container" },
//   React.createElement(
//     "h1",
//     null,
//     "Hello, world!"
//   ),
//   React.createElement(
//     "p",
//     null,
//     "This is a simple example of a React component."
//   )
// );
const id = 'container';
const content = 'Hello, world!';
const frameWork = ['React', 'Angular', 'Vue'];

VDOM = (
  <div id={id}>
    <h1 className="title">{content}</h1>
    <p style={{color: 'purple', fontSize: '20px'}}>This is a simple example of a React component.</p>
    <ul>
      {frameWork.map((item, index)=> <li key={index}>{item}</li>)}
    </ul>
  </div>
)
console.dir(VDOM);
ReactDOM.render(VDOM, document.getElementById('root'));
