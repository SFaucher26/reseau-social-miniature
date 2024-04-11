// controllers/userController.js
import User from "../models/userModel.js";

export async function getUserByIdController(req, res) {
  const requestedId = req.params.id;
  const user = await User.findById(requestedId);
  if (user) {
    res.json({ id: user.id, username: user.username });
  } else {
    res.status(404).json({ error: "User not found" });
  }
}

export function getCurrentUser(req, res) {
  const user = req.user;
  if (user) {
    res.json({ id: user.id, username: user.username });
  } else {
    res.status(500).send("Internal error");
  }
}

export async function createUser(req, res) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(500).send("Invalid input");
  }

  const newUser = new User(username, email, password);
  const saveUser = await newUser.save().catch((error) => {
    res.status(500).send(
      `User already exist.
        <script>
          setTimeout(()=>{
            document.location.href = '/register.html'
          }, 3000)
        </script>
        `
    );
    console.error(error);
  });
  if (saveUser) {
    res.redirect(201, "login.html");
  }
}
