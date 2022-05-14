const template = {
  head: {
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans:400,600,700",
      },
    ],
  },
};

const styles = {
  StyleGuide: {
    "@global body": {
      font: 'normal 400 14px "Open Sans", sans-serif',
    },
    "@global *": {
      boxSizing: "border-box",
    },
    "@global p": {
      padding: "8px 0",
    },
  },
};

module.exports = {
  template,
  styles,
};
