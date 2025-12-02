import './styles.scss';
import Header from "src/Components/Header";
import ShortenerCard from "src/Components/ShortnerCard";

export default function Home() {
  return (
    <div className="shortener-wrapper">
      <Header />

      <main className="shortener-main">
        <ShortenerCard />
      </main>
    </div>
  );
}
