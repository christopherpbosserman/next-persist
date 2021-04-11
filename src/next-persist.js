const nextPersist = {};

// writes to local storage
nextPersist.writeStorage = (nextPersistConfig, state) => {
  const { key, allowList } = nextPersistConfig;

  if (typeof window !== 'undefined') {
    if (!allowList) {
      localStorage.setItem(key, JSON.stringify(state));
    } else {
      const allowedState = allowList.reduce((acc, cur) => {
        acc[cur] = state[cur];
        return acc;
      }, {});
      localStorage.setItem(key, JSON.stringify(allowedState));
    }
  } else {
    return { err: 'LocalStorage not found.' };
  }
};

// retrieves from local storage
nextPersist.getStorage = (key, state) => {

  if (typeof window !== 'undefined') {
    const clientState = localStorage.getItem(key);
    if (clientState) {
      const parsedClientState = JSON.parse(clientState);
      return {
        ...state,
        ...parsedClientState,
      };
    }
  }
  return state;
};

module.exports = nextPersist;
