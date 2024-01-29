import jwt from 'jsonwebtoken';

export default function protectRoute(handler) {
  return async (req, res) => {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ success: false, message: 'Token não fornecido.' });
    }

    try {
      const decoded = jwt.verify(token, 'seuSegredo');
      req.userId = decoded.userId;

      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ success: false, message: 'Token inválido.' });
    }
  };
}
