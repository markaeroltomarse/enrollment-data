const companyinfo = {
    schAdd:{
        type:String,
        required:true,
        description:'School address',
    },

    schCont:{
        type:String,
        required:true,
        description:'School Contact number'
    },

    schMap:{
        type:String,
        required:true,
        description:'Longtitude and latitude of the school in map'
    },

    schMisson:{
        type:String,
        required:true,
        description:'School Mission'
    },
    
    schVission:{
        type:String,
        required:true,
        description:'School Vission'
    },

    schAbout:{
        type:String,
        required:true,
        description:'School About'
    },

    schDepts:{
        type:Array,
        required:true,
        description:'ex ["BSIT", ....]'
    },

    schoolQuarter:Array, 
    // [{quarterID:124214, quarter:'1st'}, ...]
}


const users = {
    userID:{
        type:String,
        required:true,
        //ID from registrar, teacher, owner or studentInfo table etc
    },

    userType:{
        type:String,
        required:true,
        //registrar, ownner etc
    },

    username:{
        type:String,
        required:true,

    },

    password:{
        type:String,
        required:true
    }
}