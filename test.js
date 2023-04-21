console.log('Loaded ESCO JS');

let style = `
    .navbar{
        background: #2490ef !important;
    }

    #editorjs .widget-control, #editorjs .widget-footer, #editorjs .timestamp{
        display: none;
    }

    #body div[data-page-route="Rerouting Links"]{
        display: none;
    }
    
    
    /* Job Card Styles */

    div.Inprogress{
        background: #6cc56f;
        background-color: #6cc56f;
    }
    
    div.Complete{
        background: #008000 !important;
        background-color: #008000 !important;
    }
    
    div.Open{
        background: #dcdcdc;
        background-color: #dcdcdc;
    }

    div.JO-Issue{
        background: #ffc107;
        background-color: #ffc107;
    }
    
    div.Overdue{
        background: #db8585;
        background-color: #db8585;
    }   
    
    div.Overdue.JO-Issue.Inprogress{
        background: #ffc107 !important;
        background-color: #ffc107 !important;
    }
    
    div.Overdue.JO-Issue.Complete{
        background: #008000 !important;
        background-color: #008000 !important;
    }    
    
    div.Overdue.JO-Issue{
        background: #ffc107 !important;
        background-color: #ffc107 !important;
    }    
    
    input[type=checkbox]:checked {
        background-size: 100%;
        background-repeat: no-repeat;
    }
    
    input[type="checkbox"]{
        background: #fff;
        transform: scale(1.3);
    }
    
    .frappe-list .result .list-row-container .level.list-row .level-left.ellipsis div:nth-child(8),
    .frappe-list .result .list-row-container .level.list-row .level-left.ellipsis div:nth-child(9),
    .frappe-list .result .list-row-container .level.list-row .level-left.ellipsis div:last-child,
    .frappe-list .result header .list-header-subject div:nth-child(8),
    .frappe-list .result header .list-header-subject div:nth-child(9),
    .frappe-list .result header .list-header-subject div:last-child,
    .list-row-like, .list-liked-by-me{
        display: none;
    }
    
    .list-row:hover{
        background-color: unset !important;
        text-decoration: underline;
        cursor: pointer;
    }
    
    .layout-side-section,
    .level-right{
        display: none;
    }
    
    .list-check-all, .list-liked-by-me, .list-row-like{
        pointer-events: none;
        opacity: 0
    }
    
    div[data-page-route="List/Job Card/List"]  div[data-fieldname="operation"], 
    div[data-page-route="List/Job Card/List"]  div[data-fieldname="name"]{
        pointer-events: none;
        display: none !important;
    }
    
    div[data-page-route="List/Job Card/List"] .list-row-container{
        opacity: 0.75;
    }
    
    .list-row-container.priority{
        opacity: 1 !important;
    }
    
    .priority-by-production-planner{
        box-shadow: 10px 0px 0px #06c inset;
    }
    
    @media (max-width: 976px){
        .container {
            transform: scale(1)
        }
        
        .page-head .custom-actions{
            display: unset !important;
        }
        
        .page-head .custom-actions button[data-label="Pause%20Job"], 
        .page-head .custom-actions button[data-label="Complete%20Job"]{
            display: none !important;
        }
        
        .page-title .title-area .title-text{
            // max-width: 300px
        }
    }
    
    .sidebar-toggle-btn{
        display: none;
    }
    
    button[data-label="Start%20Job"]{
        pointer-events: none;
        opacity: 0.5;
    }
    
    .submit-modal-on .modal.submit-modal, .submit-modal-on .modal-backdrop.show{
        display: none !important;
    }
    
    @media (min-width: 992px){
        div[data-page-route="List/Job Card/List"] .menu-btn-group{
            display: none !important;
        }
    }
    
    body[data-route="query-report/Capacity Reports"] .datatable div.dt-row div.dt-cell:last-child{
        display: none;
    }
    
    .page-title .title-area .title-text{
        max-width: unset !important;
    }





    /* Work Order */

    .datatable .dt-row {
        height: unset;
    }

    /* Production Table */
    .datatable .dt-scrollable{
        width: unset !important;
        height: unset !important; 
        max-height: unset !important;
    }

    .dt-row {
        position: relative !important;
        top: auto !important;
    }
    
    .dt-instance-1 .dt-cell, .datatable .dt-row{
        height: unset !important;
    }
    
    .list-row-head:hover:not(.list-row-head), .list-row:hover:not(.list-row-head) {
        background-color: unset !important;
    }
    
    .dt-instance-1 .dt-cell--header{
        text-align:center !important;
    }
    
    .layout-main-section .report-wrapper {
        padding: unset !important;
    }
        
    .dt-cell__content {
        padding: unset !important;
        padding: unset !important;
        border: unset !important;
        border: unset !important;
        height: 100% !important;
        text-overflow: unset !important;
        /*white-space: unset !important;*/
        overflow: unset !important;
    }
    
    .dt-cell__content > div{
        height: 100% !important;
        padding: 5px;
        text-align: left;
    }
    
    .dt-row-header .dt-cell__content{
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold !important;
    }
    
    .dt-cell.dt-cell--col-39, .dt-cell.dt-cell--col-38, .dt-cell.dt-cell--col-37{
        display: none !important;
    }
        
    /* Work Order list */

    div.Inprogress{
        background: #6cc56f;
        background-color: #6cc56f;
    }
    
    div.Complete{
        background: #008000 !important;
        background-color: #008000 !important;
    }
    
    div.Open{
        background: #dcdcdc;
        background-color: #dcdcdc;
    }

    div.JO-Issue{
        background: #ffc107;
        background-color: #ffc107;
    }
    
    div.Overdue{
        background: #db8585;
        background-color: #db8585;
    }   
    
    div.Overdue.JO-Issue.Inprogress{
        background: #ffc107 !important;
        background-color: #ffc107 !important;
    }
    
    div.Overdue.JO-Issue.Completed{
        background: #008000 !important;
        background-color: #008000 !important;
    }    
    
    div.Overdue.JO-Issue{
        background: #ffc107 !important;
        background-color: #ffc107 !important;
    }    
    
    .frappe-list .result .list-row-container .level.list-row .level-left.ellipsis div:nth-child(3),
    .frappe-list .result .list-row-container .level.list-row .level-left.ellipsis div:nth-child(10),
    .frappe-list .result .list-row-container .level.list-row .level-left.ellipsis div:last-child,
    .frappe-list .result header .list-header-subject div:nth-child(3),
    .frappe-list .result header .list-header-subject div:nth-child(10),
    .frappe-list .result header .list-header-subject div:last-child,
    .list-row-like, .list-liked-by-me{
        display: none;
    }
    
    input[type=checkbox]:checked {
        background-size: 100%;
        background-repeat: no-repeat;
    }
    
    input[type="checkbox"]{
        background: #fff;
        transform: scale(1.3);
    }
    
    .priority{
        box-shadow: 10px 0px 0px #06c inset;
    }

    .list-row:hover{
        background-color: unset !important;
        text-decoration: underline;
        cursor: pointer;
    }
    
    .div.menu-btn-group, .level-right{
        display: none;
    }
    
    input.list-check-all, 
    .list-liked-by-me{
        pointer-events: none;
        opacity: 0
    }
    
    div[data-fieldname="production_item"], 
    div[data-fieldname="name"]{
        pointer-events: none;
        display: none !important;
    }


`;

