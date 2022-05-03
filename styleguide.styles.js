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
  },
};

module.exports = {
  template,
  styles,
};
