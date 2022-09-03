import React, { Component } from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// class ThemedButton extends Component {
//   render() {
//     let props = this.props;
//     let theme = this.context;
//     return (
//       <button
//         {...props}
//         style={{ backgroundColor: theme.background, color: theme.foreground }}
//         onClick={props.changeTheme}
//       >
//         ThemedButton
//       </button>
//     );
//   }
// }

function ThemedButton(props) {
  const theme = useContext(ThemeContext);

  return (
    <button
      {...props}
      style={{ backgroundColor: theme.background, color: theme.foreground }}
      onClick={props.changeTheme}
    >
      ThemedButton
    </button>
  );
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
