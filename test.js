console.log('Loaded ESCO JS');

let empty = (data) => {
    data = ((typeof data === 'object') && data != null) ? (data.length) : ((data === 'undefined') ? undefined : data); 
    let toCheck = ["", null, undefined, "undefined", 0];
    return (toCheck.indexOf(data) >= 0);
}

let isLogged = sessionStorage.getItem('isLogged');
let role = frappe.user_roles;

let redirect_user = () => {
    let isLoaded = $('script').on('load');

    let recursion = setTimeout( () => {
        redirect_user();
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

let toggle_notification_icon = (seen) => {
    $('.dropdown-notifications .notifications-icon').find(".notifications-seen").toggle(seen);
    $('.dropdown-notifications .notifications-icon').find(".notifications-unseen").toggle(!seen);
}

let append_item_to_notification = (data) => {
    // get the unread items that are already in the notification
    let unread = [];
    $('.panel-notifications > div a.unread').map( (key,item) => {unread = [...unread, +item.dataset.name]} )

    // loop the unread items to generate html that can be appended in the list
    data.map( (item) => {
        let {creation, document_name, document_type, from_user, name, read, subject} = item;

        // the system will halt if all items are in the notification list
        if(unread.includes(name))
            return;
        
        let doc_link = frappe.utils.get_form_link(document_type, document_name),
            read_class = read ? "" : "unread",
            message = subject,
            title = message.match(/<b class="subject-title">(.*?)<\/b>/),
            user_avatar = frappe.avatar(from_user, "avatar-medium user-avatar"),
            timestamp = frappe.datetime.comment_when(creation);

        message = title ? message.replace(title[1], frappe.ellipsis(strip_html(title[1]), 100)) : message;

        let message_html = `<div class="message">
                                <div>${message}</div>
                                <div class="notification-timestamp text-muted">
                                    ${timestamp}
                                </div>
                            </div>`;

        let item_html = $(`<a class="recent-item notification-item unread" href="${doc_link}" data-name="${name}" >
                            <div class="notification-body">
                                ${user_avatar}
                                ${message_html}
                            </div>
                        </a>`);

        $(item_html).prependTo($('.panel-notifications > div'));    
    } )
}

let check_notification = async() => {
    let notification = await frappe.call({method: "check_notification", args: {user: frappe.session.user}, callback: (response) => { return response.message.message } });
    notification = notification.message;

    console.log(notification)
    if(notification.length){
        toggle_notification_icon(false);
        append_item_to_notification(notification)
    }
    else{
        toggle_notification_icon(true);
    }

    let timer = setTimeout( () => {
        check_notification()
    }, 1000 );
}

$(document).ready( () => { 
    let {excluded_roles, roles} = {excluded_roles: ['Operator'], roles: frappe.user_roles}

    redirect_user();
    
    if(!excluded_roles.some(item => roles?.includes(item)))
        check_notification()
} )

