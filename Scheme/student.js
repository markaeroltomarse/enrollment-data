const student = {
    studSID:{
        type:Number,
        required:true,
        description:"Student School ID",
    },

    studLname:{
        type:String,
        required:true,
        description:"Student Last Name",
    },

    studFname:{
        type:String,
        required:true,
        description:"Student First ID",
    },

    studMname:{
        type:String,
        required:true,
        description:"Student Middle Name",
    },

    studYlvl:{
        type:String,
        required:true,
        description:"Student Year Level",
    },

    studAdd:{
        type:String,
        required:true,
        description:"Student Address",
    },

    studContact:{
        type:String,
        required:true,
        description:"Student Contact Number",
    },

    studParent1:{
        type:String,
        required:true,
        description:"Parent / Guardian Name",
    },

    studParent2:{
        type:String,
        required:true,
        description:"Parent / Guardian Name",
    },

    studUname:{
        type:String,
        required:true,
        description:"Student Username",
    },
    
    studPass:{
        type:String,
        required:true,
        description:"Student Password",
    },
    
    grades:{
        type:Array,
        required:false,
        description:'Grades each Subjects',
        // 50 
        example:[ // if (the total units of entire curriculum ) is equal
            {
                subjectID:'ID from subject table',
                subjectUnit:3, 
                grade:1.0
            },
            'so on...'
        ]
    },

    created:{
        type:String,
        required:true,
        default:Date.now()
    }
}