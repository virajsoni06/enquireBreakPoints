import enquire from 'enquire.js';

const enquireBreakPoints = {};
const watchBreakpoint = (width, options) => {
  const defaults = Object.assign({}, {
    classPrefix: 'max'
  }, options);
  const breakpoint = `is_${width}`;
  enquire.register(`screen and (max-width: ${width}px)`, {
    deferSetup: true,
    setup() {
      document.body.classList.add(`${defaults.classPrefix}${width}`);
      enquireBreakPoints[breakpoint] = true;
    },
    match() {
      document.body.classList.add(`${defaults.classPrefix}${width}`);
      enquireBreakPoints[breakpoint] = true;
    },
    unmatch() {
      document.body.classList.remove(`${defaults.classPrefix}${width}`);
      enquireBreakPoints[breakpoint] = false;
    }
  });
}

export { enquireBreakPoints, watchBreakpoint };