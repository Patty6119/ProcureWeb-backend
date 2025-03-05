module.exports = (sequelize, dataType) => {
    const User = sequelize.define("users", {
        id: {
            type: dataType.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
       
        supplier: {
            type:dataType.STRING,
            allowNull: false 
        },
        
        products: {
            type:dataType.STRING,
            allowNull: false 
        },
        
        purchaseorders: {
            type:dataType.STRING,
            allowNull: false 
        },
        
        purchaseorderdetails : {
            type:dataType.STRING,
            allowNull: false 
        },
        
        inventory: {
            type:dataType.STRING,
            allowNull: false 
        },
        
        warehouses: {
            type:dataType.STRING,
            allowNull: false 
        },
        
        shipments: {
            type:dataType.STRING,
            allowNull: false 
        },
        
        payments: {
            type:dataType.STRING,
            allowNull: false 
        }

    });

    return User;
};
