const Button = (props) => {
  //  Write your code here.
  const { styling, content } = props;
  return <button className={styling}>{content}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div>
      <h1 className="heading">Social Buttons</h1>
      <div className="button-container">
        <Button styling="yellow-button" content="Like" />
        <Button styling="white-button" content="Comment" />
        <Button styling="blue-button" content="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
