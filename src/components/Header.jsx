import trollFace from "../assets/Troll Face.png";
function Header() {
  return (
    <header>
      <img src={trollFace} alt="Troll Face" />
      <h3>Meme Generator</h3>
      <h4>React Course - Project 3</h4>
    </header>
  );
}
export default Header;
