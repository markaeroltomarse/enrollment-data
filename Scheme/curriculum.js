const curriculum = { 
    curCode:{
        type:String,
        required:true, //NOT NULL
        description:'Curriculum code'
    },

    curSy:{
        type:String,
        required:true, //NOT NULL
        description:'SY'
    },

    subjects:{
        type:Array,
        required:true, //NOT NULL
        description:'Subjects from subjects table',
        "Example Value": [
            {
                subjectID:'ID from subject table',
                sem:'1 or 2',
                year:'1,2,3 or 4',
                number:'between 1 to (total of subjects from first year to fourth year)'
            }
        ],
    },

    created:{
        type:String,
        required:true,
        default:Date.now()
    }
}

