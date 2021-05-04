const env = process.env.NODE_ENV; // 'development' or 'production'

const local = {
    app: {
        port: parseInt(process.env.APP_PORT) || 3080
    },
    db: {
        host: process.env.MONGODB_HOST || 'localhost',
        port: parseInt(process.env.MONGODB_PORT) || 27017,
        database: process.env.MONGODB_DATABASE || 'mongo-test',
        username: '',
        password: '',
        extra_args: ''
    }
};

const development = {
    app: {
        port: parseInt(process.env.APP_PORT) || 3080
    },
    db: {
        host: process.env.MONGODB_HOST,
        port: parseInt(process.env.MONGODB_PORT) || 27017,
        database: process.env.MONGODB_DATABASE || 'mongo-dev',
        username: process.env.MONGODB_USERNAME,
        password: process.env.MONGODB_PASSWORD,
        extra_args: '/?replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false'
    }
};

const config = {
    local,
    development
};

module.exports = config[env];
