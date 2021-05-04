const room = {
    
    roomName:{
        type:String,
        required:true,
        description:'Class room Number'
    },

    roomYear:{
        type:Number,
        required:true,
    },

    available:{
        type:Boolean,
        required:true,
        description:'Room availability',
    },

    monday:{
        type:Array,
        required:true,
        description:'The day have list of each session to this room',
        example:[
            {
                id:'i-generate nalang natin using random method basta maging unique',
                startTime:'ex. 07:00AM', //pero ito ay naka 24 Hour Clock Type para madali i-compute sa pag program kung kakailanganin.
                endTime:'ex. 10:00AM', //coconvert nalang natin to AM-PM pag ididisplay na natin sa client.
                available:'true or false',
                occupiedBy:'if true, ex. (Section Name) - (Subject Name)'
            },

            {
                id:'i-generate nalang natin using random method basta maging unique',
                startTime:'ex. 10:00AM', //pero ito ay naka 24 Hour Clock Type para madali i-compute sa pag program kung kakailanganin.
                endTime:'ex. 12:00PM', //coconvert nalang natin to AM-PM pag ididisplay na natin sa client.
                available:'true or false',
                occupiedBy:'if true, ex. (Section Name) - (Subject Name)'
            },

            {
                id:'i-generate nalang natin using random method basta maging unique',
                startTime:'ex. 01:00PM', //pero ito ay naka 24 Hour Clock Type para madali i-compute sa pag program kung kakailanganin.
                endTime:'ex. 02:00PM', //coconvert nalang natin to AM-PM pag ididisplay na natin sa client.
                available:'true or false',
                occupiedBy:'if true, ex. BT603 - (Section Name) - (Subject Name)'
            },

            {
                //so on....
            },
        ]
    },

    tuesday:{
        type:Array,
        required:true,
        description:'The day have list of each session to this room',
        
    },

    wednesday:{
        type:Array,
        required:true,
        description:'The day have list of each session to this room',
        
    },

    thursday:{
        type:Array,
        required:true,
        description:'The day have list of each session to this room',
        
    },

    friday:{
        type:Array,
        required:true,
        description:'The day have list of each session to this room',
        
    },

    saturday:{
        type:Array,
        required:true,
        description:'The day have list of each session to this room',
        
    },
    created:{
        type:String,
        required:true,
        default:Date.now()
    }

}