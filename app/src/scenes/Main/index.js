import { main } from '../../utils/texts';

const styles = {
  subTopText: {
    fontSize: 16,
    marginTop: 0,
  },
  topText: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 0,
    marginTop: 8,
  },
};

export default function Main() {
  return (
    <>
      <p style={styles.topText}>{main.topText}</p>
      <p style={styles.subTopText}>{main.subTopText}</p>
    </>
  );
}
