let  input = document.querySelector('[data-input]');
const btns = document.querySelector('[data-submitbtns]');
const listing = document.querySelector('[data-tasks]')

function tasks(){
    if(input.value.trim() !== ""){
        const cont = document.createElement('div');

        const orderlist = document.createElement('li');
        // this one is adding in the js into the css
        cont.classList.add('cons')
        orderlist.classList.add('order_lists');


        orderlist.innerText = input.value;
        const del = document.createElement('button')
        const res = document.createElement('button')
        del.innerText = "delete";
        res.innerText = "Reset";

        cont.append(del);
        cont.append(res);

        listing.append(orderlist)
        listing.append(cont)

        del.addEventListener('click',()=>{
            let prev = orderlist.innerText;
            cont.remove(); 
            orderlist.remove();
            const delted = document.querySelector('[data-delete-tasks]');
            const box = document.createElement('li');
            box.innerText = prev;
            delted.append(box);
        })
        res.addEventListener('click',()=>{
            let temp = orderlist.innerText;
            console.log('the Data is '+'\n'+temp)
            orderlist.innerText = " ";
            let data = prompt(String("enter the task that you wnat to append"));
            orderlist.innerText = data;
            console.log("the edites text is "+'\n'+data);
        })
        input.value = ""
    }
}
btns.addEventListener('click',tasks)



// function Deletion (temp){
//     console.log(temp)
    // const delted = document.querySelector('[data-delted-taks]');
    // const box = document.createElement('p');
//     box.innerText = temp;
//     delted.append(box);    
// }