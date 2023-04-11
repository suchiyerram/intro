const saveChanges=() => {
    const taskData={
        id:`${Date.now}`,
        imageurl:document.getElementById("ImageUrl").value,
        tasktitle:document.getElementById("ImageUrl").value,
        tasktype:document.getElementById("ImageUrl").value,
        taskdescription:document.getElementById("ImageUrl").value
    }
    console.log(taskData);
}