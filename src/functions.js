function sortByDate(elems) {    
    elems.sort((a, b) => dateStamp(b.dateValue) - dateStamp(a.dateValue));
    return elems
}

function dateStamp(dateString) {
    return Date.parse(formDate(dateString));
}

function formDate(dateString) {
    return '20' + dateString.slice(6) + '-' + dateString.slice(3,5) + '-' + dateString.slice(0,2)
}

function validDate(dateString) {
    const regExp = /^([0-2][1-9]|[1-3]0|31)\.(0[1-9]|1[0-2])\.\d\d$/;
    return dateString.match(regExp);
}

function validDist(distString) {
    const regExp = /^\d+\.?\d*$/;
    return distString.match(regExp);
}

function listFilter(list, currentTarget) {
    return list.filter(el => { 
        const formEl = el.dateValue.slice(0,6) + "20" + el.dateValue.slice(6);
        return formEl !== currentTarget.firstElementChild.textContent
    });
}   

const handleDataFunc = function(list, setDateInp, setDistInp, setList) {
    return (
        ({target, currentTarget}) => {                               
            if (target.classList.contains('del-btn')) {
                setDateInp(() => '');
                setDistInp(() => ''); 
                setList(()=> listFilter(list, currentTarget));                                         
            }
            if (target.classList.contains('cng-btn')) {
                const chosenDate = currentTarget.firstElementChild.textContent.slice(0,6) + 
                currentTarget.firstElementChild.textContent.slice(8);                                        
                setDateInp(() => chosenDate);
                setDistInp(() => currentTarget.firstElementChild.nextElementSibling.textContent);
                setList(()=> listFilter(list, currentTarget));                                    
            }                 
        })
    }
    
    export {handleDataFunc, sortByDate, validDate, validDist};
    