import {
  CSSVariablesResolver,
  Checkbox,
  Input,
  PasswordInput,
  Switch,
  createTheme,
} from "@mantine/core";
import classes from "./theme.module.scss";

const labelStyle = {
  fontSize: "1rem",
  fontWeight: "500",
  color: "var(--input-label-color)",
};

// https://mantine.dev/styles/css-variables/#css-variables-resolver
export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--main-color": theme.colors.primary[7],
    "--input-label-color": theme.colors.primary[4],
    "--input-placeholder-color": theme.colors.primary[2],
    "--border-color": "#ebebeb",
    "--highlight-color": theme.colors.primary[2],
    "--input-highlight-color": theme.colors.primary[2],
    "--hover-background-color": theme.colors.primary[3],
    "--navbar-active-background-color": theme.colors.primary[5],
  },
  light: {},
  dark: {},
});

export const theme = createTheme({
  fontFamily: "Quicksand",
  headings: {
    fontWeight: "900",
    sizes: {
      h1: {
        fontSize: "2.6rem",
      },
    },
  },
  components: {
    Checkbox: Checkbox.extend({
      styles: {
        label: labelStyle,
      },
    }),
    InputWrapper: Input.Wrapper.extend({
      styles: {
        label: labelStyle,
      },
    }),
    Input: Input.extend({
      classNames: {
        input: classes.input,
      },
    }),
    PasswordInput: PasswordInput.extend({
      classNames: {
        input: classes.input,
        innerInput: classes.innerInput,
      },
    }),
    Switch: Switch.extend({
      styles: {
        label: labelStyle,
      },
    }),
  },
  primaryColor: "primary",
  defaultRadius: "sm",
  colors: {
    // https://mantine.dev/colors-generator/?color=F21616
    error: [
      "#ffe9e9",
      "#ffd1d1",
      "#fba0a1",
      "#f76d6d",
      "#f34141",
      "#f22625",
      "#f21616",
      "#d8070b",
      "#c10008",
      "#a90003",
    ],
    primary: [
      "#e0fbff",
      "#cbf2ff",
      "#9ae2ff",
      "#64d2ff",
      "#3cc5fe",
      "#23bcfe",
      "#09b8ff",
      "#00a1e4",
      "#0090cd",
      "#007cb5",
    ],
  },
});
