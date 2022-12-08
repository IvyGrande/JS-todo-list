let list = [
    {
        id:1,
        text: 'item1',
        status: true,
    },{
        id:2,
        text: 'item2',
        status: false,
    },{
        id:3,
        text: 'item3',
        status: true,
    }
]

function addOneItem(item){
    let allLists = list.concat(item);
    return allLists;
}

function getItemById(id){
    return list.filter(function (e){
        if(e.id == id){
            return e;
        }
    })
}

function getByStatusFinished(){
    return list.filter(function (e){
        if(e.status){
            return e;
        }
    })
}

function getByStatusUnFinished(){
    return list.filter(function (e){
        if(!e.status){
            return e;
        }
    })
}

function findIndexById(id){
    return list.findIndex(x => x.id == id);
}

function deleteItem(index){
    list.splice(index,1);
    return list;
}

function clearAllItems(){
    list.length = 0;
    return;
}





