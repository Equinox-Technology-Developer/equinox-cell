import styles from "./HeroBanner.module.scss"

const HeroBanner = ({ title, subtitle, imageUrl, highlightedWord }) => {
  const parts = title.split(" ");
  let highlightedIndexes = [];

  for (let i = 0; i < parts.length; i++) {
    if (parts[i].toLowerCase() === highlightedWord.toLowerCase()) {
      highlightedIndexes.push(i);
    }
  }


  return (
    <div className={styles.hero_banner} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className={styles.hero_content}>
        <h1>
          {parts.map((part, index) => (
            <span key={index} className={highlightedIndexes.includes(index) ? 'highlight': ""}>
              {part}{' '}
            </span>
          ))}
        </h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroBanner;
