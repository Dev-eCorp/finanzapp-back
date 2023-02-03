const bcrypt = require("bcrypt");

const User = require("../model/user");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email }).then((user) => {
    if (user) {
      return res.json({
        message: "Ya existe un usuario registrado con este correo",
      });
    } else if (!name || !email || !password) {
      return res.json({ message: "Falta algun dato" });
    } else {
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) res.json({ err });
        else {
          const newUser = new User({
            name,
            email,
            password: hashedPassword,
          });
          newUser
            .save()
            .then((user) => {
              res.json({ message: "Usuario creado con exito", user });
            })
            .catch((err) => console.error(err));
        }
      });
    }
  });
};

module.exports = register;
