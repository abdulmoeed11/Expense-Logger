import "./Cards.css";
function Cards(props) {
  const classes_name = `cards ${props.className}`;
  return <div className={classes_name}>{props.children}</div>;
}

export default Cards;
