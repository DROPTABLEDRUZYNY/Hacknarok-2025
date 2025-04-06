const API_PATH = "http://localhost:8000/api";

export async function isLoggedIn(): Promise<boolean> {
  try {
    const res = await getUser();
    return res && res.email ? true : false;
  } catch {
    return false;
  }
}

export async function getUser() {
  const res = await fetch(`${API_PATH}/users/current/`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }

  return res.json();
}

async function getCsrfToken() {
  await fetch(`${API_PATH}/csrf/`, {
    method: "GET",
    credentials: "include",
  });

  const csrfToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("csrftoken="))
    ?.split("=")[1];

  return csrfToken;
}

export async function login(email: string, password: string) {
  const csrfToken = await getCsrfToken();

  const res = await fetch(`${API_PATH}/users/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrfToken || "",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.error || "Login failed");
  }

  return true; // becase res.ok==true
}

export async function logout() {
  let csrfToken = await getCsrfToken();
  const res = await fetch(`${API_PATH}/users/logout/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrfToken || "",
    },
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Logout failed");
  }
}

export async function register(email: string, password: string) {
  const res = await fetch(`${API_PATH}/users/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Registration failed");
  }

  return res.json();
}
