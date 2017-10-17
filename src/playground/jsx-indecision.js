console.log('App.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'Put you life in the hands of a computer',
  options: []
};

const appRoot = document.getElementById('app');

const removeAll = () => {
  app.options = [];
  formOptions();
};

const onFormSubmit = (event) => {
  event.preventDefault();
  formOptions();

  const option = event.target.elements.option.value;

  if(option) {
    app.options.push(option);
    event.target.elements.option.value = '';
    formOptions();
  }
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const formOptions = () => {
  //JSX - JavaScript XML
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options'  : 'No Options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>;
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button type="submit">Add Option</button>
      </form>
    </div>
  );

ReactDOM.render(template, appRoot);
};

formOptions();
