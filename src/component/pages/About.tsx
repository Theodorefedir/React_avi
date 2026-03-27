import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>Про наш магазин</h1>
        <p>
          Ласкаво просимо до <strong>Магазину</strong> – вашого улюбленого
          магазину книг! Ми пропонуємо широкий вибір літератури для читачів
          будь-якого віку та смаку. Тут ви знайдете як популярні бестселери, так
          і рідкісні видання.
        </p>
        <p>
          Наша мета – зробити читання доступним та приємним. Ми гарантуємо
          якість та швидку доставку, а також завжди готові допомогти у виборі
          книги.
        </p>
        <button
          className={styles.button}
          onClick={() => alert("Поки не дізнаєтесь!")}
        >
          Дізнатися більше
        </button>
      </div>
    </div>
  );
}