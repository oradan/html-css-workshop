import { useEffect, useState } from "react";
import Card from "../components/Card";
import { NewsDto } from "../dtos/NewsDto";

export default function NewsList() {
  const [news, setNews] = useState<NewsDto[]>([]);
  useEffect(() => {
    console.log("In useEffect");

    fetch("/resources/news.json")
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error("Error fetching news:", error));

    console.log("news", news);
  }, []);

  console.log("In news component", news);
  return (
    <main className="main-content">
      <div className="features">
        {news.map((n: NewsDto) => (
          <Card
            key={n.title}
            title={n.title}
            imgSrc={n.image}
            imgAlt={n.title}
            description={n.content}
          />
        ))}
      </div>
    </main>
  );
}
