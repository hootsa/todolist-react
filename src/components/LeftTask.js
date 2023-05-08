function LeftTask(props) {
  const data = props.listData;
  const checkFilter = data.filter((item) => !item.checked).length;
  return <h3> You have {checkFilter} tasks to do</h3>;
}

export default LeftTask;
