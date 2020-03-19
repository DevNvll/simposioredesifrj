module.exports = {
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"]
  },
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#C8F9D0",
          200: "#94F3AC",
          300: "#5BDD89",
          400: "#32BC70",
          500: "#039051",
          600: "#027B51",
          700: "#01674E",
          800: "#005347",
          900: "#004541"
        },
        secondary: {
          100: "#D2E7FE",
          200: "#A6CCFD",
          300: "#79ADFB",
          400: "#5892F8",
          500: "#2268F4",
          600: "#1850D1",
          700: "#113BAF",
          800: "#0A288D",
          900: "#061C75"
        },
        success: {
          100: "#D1FBD1",
          200: "#A4F7AD",
          300: "#74E88B",
          400: "#4ED276",
          500: "#1EB55A",
          600: "#159B58",
          700: "#0F8253",
          800: "#09684B",
          900: "#055646"
        },
        warning: {
          100: "#FCF1CB",
          200: "#FAE199",
          300: "#F1C764",
          400: "#E3AC3D",
          500: "#D18606",
          600: "#B36C04",
          700: "#965403",
          800: "#793F01",
          900: "#643001"
        },
        danger: {
          100: "#FDD8D4",
          200: "#FBABA9",
          300: "#F37D85",
          400: "#E75A73",
          500: "#D82958",
          600: "#B91D56",
          700: "#9B1453",
          800: "#7D0D4B",
          900: "#670746"
        }
      }
    }
  }
}
