const checkAnswer = (req, res) => {
  return res.status(200).json({ msg: "ok" });
};

module.exports = {
  checkAnswer,
};