let empty = (data) => {
    data = ((typeof data === 'object') && data != null) ? (data.length) : ((data === 'undefined') ? undefined : data); 
    let toCheck = ["", null, undefined, "undefined", 0];
    return (toCheck.indexOf(data) >= 0);
}

$("head style").append(style);

console.log(frappe);

let isLogged = sessionStorage.getItem('isLogged');

redirectUser = () => {
    let isLoaded = $('script').on('load');
    let role = frappe.user_roles;

    let recursion = setTimeout( () => {
        redirectUser();
    }, 100)
    
    if(!empty(isLoaded.length) && !empty(role)){
        let url = window.location.href;
    
        $("body").attr({'data-role': role[0]});
        sessionStorage.setItem('isLogged', true);

        clearTimeout(recursion);

        // checks user's role and last login time. if it is less than 5 seconds, the system will redirect you.

        if(empty(isLogged) && !role.includes("Administrator")){
            if(role.includes('Plant Manager') && empty(url.match(/\/Production(.*)Table/gi))){
                window.location = '/app/query-report/Production%20Table';
            }
            else if(role.includes('Production Planner') && empty(url.match(/work-order/gi))){
                window.location = '/app/work-order';
            }
            else if(role.includes('Operator') && empty(url.match(/\/job-card/gi))){
                window.location = 'app/job-card';
            }
        }
    
        $("header.navbar a[href='/app']").attr({"href":"/"});
    }

    return 0;
}

redirectUser();