var attributes =
{
    occupation :[
        'Administrator', 
        'Junior Doctor', 
        'Brain Surgeon', 
        'Health Visitor', 
        'Midwife', 
        'Physiotherapist', 
        'Dietician', 
        'Osteopath', 
        'Radiographer'
    ],
    area:[
        'Wellbeing', 
        'Nutrition', 
        'Midwifery', 
        'Surgery', 
        'Dental', 
        'Physcology', 
        'Administration', 
        'Social Care', 
        'Radiography'
    ],
    qualification:[
        'Radiography Cert',
        'Nutritionist Level 3',
        'Osteopathy Cert',
        'Certified Dental Practitioner',
        'Certified Open Surgeon',
        'Midwifery Cert',
        'Critical Care Nurse',
        'Lactation Certified'
    ],
    experience:[
        'Post-Graduate', 
        'Newly Qualified', 
        '1-3 Years', 
        '4-6 Years', 
        '7-9 Years', 
        '10 Years +'
    ],
    personalAttribute:[
        'Team Leader', 
        'Team Player', 
        'Good Communicator', 
        'Outgoing', 
        'Empathy', 
        'Patience', 
        'Calm under pressure', 
        'Innovative', 
        'Confident'
    ]
}

var userModel = {

    forename:'',
    surname:'',
    email:'',
    password:'',
    role:'',
    disabled:'',
    occupation:[],
    area:[],
    qualification:[],
    experience:[],
    personalAttribute:[],
    bio:"",
    linkedinURL:"",
}

var users =[
            {
                forename:'Abir',
                surname:'Dutta',
                email:'abir.caesar@gmail.com',
                password:'abir',
                role:'candidate',
                disabled:false,
                occupation:["Administrator",  "Dietician"],
                area:["Administration", "Dental", "Midwifery"],
                qualification:[],
                experience:[],
                personalAttribute:[],
                bio:"",
                linkedinURL:"",
            }
]