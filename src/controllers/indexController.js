exports.getIndex = (req, res) => {
  res.render("index");
};

exports.getNames = (req, res) => {
  res.json({ user: "tobi" });
};