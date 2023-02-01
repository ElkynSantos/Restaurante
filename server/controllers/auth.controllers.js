import { pool } from "../db.js";

const login = async (req, res) => {
   let result = await pool.promise().query("SELECT 1 + 1 as result");
   console.log(result);
   res.status(500).json({
     status: 'error',
     message: 'This route is not yet implemented',
   });
};

const resetPassword = (req, res) => {
   res.status(500).json({
     status: 'error',
     message: 'This route is not yet implemented',
   });
};

const logout = (req, res) => {
   res.status(500).json({
     status: 'error',
     message: 'This route is not yet implemented',
   });
};

export {
   login, resetPassword, logout
}