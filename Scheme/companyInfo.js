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
    }
}