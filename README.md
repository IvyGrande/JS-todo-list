# project2
Todolist
需求说明：
1.作为一个用户，我可以点击“what's next?”查看事件
2.鼠标选在list时，可以选择删除事件
3.在完成事件时，可以点击圆圈标识，生成对勾标识，表示已完成事件
4.在下方选框内，我可以添加新事件到list
5.尾部标识栏内，可以（1）显示我有几件事件没有完成
（2）分类查看事件
（3）清空所有事件
Task1:
1.Basic UI construction
Task2:
1.add event to list
2.edit event on the list
3.delete unwanted event
4.when press the circle,draw a line on event
5.when click "Clear completed",all items clear
Task3:
1.count items left
2.finalize options
--------------------------------------------------------
1.增加事件：input 新元素，output：新数组      let newList = arr.concat(list);
2.查看事件：for循环遍历数组
for(let i = 0;i < arr.length; i++){
    console.log('${i}:${arr[i]}')
}
3.删除事件：arr.splice();
4.改变事件状态：arr.splice();
5.读取事件状态：let unfinishedList = arr.filter();return unfinishedList.length;
6.返回符合条件的数组：let allList = arr.filter();
7.清空数组：list.length = 0;
--------------------------------------------------------
Tasks:
1.input new items,return new list
2.click arrow button,show all list
3.hover on one list,show delete button
4.click delete button,delete selected item
5.click circle logo,change the status of item
6.count one status of all items,return the num
7.click selected button,return all selected items
8.click clear completed button,deleted all completed items




