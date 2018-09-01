export default [    
    {
        path:'/admin',
        name:'Admin',
        component:() => import('../../views/admin/home/home.vue'),
        children:[
            {
                path:'main',
                name:'Main',
                component:() => import('../../views/admin/home/main.vue'),
            }, 
            {
                path:'evaluation',
                name:'ProcedureEvalualtion',
                component:() => import('../../views/admin/home/evaluation.vue'),
            }, 
            {
                path:'diagnose',
                name:'ProcedureDiagnose',
                component:() => import('../../views/admin/home/diagnose.vue'),
            }, 
            {
                path:'head-evaluation',
                name:'HeadTeacherEvaluation',
                component:() => import('../../views/admin/home/head-teacher-evaluate.vue'),
            }, 
            {
                path:'',
                redirect:'main'
            }

        ],
        
    },   
    /* {
        path:'/admin-icon',
        name:'AdminIcon',
        component:() => import('../../views/admin/home/home-icon.vue'),
        children:[
            {
                path:'main',
                name:'Main',
                component:() => import('../../views/admin/home/main.vue'),
            },
            {
                path:'',
                redirect:'main',
            }            
        ]
    },  */
    
        
]