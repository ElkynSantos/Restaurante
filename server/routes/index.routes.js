// import { Router } from "express";
// import { pool } from "../db.js";

// const router = Router();

// router.get("/login", async (req, res) => {
//    try {
//       const result = await pool.promise().query("SELECT 1 + 1 as result"); //
//       console.log(result[0][0].result);
//       res.status(200).send({ que: result[0][0].result });

//    } catch (error) {
//       console.log("Error", error);
//       res.status(500).send("Error");
//    }
// });

// router.post("/login", (req, res) => {
//    try {
//       const { username, password } = req.body;

//       console.log(username, password);
//       res.status(200).send({ username, password });
//    } catch (error) {
//       console.log("Error", error);
//       res.status(500).send(error);
//    }
// });

// export default router;
