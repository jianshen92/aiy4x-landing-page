    gumshoe.init({offset: 72});
    var scroll = new SmoothScroll('a[href*="#"]', {offset: 72});

    var typed = new Typed("#circular-x-text", {
      /**
       * @property {array} strings strings to be typed
       * @property {string} stringsElement ID of element containing string children
       */
      strings: ["X", "Sentiment", "X", "Q&amp;A"],

      /**
       * @property {number} typeSpeed type speed in milliseconds
       */
      typeSpeed: 50,
      stringsElement: null,

      /**
       * @property {boolean} loop loop strings
       * @property {number} loopCount amount of loops
       */
      loop: true,
      loopCount: Infinity,

      /**
       * @property {number} backDelay time before backspacing in milliseconds
       */
      backDelay: 1500,

      /**
       * @property {boolean} showCursor show cursor
       * @property {string} cursorChar character for cursor
       * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
       */
      showCursor: false,
      cursorChar: '|',
      autoInsertCss: true,
    });