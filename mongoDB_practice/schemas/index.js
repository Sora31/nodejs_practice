const mongoose = require('mongoose');

module.exports = () => {
    const connect = () => {
        if(process.env.NODE_ENV !== 'production'){
            mongoose.set('debug', true);
        }
        mongoose.connect('mongodb://root:mongopwd@127.0.0.1:27017/admin', 
        // {useNewUrlParser: true},
        // (error) => {
        //     if(error){
        //         console.error('mongo DB connect errorrror', error);
        //     }else{
        //         console.log('mongo DB connect complete')
        //     }
        // })
        {
            dbName: 'nodejs',
        }, (error) => {s
            if(error){
                console.log('mongo DB connect error', error);
            }else{
                console.log('mongo DB connect complete');
            }
        });
    };
    connect();
    mongoose.connection.on('error', (error) => {
        console.error('mongo DB connect error', error);
    });
    mongoose.connection.on('disconnected', () => {
        console.error('mongo DB disconnection, restart connect..');
        connect();
    });
    require('./user');
    require('./comment');
}