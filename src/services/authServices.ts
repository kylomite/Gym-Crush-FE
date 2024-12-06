
export const login = async (email: string, password: string): Promise<any> => {
  try {
    const response = await fetch("https://polar-sea-79310-f0dac2d5e9a7.herokuapp.com/api/v1/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const signUp = async (firstName: string, lastName: string, email: string, password: string): Promise<any> => {
  try {
    const response = await fetch("https://polar-sea-79310-f0dac2d5e9a7.herokuapp.com/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Sign up failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error Signing up:", error);
    throw error;
  }
}