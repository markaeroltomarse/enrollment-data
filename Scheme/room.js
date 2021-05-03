const room = {
    
    roomNumber:{
        type:String,
        required:true,
        description:'Class room Number'
    },

    available:{
        type:Boolean,
        required:true,
        description:'Room availability',
    },

    roomDay:{
        type:String,
        required:true,
        description:'ex. MON'
    },

    roomBatchTime:{ //gagawin ni admin to monday to sunday (sunday if may klase parin sakanila), each day hahatiin nya mga oras ng mag kakasunod para pag gagawa ng sechdule para sa isang section ay pipick nalang sila ng time sa room na ito dipende kugn anong araw nila gusto. imagine mo ung buong pizza ay katumbas ng 24hrs habang nababawasan ng slice ung pizza nauubos madin ung mga available time sa araw na iyon hangang sa maubos at pumili sa ibang araw.
        type:Array,
        required:true,
        description:'The day have list of each batch of time to this room',
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
    }

}