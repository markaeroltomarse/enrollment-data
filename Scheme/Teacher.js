const Teacher = {
    empID:{
        type:String,
        required:true,
        description:'Teacher ID / Employee ID'
    },

    techLname:{
        type:String,
        required:true,
        description:'Last name'
    },

    techFname:{
        type:String,
        required:true,
        description:'First name'
    },

    techMname:{
        type:String,
        required:true,
        description:'Middle name'
    },

    techRank:{
        type:String,
        required:true,
        description:'Teacher Rank'
    },

    techDept:{
        type:String,
        required:true,
        description:'Teacher Department'
    },

    techStatus:{
        type:Boolean,
        required:true,
        description:'Status of the teacher'
    },

    techUname:{
        type:String,
        required:true,
        description:'Teacher Username'
    },

    techPass:{
        type:String,
        required:true,
        description:'Teacher Password'
    },
}