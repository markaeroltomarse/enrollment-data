const Schedule = {
    schedYear:{
        type:String,
        required:true,
        description:'Schedule in School Year'
    },

    schedSection:{
        type:String,
        required:true,
        description:'Sections name',
    },

    schedSession:{
        type:String,
        required:true,
        description:'AM or PM'
    },

    schedCurCode:{
        type:String,
        required:true,
        description:'Schedule Curriculum Code', 
    },

    schedDay:{
        type:String,
        required:true,
        description:'ex. MON' //Since, example for monday ung gagawing schedule bali dapat pag pipick ng room with time dapat mga monday lang ang pickable at naka disable ung the rest na araw sa mga rooms nayon.
    },

    schedSubjects:{ //mga subject na nakalista para 
        type:Array,
        required:true,
        description:'Subjects list for this schedule',
        'Example value' : [
            {
                subjectID:'ID From subjects table',
                roomID:'ID from room table', // Kaya ID lang para hindi na maging redundant at malakas kumain ng space sa database, bali bago natin ipasa sa client side palitan muna nanaten ito ng full information ng ID na ito.
                batchTime:{ //Example value na pinick don sa room
                    id:'f12314-21dsd12-2213',
                    startTime:'07:00AM', //pero ito ay naka 24 Hour Clock Type para madali i-compute sa pag program kung kakailanganin.
                    endTime:'10:00AM', //coconvert nalang natin to AM-PM pag ididisplay na natin sa client.
                    available:true,
                    occupiedBy:'(Section Name) - (Subject Name)'
                },
            },
            {'so on..':'...'}
        ]
    },

   

    
}