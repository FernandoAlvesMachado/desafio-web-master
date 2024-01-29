import protectRoute from '..//utils/protectRoute';

export default protectRoute(async (req, res) => {
  res.status(200).json({ success: true, message: 'Rota protegida.' });
});
