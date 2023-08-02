router.get('/profile', async (req, res) => {
  const user = await User.findByPk(req.session.userId);

  const books = await Book.findAll({ where: { userId: user.id } });

  
  res.render('profile', { user, books });
});
