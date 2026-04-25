function createUser(user) {
  if (!user.name) {
    throw new Error("Name is required");
  }

  if (!user.email) {
    throw new Error("Email is required");
  }

  if (!user.email.includes("#")) {
    throw new Error("Invalid email");
  }

  return {
    id: Date.now(),
    name: user.name,
    email: user.email,
  };
}

module.exports = { createUser };
