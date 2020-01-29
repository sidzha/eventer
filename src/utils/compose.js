const compose = (...funcs) => comp => {
  return funcs.reduceRight((wraped, f) => f(wraped), comp);
};

export default compose;
