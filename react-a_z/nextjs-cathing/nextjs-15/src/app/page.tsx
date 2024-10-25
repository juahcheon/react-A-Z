export default async function Home() {

  const response = await fetch('http://localhost:3001/api/time');
  const {time} = await response.json();
  return (
    <div>
      HOME
      <h2>{time}</h2>
    </div>
  );
}
