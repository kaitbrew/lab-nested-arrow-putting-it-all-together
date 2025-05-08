function createLoginTracker(userInfo) {
  let attemptCount = 0;
  let isLocked = false;
  let loggedIn = false;
  const passwordCheck = (passwordAttempt) => {
    if (passwordAttempt === userInfo.password && attemptCount < 3) {
      attemptCount = 0;
      loggedIn = true;
      return "Login successful";
    } else if (passwordAttempt != userInfo.password && attemptCount < 3) {
      attemptCount += 1;
      return `Attempt ${attemptCount}: Login failed`;
    } else {
      isLocked = true;
      return "Account locked due to too many failed login attempts";
    }
  };
  return passwordCheck;
}

module.exports = {
  ...(typeof createLoginTracker !== "undefined" && { createLoginTracker }),
};
