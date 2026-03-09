const USERS_KEY = "neonstudio_users";
const SESSION_KEY = "neonstudio_session";

const isBrowser = () => typeof window !== "undefined";

const normalizeEmail = (email) => email.trim().toLowerCase();

const readUsers = () => {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const writeUsers = (users) => {
  if (!isBrowser()) return;
  window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const registerUser = ({ fullName = "", email, password }) => {
  const users = readUsers();
  const safeEmail = normalizeEmail(email);
  const exists = users.some((user) => normalizeEmail(user.email) === safeEmail);

  if (exists) {
    return { ok: false, message: "An account already exists with this email." };
  }

  const newUser = {
    id: Date.now().toString(),
    fullName: fullName.trim(),
    email: safeEmail,
    password,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  writeUsers(users);
  return { ok: true, user: { id: newUser.id, fullName: newUser.fullName, email: newUser.email } };
};

export const loginUser = ({ email, password }) => {
  const users = readUsers();
  const safeEmail = normalizeEmail(email);
  const user = users.find((item) => normalizeEmail(item.email) === safeEmail);

  if (!user || user.password !== password) {
    return { ok: false, message: "Invalid email or password." };
  }

  const sessionUser = {
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    loggedInAt: new Date().toISOString(),
  };

  if (isBrowser()) {
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
  }

  return { ok: true, user: sessionUser };
};

export const getSessionUser = () => {
  if (!isBrowser()) return null;
  try {
    const raw = window.localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};
