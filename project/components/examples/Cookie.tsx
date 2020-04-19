import * as React from "react";
import * as cookies from "js-cookie";
import { Dynamic } from "monobase";
import styles from "components/theme.css";

const CookieKey = "CookieComponentValue";

class Cookie extends React.Component<{}, { value: string }> {
  state = { value: "" };

  componentDidMount() {
    this.setState({ value: cookies.get(CookieKey) || "" });
  }

  onChange = (event) => {
    this.setState({ value: event.target.value });
    cookies.set(CookieKey, event.target.value);
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        placeholder="Type something…"
        onChange={this.onChange}
        className={styles.pill}
        style={{
          width: "100%",
          textAlign: "center",
          border: "1px solid #EEE",
        }}
      />
    );
  }
}

export default Dynamic(Cookie);
