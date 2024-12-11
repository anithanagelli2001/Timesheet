const MyTaskItem=(props)=>{
    const {each,}=props
    const {taskId, taskName, taskDetails, taskAssignedFrom, effectiveDate, dueDate, taskStatus}=each

    var today = new Date(); // This gets today's date

var anotherDate = new Date(dueDate); // This is another date you want to compare with today's date

const status=()=>{
    if(taskStatus){
        return <td className="px-6 py-4 whitespace-nowrap text-xl text-lime-700">
    Completed
</td>}

    else if (today.toDateString() === anotherDate.toDateString()) {
        return <td className="px-6 py-4 whitespace-nowrap text-xl text-orange-500">
    Complete by today
</td>
    }
else if (today < anotherDate) {
    return <td className="px-6 py-4 whitespace-nowrap text-xl text-lime-700">
    Pending
</td>
} else if (today > anotherDate) {
    return <td className="px-6 py-4 whitespace-nowrap text-xl text-red-500">
    Overdue
</td>
} else {
    return <td className="px-6 py-4 whitespace-nowrap text-xl text-lime-700">
    Pending
</td>
}
}


return (
    <tr key={taskId}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4">

                                                    <div className="text-xl text-gray-500">{taskAssignedFrom}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-xl text-gray-900">{taskName}</div>
                                            <div className="text-xl text-gray-500">{taskDetails}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-500">
                                            {effectiveDate}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-500">
                                            {dueDate}
                                        </td>
                                        {status()}

                                    </tr>
)
}

export default MyTaskItem;