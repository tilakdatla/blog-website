/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/

import { blog } from "./blogData.js"; 

function blogdetail()
{
 var name=document.querySelector('#name').value;
 var title=document.querySelector('#title').value;
 var subtitle=document.querySelector('#subtitle').value;
 var imgsrc=document.querySelector('#img').value;
 var data=document.querySelector('#data').value;
 const d = new Date();
 const year = d.getFullYear();
 const month = d.toLocaleString('default', { month: 'long' }); // This will give you the name of the month
 const date = d.getDate();
 const formattedDate = month + ' ' + date + ', ' + year;
 
 if(name && title && subtitle && imgsrc && data)
 {
    var data={title:title,
        subtitle:subtitle,
        data:data,
        name:name,
        imgsrc:imgsrc,
        date:formattedDate,
    }
    blog.push(data);
 }

}


