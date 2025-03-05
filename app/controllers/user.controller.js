const db = require('../models');
const user = db.user;

exports.findAllUser = (req, res) => {
    //res.send("Find");
    try {
        user.findAll() //เป้น Method ของ Sequelize ที่ใช้ในการดึงข้อมูลทั้งหมดจาก Database
            .then(data => {
                res.json(data); //ส่งข้อมูลทั้งหมดที่ดึงมาจาก Database กลับไปที่ Frontend
            })
            .catch(error => {
                res.json({ message: error.message }); //แสดง Error ที่เกิดขึ้น
            });

    } catch (error) {
        console.log(error);
    }
};

exports.createUser = (req, res) => { //This is API for create user
    try {
        if (!req.body.supplier || !req.body.products  || !req.body.purchaseorders || !req.body.purchaseorderdetails || !req.body.inventory || !req.body.warehouses || !req.body.payments || !req.body.shipments ) {
            res.status(400).json({ message: "Not empty!" })
            return;
        }

        const newUser = {
            supplier: req.body.supplier,
            products: req.body.products,
            purchaseorders: req.body.purchaseorders,
            purchaseorderdetails : req.body.purchaseorderdetails,
            inventory : req.body.inventory,
            warehouses: req.body.warehouses,
            shipments: req.body.shipments,
            payments: req.body.payments
           
        }
        user.create(newUser) //เรียกใช้งาน Model ที่เราสร้างไว้ และนำไปใช้สร้าง table ใน Database
            .then(data => {
                res.status(200).json({ message: "User created!" }) //
            })
            .catch(error => {
                res.status(500).json({ message: error.message })
            });

    } catch (error) {
        console.log(error.message)
    };
};

exports.findUserById = (req, res) => {
    try {
        const id = req.params.id; //รับค่า id ที่ส่งมาจาก Frontend
        user.findByPk(id) //ใช้ Sequelize ในการหาจาก ID ที่รับมา
            .then(data => {
                res.status(200).json(data); //ถ้าเจอ ส่ง Status 200 พร้อมกับข้อมูลจากที่ดึงมา
            })
            .catch(err => {
                res.status(404).json({ message: 'error' }) //ถ้าไม่เจอ ส่ง Status 404 Not found
            })

    } catch (error) {
        console.log(error.message);

    }

};

exports.updateUserById = (req, res) => {
    try {
        const id = req.params.id;
        const updateUser = {
            supplier: req.body.supplier,
            products: req.body.products,
            purchaseorders: req.body.purchaseorders,
            purchaseorderdetails : req.body.purchaseorderdetails, 
            inventory : req.body.inventory,
            warehouses: req.body.warehouses,
            shipments: req.body.shipments,
            payments: req.body.payments

        }
        user.update(updateUser, { where: { id: id } })
            .then(data => {
                if (data == 1) {
                    res.status(200).json({ message: "Updated Succesfully!" })
                }
                else {
                    res.status(400).json({ message: "Updated Failed!" })
                }

            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    } catch (error) {
        console.log(error);

    }
};

exports.deleteUserById = (req, res) => {
    try {
        const id = req.params.id;
        user
            .destroy({ where: { id: id } })
            .then(data => {
                if (data == 1) {
                    res.status(200).json({ message: "User deleted Successfully!" });
                }
                else {
                    res.status(200).json({ message: "User deleted Failed!" });
                }
            })
            .catch(err => {
                res.status(404).json({ message: err.message })
            });

    } catch (err) {
        console.log(err);
    }
};
