export default function Home() {
  return (
    <div>
      <h1 data-test="heading">Developars.club</h1>
      <p>Esto es un MVP muy <em>Minimum</em></p>
      <div data-test="developer-profile-list">
        <div data-test="developer-profile"><h2>John Doe</h2></div>
        <div data-test="developer-profile"><h2>Jane Doe</h2></div>
        <div data-test="developer-profile"><h2>John Smith</h2></div>
      </div>
      <p>Hecho con ❤️ por la <a href="https://discord.gg/carlosazaustre">PintaAPis Developer Community</a></p>
    </div>
  );
}
