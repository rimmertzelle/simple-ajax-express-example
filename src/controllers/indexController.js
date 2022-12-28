export const getIndex = (req, res) => {
  res.render('index');
};

export const getNames = (req, res) => {
  res.json({ user: 'tobi' });
};
