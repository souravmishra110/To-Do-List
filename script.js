// alert("Is Connected");

let list = [0,1,2,3,4];

function addList(){
    let val = prompt("To-do");
    list.push(val);
    console.log(val + " is Added to To-do List")
}

function viewList(){
    console.log("******************");
    let i = 0;
    while(i < list.length){
        console.log((i+1) + ". " + list[i]);
        i++;
    }
    console.log("******************");
}

function deleteIndexList(index){
    // console.log("******************");
    if(index >= list.length){
        console.log("Failed To delete -- ######");
    }
    else{
        list.splice(1,1);
        console.log("Deleted Successfully");
    }
    
}

let trigger = "start";

while(true){
    trigger = prompt("Choice");
    if(trigger === "new"){
        addList();
    }
    else if(trigger === "list"){
        viewList();
    }
    else if(trigger === "delete"){
        var index = prompt("Index");
        deleteIndexList(index);
    }
    else{
        console.log("OK , You quit The app");
        break;
    }
}