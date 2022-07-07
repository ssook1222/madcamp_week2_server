const SnakeNamingStrategy = require("typeorm-naming-strategies").SnakeNamingStrategy

module.exports = {
    "type": "mysql",
    "host": "magic-closet.cbh3ou7opo5s.ap-northeast-2.rds.amazonaws.com",
    "port": 3306,
    "username": "admin",
    "password": "1q2w3e4r!",
    "database": "magic_closet",
    "synchronize": true,
    "logging": true,
    "entities": [
        "src/entity/**/*.ts"
    ],
    "migrations": [
        "src/migration/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
    namingStrategy: new SnakeNamingStrategy()
}
