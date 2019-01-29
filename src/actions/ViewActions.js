export const ASIDE_MODE_CHANGE = "ASIDE_MODE_CHANGE";

export function changeAsideModeAction(mode, extra) {
    return {
      type: ASIDE_MODE_CHANGE,
      aside: { mode, extra }
    };
  }
