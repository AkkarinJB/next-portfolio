const url = "https://jsonplaceholder.typicode.com/todos";

const fetchTodos = async () => {
  const res = await fetch(url);
  const data = await res.json();
  //console.log(data);
  console.log(res);

  return data

};

const AboutPage = async () => {

  const data = await fetchTodos()
  console.log(data);
  return (
    <div>
      About Page
      {data.map((item, index) => {
        return <li key={index}>{item.title}</li>
      })}
    </div>
  )
}
export default AboutPage