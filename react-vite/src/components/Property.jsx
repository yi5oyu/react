import logo from "../assets/react.svg";
import styles from "./buttons/ButtonA.module.css";

function Property({ imgalt }) {
  const styleA = {
    backgroundColor: "blue",
    margin: "12px",
    fontWeight: "600",
  };
  const styleB = {
    backgroundColor: "green",
    margin: "10px",
    fontWeight: "200",
  };

  const isStyle = false;
  return (
    <div>
      {/* HTML, JS이 같은 키워드를 가진경우 이름 바뀜 */}
      <label htmlFor="name">for</label>
      <input
        type="text"
        id="name"
        className="input"
        autocomplete="off"
        maxlength={20}
        spellcheck={true}
        readonly={false}
        tabindex={0}
        placeholder="class, autocomplete, maxlength, spellcheck, readonly, tabindex"
      />
      <img src={logo} alt={imgalt} width={256} height={228} />
      <div
        style={
          isStyle ? styleA : { ...styleB, fontWeight: "900", fontSize: "16px" }
        }
      >
        AA
      </div>
      <button className={styles.button}>B</button>
    </div>
  );
}

export default Property;
